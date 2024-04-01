import { Request, Response } from 'express';
import { IVegetarianDish, VegetarianDishModel } from '../models/vegetarianDish';

// CREATE
export const createVegetarianDish = async (req: Request, res: Response) => {
  try {
    console.log('New Dishhhh: ', req);
    const newDish: IVegetarianDish = req.body;
    const createdDish = await VegetarianDishModel.create(newDish);
    res.status(201).json(createdDish);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

// READ
export const getVegetarianDishes = async (req: Request, res: Response) => {
  try {
    const dishes = await VegetarianDishModel.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateVegetarianDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedDish = await VegetarianDishModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedDish);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteVegetarianDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await VegetarianDishModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
