import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    cartsData: ''
}

export const addProductToCart = createAsyncThunk('/cart/addProduct', async (productId) => {
    try {
        const apiResponse = await axiosInstance.post(`/carts/add/${productId}`);
        toast.success('Product added to cart successfully');
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Failed to add product to cart');
        throw error;
    }
});

export const removeProductFromCart = createAsyncThunk('/cart/removeProduct', async (productId) => {
    try {
        const apiResponse = await axiosInstance.post(`/carts/remove/${productId}`);
        toast.success('Product removed from cart successfully');
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Failed to remove product from cart');
        throw error;
    }
});

export const getCartDetails = createAsyncThunk('/cart/getDetails', async () => {
    try {
        const apiResponse = await axiosInstance.get(`/carts`);
        return apiResponse;
    } catch(error) {
        console.log(error.response);
        if(error?.response?.status === 401) {
            toast.error('Please login to view cart');
            return {
                isUnauthorized: true
            }
        }
        toast.error('Failed to fetch cart details');
        throw error;
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCartDetails.fulfilled, (state, action) => {
            state.cartsData = action?.payload?.data?.data;
        })
        .addCase(getCartDetails.rejected, (state, action) => {
            console.log("Failed to fetch cart:", action.error);
        })
        .addCase(addProductToCart.fulfilled, (state, action) => {
            // Cart updated, could refetch cart details here
        })
        .addCase(addProductToCart.rejected, (state, action) => {
            console.log("Failed to add to cart:", action.error);
        })
        .addCase(removeProductFromCart.fulfilled, (state, action) => {
            // Cart updated, could refetch cart details here
        })
        .addCase(removeProductFromCart.rejected, (state, action) => {
            console.log("Failed to remove from cart:", action.error);
        });
    }
});

export default cartSlice.reducer;
