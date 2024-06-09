import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { VegetarianDishDto } from "../dtos/vegetarianDish.dto"
import VegetarianDish from "../models/vegetarianDish.model"
import axios, { AxiosError } from "axios"
import { vegetarianDishService } from "../services/vegetarianDish.service"

interface VegetarianDishState {
    vegetarianList: VegetarianDishDto,
    loading: boolean,
    error: string | null
}
const initialState: VegetarianDishState = {
    vegetarianList: {
        success: false,
        error: false,
        message: "",
        status: 0,
        data: {
            metadata: {
                totalDocs: 0,
                totalPages: 0,
                lastPage: 0,
                count: 0,
                currentPage: {
                    page: 0,
                    limit: 0
                }
            },
            VegetarianDishes: []
        }
    },
    loading: false,
    error: ''
}
export const getVegetarianDishList = createAsyncThunk(
    'vegetarianDish/get-vegetarianDishList',
    async (_, { rejectWithValue }) => {
        try {
            const result = vegetarianDishService.getVegetarianDishList();
            return result;
        } catch (error) {
            const axiosError = error as AxiosError;
            return rejectWithValue(axiosError.response?.data)
        }
    },
);
export const vegetarianDishSlice = createSlice({
    name: 'vegetarianDishes',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(getVegetarianDishList.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(getVegetarianDishList.fulfilled, (state, action)=>{
                state.loading = false;
                state.vegetarianList = action.payload.data
            })
            .addCase(getVegetarianDishList.rejected, (state, action)=>{
                state.error = String(action.payload);
                state.loading = false;
            })
    }
})

export default vegetarianDishSlice.reducer;
