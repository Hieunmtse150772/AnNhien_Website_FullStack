import { Request, Response } from 'express';
import { IBuddhistBook, BuddhistBookModel } from '../models/buddhistBook';

// CREATE
export const createBuddhistBook = async (req: Request, res: Response) => {
  try {
    const newBook: IBuddhistBook = req.body;
    console.log('Request body: ', newBook);
    if (newBook.$isEmpty) {
      return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
    } 
    const createdBook = await BuddhistBookModel.create(newBook);
    res.status(201).json({ message: 'Buddhist Book đã được tạo thành công.', newBook: createdBook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
export const getBuddhistBooks = async (req: Request, res: Response) => {
  try {
    const books = await BuddhistBookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateBuddhistBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBook = await BuddhistBookModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteBuddhistBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await BuddhistBookModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
