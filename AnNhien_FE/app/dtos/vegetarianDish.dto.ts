import VegetarianDish from "../models/vegetarianDish.model";
import { StatusDto } from "./metadata.dto";

export interface VegetarianDishDto extends StatusDto{
    data: VegetarianDish;
}