import { AxiosResponse } from "axios";
import { VegetarianDishDto } from "../dtos/vegetarianDish.dto";
import axiosClient from "./axiosClient";

export const vegetarianDishService  = {
    getVegetarianDishList: () : Promise<AxiosResponse<VegetarianDishDto>> =>{
        const url = "/vegetarianDishes";
        return axiosClient.get(url);
    },
    createVegetarianDishList: (payload: any): Promise<AxiosResponse<VegetarianDishDto>> =>{
        return axiosClient.post(payload);
    }
}