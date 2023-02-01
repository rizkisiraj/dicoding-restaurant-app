/* eslint-disable */

export const itShouldActAsFavoriteRestaurantModel = (favoriteRestaurantModel) => {
  it('should return the restaurant that has been added', async () => {
    await favoriteRestaurantModel.putRestaurant({ id: 1 });
    await favoriteRestaurantModel.putRestaurant({ id: 2 });

    expect(await favoriteRestaurantModel.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurantModel.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurantModel.getRestaurant(3)).toEqual(undefined);
  });

  it('should return all restaurants that has been added', async () => {
    await favoriteRestaurantModel.putRestaurant({ id: 1 });
    await favoriteRestaurantModel.putRestaurant({ id: 2 });

    expect(await favoriteRestaurantModel.getRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should not add a restaurant if that restaurant does not have the desired property', async () => {
    await favoriteRestaurantModel.putRestaurant({ randomProperty: 'property' });

    expect(await favoriteRestaurantModel.getRestaurants()).toEqual([]);
  });

  it('should remove restaurant', async () => {
    await favoriteRestaurantModel.putRestaurant({ id: 1 });
    await favoriteRestaurantModel.putRestaurant({ id: 2 });
    await favoriteRestaurantModel.putRestaurant({ id: 3 });

    await favoriteRestaurantModel.deleteRestaurant(1);

    expect(await favoriteRestaurantModel.getRestaurants()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should handle request eventhough the restaurant is not on the list', async () => {
    await favoriteRestaurantModel.putRestaurant({ id: 1 });
    await favoriteRestaurantModel.putRestaurant({ id: 2 });
    await favoriteRestaurantModel.putRestaurant({ id: 3 });

    await favoriteRestaurantModel.deleteRestaurant(4);

    expect(await favoriteRestaurantModel.getRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

}