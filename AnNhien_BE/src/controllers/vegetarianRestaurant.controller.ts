import { Request, Response } from 'express';
import { IVegetarianRestaurant, VegetarianRestaurantModel } from '../models/vegetarianRestaurant';

// CREATE
export const createVegetarianRestaurant = async (req: Request, res: Response) => {
  try {
    const newRestaurant: IVegetarianRestaurant = req.body;
    const createdRestaurant = await VegetarianRestaurantModel.create(newRestaurant);
    res.status(201).json(createdRestaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
export const getVegetarianRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await VegetarianRestaurantModel.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateVegetarianRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedRestaurant = await VegetarianRestaurantModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteVegetarianRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await VegetarianRestaurantModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
