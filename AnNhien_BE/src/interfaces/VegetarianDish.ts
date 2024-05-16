import mongoose from 'mongoose';
import { IUser } from './User';


export interface IVegetarianDish extends mongoose.Document {
  dishName: string;
  dishType: string;
  timePrepare: string;
  timeCooking: string;
  description: string;  
  title: string;
  content: string;
  recipeFile: string;
  tutorialVideo: string;
  vegetarianDishImages: {
    url: string;
    cloudinary_id: string;
  }[];
  chefName: string;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
  category?: string;
}

export interface ReviewVegetarianDishT extends IUser {
  productId: string;
  rating: number;
  comment: string;
}
