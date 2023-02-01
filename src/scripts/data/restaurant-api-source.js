import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPISource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    console.log(response);
    return response.json();
  }

  static async addCustomerReview(reviewObject) {
    const reviewJSON = JSON.stringify(reviewObject);
    const response = await fetch(API_ENDPOINT.REVIEWS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: reviewJSON,
    });
    console.log(response.json());
    console.log(reviewJSON);
  }
}

export default RestaurantAPISource;
