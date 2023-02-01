import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
  <div class="favorite-section__title">
    <h2>Favorite <strong class="orange">Restaurant</strong></h2>
  </div>
  <section class="restaurant-card__container">

  </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant-card__container');
    console.log(restaurants.length);
    if (!restaurants.length > 0) {
      restaurantsContainer.classList.remove('restaurant-card__container');
      restaurantsContainer.innerHTML += '<p class="empty-restaurant" style="text-align: center;">Tidak Ada Restoran Favorit</p>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    }
  },

};

export default Favorite;
