import { NextFunction, Request, Response } from 'express';
import createHttpError, { InternalServerError } from 'http-errors';

import {
  AuthenticatedRequestBody,
  IUser,
  TPaginationResponse,
  IVegetarianDish,
} from '@src/interfaces';
import { customResponse, deleteFile, isValidMongooseObjectId } from '@src/utils';
import VegetarianDishModel from '@src/models/VegetarianDish.model';
import { cloudinary } from '@src/middlewares';

export const getVegetarianDishesService = async (_req: Request, res: TPaginationResponse) => {
  if (res?.paginatedResults) {
    const { results, next, previous, currentPage, totalDocs, totalPages, lastPage } = res.paginatedResults;
    const responseObject: any = {
      totalDocs: totalDocs || 0,
      totalPages: totalPages || 0,
      lastPage: lastPage || 0,
      count: results?.length || 0,
      currentPage: currentPage || 0,
    };

    if (next) {
      responseObject.nextPage = next;
    }
    if (previous) {
      responseObject.prevPage = previous;
    }

    responseObject.VegetarianDishes = results?.map((VegetarianDishDoc: any) => {
      const { user, ...otherVegetarianDishInfo } = VegetarianDishDoc._doc;
      return {
        ...otherVegetarianDishInfo,
        request: {
          type: 'Get',
          description: 'Get one VegetarianDish with the id',
          url: `${process.env.API_URL}/api/${process.env.API_VERSION}/vegetarianDishes/${VegetarianDishDoc._doc._id}`,
        },
      };
    });

    return res.status(200).send(
      customResponse<typeof responseObject>({
        success: true,
        error: false,
        message: 'Successful Found VegetarianDishes',
        status: 200,
        data: responseObject,
      })
    );
  }
};
export const addVegetarianDishService = async (
  req: AuthenticatedRequestBody<IVegetarianDish>,
  res: Response,
  next: NextFunction
) => {

  const { dishName, dishType, title, tutorialVideo, chefName, timeCooking, timePrepare, description } = req.body;

  const imageUrlList: any[] = [];
  console.log('req: ', req.body)
  const userId = req?.user?._id || '';

  try {
    if (req.files) {
      for (let index = 0; index < Number(req?.files?.length); index += 1) {
        // @ts-ignore
        const element = req.files && req.files[index].filename;

        // localFilePath: path of image which was just
        // uploaded to "public/uploads/products" folder
        const localFilePath = `${process.env.PWD || process.cwd()}/public/uploads/vegetarianDishes/${element}`;
        // eslint-disable-next-line no-await-in-loop
        const result = await cloudinary.uploader.upload(localFilePath, {
          folder: 'vegetarianDishes',
        })
        
        imageUrlList.push({
          
          url: result?.secure_url,
          cloudinary_id: result?.public_id,
        });

        // Image has been successfully uploaded on
        // cloudinary So we dont need local image file anymore
        // Remove file from local uploads folder
        // eslint-disable-next-line no-await-in-loop
        await deleteFile(localFilePath);
      }
    }
    const vegetarianDishData = new VegetarianDishModel({
      dishName,
      title,
      chefName,
      timeCooking,
      timePrepare,
      description,
      tutorialVideo,
      vegetarianDishImages: imageUrlList,
      dishType
    });
    console.log('data: ', vegetarianDishData);
    const createdDish = await VegetarianDishModel.create(vegetarianDishData);
    const data = {
      vegetarianDish: {
        _id: createdDish._id,
        dishName: createdDish.dishName,
        recipe: createdDish.recipe,
        chefName: createdDish.chefName,
        tutorialVideo: createdDish.tutorialVideo,
        vegetarianDishImages: createdDish.vegetarianDishImages,
        timeCooking: createdDish.timeCooking,
        timePrepare: createdDish.timePrepare,
        description: createdDish.description,
        user: {
          name: req.user?.name,
          surname: req.user?.surname,
          email: req.user?.email,
          dateOfBirth: req.user?.dateOfBirth,
          gender: req.user?.gender,
          createdAt: req.user?.createdAt,
          updatedAt: req.user?.updatedAt,
          role: req.user?.role,
        },
        request: {
          type: 'Get',
          description: 'Get  all vegetarianDishes',
          url: `${process.env.API_URL}/api/${process.env.API_VERSION}/vegetarianDish`,
        },
      }

    }
    return res.status(201).send(
      customResponse<typeof data>({
        success: true,
        error: false,
        message: 'Successfully created new vegetarian dish',
        status: 201,
        data,
      })
    );
  } catch (error: any) {
    if (req.files) {
      for (let index = 0; index < Number(req?.files?.length); index += 1) {
        // @ts-ignore
        const element = req.files && req.files[index].filename;
        const localFilePath = `${process.env.PWD || process.cwd()}/public/uploads/vegetarianDish/${element}`;
        // eslint-disable-next-line no-await-in-loop
        await deleteFile(localFilePath);
      }
    }
    // return next(InternalServerError);
    return next(error);
  }
}

export const getTop5CheapestVegetarianDishesService = async (req: Request, res: Response, next: NextFunction) => {
  req.query.limit = '5';
  req.query.sort = '-ratings,price';
  req.query.limit = '5';
  req.query.fields = '-_v';
  next();
};

export const getVegetarianDishService = async (req: AuthenticatedRequestBody<IUser>, res: Response, next: NextFunction) => {
  if (!isValidMongooseObjectId(req.params.VegetarianDishId) || !req.params.VegetarianDishId) {
    return next(createHttpError(422, `Invalid request`));
  }

  try {
    const vegetarianDish = await VegetarianDishModel.findById(req.params.VegetarianDishId);

    if (!vegetarianDish) {
      return next(new createHttpError.BadRequest());
    }

    const { user, ...otherVegetarianDishInfo } = vegetarianDish._doc;

    const data = {
      vegetarianDish: {
        ...otherVegetarianDishInfo,
        request: {
          type: 'Get',
          description: 'Get all the VegetarianDish',
          url: `${process.env.API_URL}/api/${process.env.API_VERSION}/VegetarianDishes`,
        },
      },
    };

    return res.status(200).send(
      customResponse<typeof data>({
        success: true,
        error: false,
        message: `Successfully found VegetarianDish by ID: ${req.params.VegetarianDishId}`,
        status: 200,
        data,
      })
    );
  } catch (error) {
    return next(InternalServerError);
  }
};


export default getVegetarianDishesService;
