import { RequestHandler } from 'express';
import validator from '../validator';
import { vegetarianDishSchema } from './vegetarianDishSchema';

export const addVegetarianDishValidation: RequestHandler = (req, res, next) => {
  return validator(
    vegetarianDishSchema.addVegetarianDish,
    {
      vegetarianDishImages: req.files,
      ...req.body,
    },
    next
  );
};

export const updateVegetarianDishValidation: RequestHandler = (req, res, next) => {
  return validator(
    vegetarianDishSchema.updateVegetarianDish,
    {
      ...req.params,
      vegetarianDishImages: req.files,
      ...req.body,
    },
    next
  );
};

export const reviewVegetarianDishValidation: RequestHandler = (req, res, next) =>
  validator(vegetarianDishSchema.reviewVegetarianDish, { ...req.body }, next);

export const vegetarianDishIdValidation: RequestHandler = (req, res, next) =>
  validator(vegetarianDishSchema.validatedVegetarianDishId, { ...req.body, ...req.params }, next);
