const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({I}) => {
  I.see('Tidak Ada Restoran Favorit', '.empty-restaurant');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('Tidak Ada Restoran Favorit', '.empty-restaurant');

  I.amOnPage('/');
  I.waitForElement('.card__button');

  const firstRestaurantButton = locate('.card__button').first();
  const firstRestaurant = locate('.card__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurantButton);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card__button');
  const likedRestaurantTitle = await I.grabTextFrom('.card__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
