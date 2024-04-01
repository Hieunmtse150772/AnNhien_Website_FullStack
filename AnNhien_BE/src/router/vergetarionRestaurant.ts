import express from 'express';
import {
    createVegetarianRestaurant,
    getVegetarianRestaurants,
    updateVegetarianRestaurant,
    deleteVegetarianRestaurant,
} from '../controllers/vegetarianRestaurant.controller';

export default (router: express.Router) => {
    router.post('/vegetarian-restaurants', createVegetarianRestaurant);

    // Lấy danh sách các địa điểm ăn chay
    router.get('/vegetarian-restaurants', getVegetarianRestaurants);

    // Cập nhật thông tin một địa điểm ăn chay
    router.put('/vegetarian-restaurants/:id', updateVegetarianRestaurant);

    // Xóa một địa điểm ăn chay
    router.delete('/vegetarian-restaurants/:id', deleteVegetarianRestaurant);

}
// Tạo một địa điểm ăn chay mới
