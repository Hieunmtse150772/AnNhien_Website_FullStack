import { IVegetarianDish } from '@src/interfaces/VegetarianDish';
import mongoose, { Document, Schema } from 'mongoose';


export const VegetarianDisheSchema: Schema<IVegetarianDish> = new Schema(
  {
    dishName: { required: true, type: String },
    dishType: { required: true, type: String },
    timePrepare: { required: true, type: String },
    timeCooking: { required: true, type: String },
    description: { required: true, type: String },
    title: { required: true, type: String },
    tutorialVideo: { required: true, type: String },
    vegetarianDishImages: [
      {
        url: {
          type: String,
          required: true,
          trim: true,
        },
        cloudinary_id: {
          type: String,
          required: false,
        },
      }
    ],
    chefName: { type: String, required: true },
    createdAt: { required: false, type: String },
    updatedAt: { required: false, type: String },
    category: { required: false, type: String },
  });


VegetarianDisheSchema.post('save', function () {
  if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
    console.log('Middleware called after saving the vegetarianDish is (vegetarianDish is been Save )', this);
  }
});

export default mongoose.models.VegetarianDish || mongoose.model<IVegetarianDish>('VegetarianDish', VegetarianDisheSchema);

