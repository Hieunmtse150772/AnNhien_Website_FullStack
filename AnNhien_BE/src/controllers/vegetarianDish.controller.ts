import { NextFunction, Request, Response } from 'express';

import {
  AuthenticatedRequestBody,
  IUser,
  IVegetarianDish,
  ReviewVegetarianDishT,
  TPaginationResponse,
} from '@src/interfaces';
import {
  addReviewService,
  clearCartService,
  deleteReviewService,
  getCartService,
  getVegetarianDishService,
  getVegetarianDishesService,
  addVegetarianDishService,
  getReviewsService,
} from '@src/services';

export const getVegetarianDishesController = (req: Request, res: TPaginationResponse) => getVegetarianDishesService(req, res);

export const getVegetarianDishController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) =>
  getVegetarianDishService(req, res, next);

export const addVegetarianDishController = ( req: AuthenticatedRequestBody<IVegetarianDish>, res: Response, next: NextFunction) =>{
  addVegetarianDishService(req, res, next)
}

export const addReviewController = (req: AuthenticatedRequestBody<ReviewVegetarianDishT>, res: Response, next: NextFunction) =>
  addReviewService(req, res, next);

export const deleteReviewController = (
  req: AuthenticatedRequestBody<ReviewVegetarianDishT>,
  res: Response,
  next: NextFunction
) => deleteReviewService(req, res, next);

export const getReviewsController = (
  req: AuthenticatedRequestBody<ReviewVegetarianDishT>,
  res: Response,
  next: NextFunction
) => getReviewsService(req, res, next);

export const getCartController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) =>
  getCartService(req, res, next);

export const clearCartController = (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) =>
  clearCartService(req, res, next);

export default {
  getVegetarianDishesController,
};
