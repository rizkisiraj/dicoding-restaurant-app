/* eslint-disable */

import { itShouldActAsFavoriteRestaurantModel } from './contracts/FavoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Movie Contract', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getRestaurants()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itShouldActAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});