import mongoose from 'mongoose';

export interface IRecipe extends mongoose.Document {
  timePrepare: string;
  timeCooking: string;
  description: string;
}

export interface IVegetarianDish extends mongoose.Document {
  dishName: string;
  dishType: string;
  recipe: IRecipe;
  title: string;
  content: string;
  recipeFile: string;
  tutorialVideo: string;
  vegetarianDishImage: string;
  chefName: string;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
  category?: string;
  cloudinary_id?: string;
}
