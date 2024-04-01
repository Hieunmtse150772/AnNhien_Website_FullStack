import express, { Router } from 'express';
import {
    createBuddhistBook,
    getBuddhistBooks,
    updateBuddhistBook,
    deleteBuddhistBook,
} from '../controllers/buddhistBook.controller';
export default (router: express.Router) => {
    router.post('/buddhist-books', createBuddhistBook);

    // Lấy danh sách các sách Phật giáo
    router.get('/buddhist-books', getBuddhistBooks);

    // Cập nhật thông tin một sách Phật giáo
    router.put('/buddhist-books/:id', updateBuddhistBook);

    // Xóa một sách Phật giáo
    router.delete('/buddhist-books/:id', deleteBuddhistBook);
}
