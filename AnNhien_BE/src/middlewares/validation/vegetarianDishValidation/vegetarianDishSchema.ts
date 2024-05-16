import Joi from 'joi';

// @ts-ignore
import JoiObjectId from 'joi-objectid';

const vaildObjectId = JoiObjectId(Joi);

export const vegetarianDishSchema = {
  addVegetarianDish: Joi.object({
    vegetarianDishImages: Joi.array()
      .items(
        Joi.object()
          .keys({
            filename: Joi.string().required().label('Invalid request (Please upload Image)'),
          })
          .required()
          .label('Invalid request (Please upload Image)')
      )
      .required(),
    dishName: Joi.string().min(3).max(100).required(),
    dishType: Joi.string().min(3).max(100).required(),
    timePrepare: Joi.string().required(),
    timeCooking: Joi.string().required(),
    description: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string(),
    recipeFile: Joi.string(),
    tutorialVideo: Joi.string(),
    chefName: Joi.string(),
    _id: Joi.string(),
    createdAt: Joi.string(),
    updatedAt: Joi.string(),
    category: Joi.string(),
  }),
  updateVegetarianDish: Joi.object({
    vegetarianDishImage: Joi.array()
      .items(
        Joi.object()
          .keys({
            filename: Joi.string().required().label('Invalid request (Please upload Image)'),
          })
          .required()
          .label('Invalid request (Please upload Image)')
      )
      .required(),
    dishName: Joi.string().min(3).max(100).required(),
    dishType: Joi.string().min(15).required(),
    recipe: {
      timePrepare: Joi.string().required(),
      timeCooking: Joi.string().required(),
      description: Joi.string().required(),
    },
    title: Joi.string().required(),
    content: Joi.string(),
    recipeFile: Joi.string(),
    tutorialVideo: Joi.string(),
    chefName: Joi.string(),
    _id: Joi.string(),
    createdAt: Joi.string(),
    updatedAt: Joi.string(),
    category: Joi.string(),
    cloudinary_id: Joi.string(),

  }),
  reviewVegetarianDish: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().min(3).max(300).required(),
    productId: vaildObjectId().required().label('Invalid request (Please please provide vaild product id)'),
  }),
  validatedVegetarianDishId: Joi.object({
    productId: vaildObjectId().required(),
  }),
};

export default vegetarianDishSchema;
