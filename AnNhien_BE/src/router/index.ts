import express from 'express';

import authentication from './authentication';
import vegetarianDish from './vergetarionDish'
import vergetarionRestaurant from './vergetarionRestaurant';
import buddhistBook from './buddhistBook';
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  vegetarianDish(router);
  vergetarionRestaurant(router);
  buddhistBook(router);
  return router;
};