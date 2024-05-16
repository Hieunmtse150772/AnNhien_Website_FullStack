import mongoose, { Document, Schema } from 'mongoose';

interface IVegetarianRestaurant extends Document {
  location: string;
  restaurantName: string;
  menu: string[];
  openingHours: string;
}

const VegetarianRestaurantSchema = new Schema<IVegetarianRestaurant>({
  location: String,
  restaurantName: String,
  menu: [String],
  openingHours: String,
});

const VegetarianRestaurantModel = mongoose.model<IVegetarianRestaurant>('VegetarianRestaurant', VegetarianRestaurantSchema);

export { IVegetarianRestaurant, VegetarianRestaurantModel };
