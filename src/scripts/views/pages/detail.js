import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantAPISource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import FormInitiator from '../../utils/form-initiator';
import LikeButtonInitiator from '../../utils/likeButton-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
     <section class="detail__section">

    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantAPISource.getRestaurantDetail(url.id);
    console.log(restaurant);
    const detailSection = document.querySelector('.detail__section');

    detailSection.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        description: restaurant.description,
        menus: restaurant.menus,
        customerReviews: restaurant.customerReviews,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
    FormInitiator.init(restaurant.id);
  },

};

export default Detail;
