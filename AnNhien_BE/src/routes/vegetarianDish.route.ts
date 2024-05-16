import express from 'express';

import vegetarianDishesPaginationMiddleware from '@src/middlewares/sort-filter-pagination/vegetarianDishesFeatures.middleware';
import { addVegetarianDishController, getVegetarianDishController, getVegetarianDishesController } from '@src/controllers/vegetarianDish.controller';
import { addVegetarianDishValidation, customRoles, isAuth, uploadImage } from '@src/middlewares';
import { environmentConfig } from '@src/configs';
import { authorizationRoles } from '@src/constants';

const router = express.Router();

router.route('/')
    .get(vegetarianDishesPaginationMiddleware(), getVegetarianDishesController)
    .post(
        isAuth,
        customRoles(environmentConfig.ADMIN_EMAILS, authorizationRoles.admin),
        uploadImage.array('vegetarianDishImages'),
        addVegetarianDishValidation,
        addVegetarianDishController
    );
router.get('/:vegetarianDishId', getVegetarianDishController);

export = router;
