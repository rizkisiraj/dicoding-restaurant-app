import CONFIG from '../../globals/config';
import 'lazysizes';

const createRestaurantTemplate = (restaurant) => `<article id="${restaurant.id}" class="card">
  <div class="card__img">
      <img loading="lazy" class="lazyload" src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}, ${restaurant.city}">
  </div>
  <div class="card__text">
  <div class="card__content">
      <h3 tabindex="0" class="card__title">${restaurant.name}</h3>
      <p tabindex="0">${restaurant.city}</p>
  </div>
  <div class="card__footer">
    <div class="rating">
      <span class="material-symbols-outlined">
        star
      </span>
      <span class="rating__number">${restaurant.rating}</span>
    </div>
    <a tabindex="0" aria-label="Click to Restaurant" href="/#/detail/${restaurant.id}" class="card__button">
    <span class="material-symbols-outlined arrow">
    arrow_right_alt
    </span>
    </a> 
  </div>
  </div>
</article>
`;

const createReviewTemplate = (review) => ` <div class="review-card">
    <div class="review-title">
      <h5 tabindex="0">${review.name}</h5>
      <span tabindex="0" class="review-date">${review.date}</span>
    </div>
    <p tabindex="0" class="review-desc">${review.review}</p>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `<article id="${restaurant.id}" class="restaurant-detail">
<span tabindex="0" class="restaurant-tag">Restaurant</span>
<div class="restaurant__info">
  <h1>${restaurant.name}</h1>
  <div class="restaurant-side-info">
    <div class="info">
      <h2>Rating</h2>
      <p><strong>${restaurant.rating}</strong> Bintang</p>
    </div>
    <div class="info middle">
      <h2>Lokasi</h2>
      <p class="orange"><strong>${restaurant.city}</strong></p>
    </div>
    <div class="info">
      <h2>Alamat</h2>
      <p><strong>${restaurant.address}</strong></p>
    </div>
  </div>
</div>
<div class="restaurant-image__container">
  <picture>
    <source media="(max-width: 600px)" srcset="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}` : 'https://picsum.photos/200/300'}">
    <source media="(max-width: 768px)" srcset="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}` : 'https://picsum.photos/200/300'}">
    <img class="lazyload restaurant-image" src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}` : 'https://picsum.photos/200/300'}" alt="${restaurant.name}">
  </picture>
</div>
<div class="restaurant__content">
  <div class="restaurant-description">
    <h2 tabindex="0">Deskripsi Restaurant</h2>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <aside class="restaurant-sides">
  <div class="restaurant-menus">
    <h3>Makanan</h3>
    <ul class="food-list">
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    <h3>Minuman</h3>
    <ul class="food-list">
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
    </div>
    <div id="likeButtonContainer"></div>
  </aside>
</div>
<div class="restaurant-comments__container">
      <h2 tabindex="0">Review Kustomer</h2>
      <div class="restaurant-comments">
        ${restaurant.customerReviews.map((review) => createReviewTemplate(review)).join('')}
      </div>
      </div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     Add to Favorite
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    Remove From Favorite
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
