import { IVegetarianDish } from '@src/interfaces/VegetarianDish';
import mongoose, { Document, Schema } from 'mongoose';


const VegetarianDishSchema = new Schema<IVegetarianDish>({
  dishName: { required: true, type: String },
  dishType: { required: true, type: String },
  recipe: {
    timePrepare: { required: true, type: String },
    timeCooking: { required: true, type: String },
    description: { required: true, type: String },
  },
  title: { required: true, type: String },
  content: { required: true, type: String },
  recipeFile: { required: true, type: String },
  tutorialVideo: { required: true, type: String },
  vegetarianDishImage: { required: true, type: String },
  chefName: { type: String, required: true },
  _id: { required: true, type: String },
  createdAt: { required: false, type: String },
  updatedAt: { required: false, type: String },
  category: { required: false, type: String },
  cloudinary_id: { required: false, type: String },
});

const VegetarianDishModel = mongoose.model<IVegetarianDish>('VegetarianDish', VegetarianDishSchema);

export { IVegetarianDish, VegetarianDishModel };
