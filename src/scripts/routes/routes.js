import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import RestaurantList from '../views/pages/landingPage';

const routes = {
  '/': RestaurantList,
  '/restaurant-list': RestaurantList,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
