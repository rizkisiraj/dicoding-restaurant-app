import RestaurantAPISource from '../data/restaurant-api-source';

const FormInitiator = {
  async init(id) {
    const form = document.querySelector('#reviewForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.querySelector('#reviewNameInput').value;
      const review = document.querySelector('#reviewTextarea').value;
      console.log(`name : ${name}, review : ${review}`);
      await RestaurantAPISource.addCustomerReview({
        id,
        name,
        review,
      });
    });
  },
};

export default FormInitiator;
