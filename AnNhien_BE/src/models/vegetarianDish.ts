import mongoose, { Document, Schema } from 'mongoose';

interface IVegetarianDish extends Document {
  dishName: string;
  ingredients: string[];
  dishType: string;
  cuisine: string;
  chefName: string;
  recipeFile: string;
  tutorialVideo: string;
  image: string;
}

const VegetarianDishSchema = new Schema<IVegetarianDish>({
  dishName: String,
  ingredients: [String],
  dishType: String,
  cuisine: String,
  chefName: String,
  recipeFile: String,
  tutorialVideo: String,
  image: String,
});

const VegetarianDishModel = mongoose.model<IVegetarianDish>('VegetarianDish', VegetarianDishSchema);

export { IVegetarianDish, VegetarianDishModel };
