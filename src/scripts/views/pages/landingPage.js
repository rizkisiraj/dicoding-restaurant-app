import RestaurantAPISource from '../../data/restaurant-api-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <section class="hero" id="heroSection">
    <div class="main__title">
      <h2>Cari restoran terdekat <strong>sesuai seleramu</strong>!</h2>
      <p class="hero-description">Puluhan restoran berbintang yang disediakan sesuai bermacam-macam cita rasa yang ada di Dunia. Kami hadirkan semua hanya untuk anda.</p>
      <a id="jelajahiRestoranButton" aria-label="button-to-link" href="#main__section">Jelajahi Restoran</a>
    </div>
    <div class="hero-image__container">
    <picture>
      <source media="(max-width: 600px)" type="image/webp" srcset="./images/hero-image-1-small.webp 480w">
      <source media="(max-width: 600px)" type="image/png" srcset="./images/hero-image-1-small.png 480w">
      <source type="image/webp" srcset="./images/hero-image-1-large.webp">
      <img src="./images/heros/hero-image-1-large.png" alt="chef memasak" />
   </picture>
    </div>
    </section>
    <section class="statistic-section">
      <h3>20+</h3>
      <p>Restoran hanya Untukmu<p>
    </section>
    <section class="main__section" id="main-content" tabindex="0">
      <h2 tabindex="0">Daftar <span>Restoran</span></h2>
      <div class="restaurant-card__container"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAPISource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant-card__container');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },

};

export default RestaurantList;
