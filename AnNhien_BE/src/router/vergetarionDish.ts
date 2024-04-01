import express from 'express';
import {
    createVegetarianDish,
    getVegetarianDishes,
    updateVegetarianDish,
    deleteVegetarianDish,
} from '../controllers/vegetarianDish.controller';

export default (router: express.Router) => {

    // Tạo một món chay mới
    router.post('/vegetarian-dishes', createVegetarianDish);

    // Lấy danh sách các món chay
    router.get('/vegetarian-dishes', getVegetarianDishes);

    // Cập nhật thông tin một món chay
    router.put('/vegetarian-dishes/:id', updateVegetarianDish);

    // Xóa một món chay
    router.delete('/vegetarian-dishes/:id', deleteVegetarianDish);

}