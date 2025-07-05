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
        toast.error('Failed to remove product from cart');
        throw error;
    }
});

export const clearCart = createAsyncThunk('/cart/clear', async () => {
    try {
        const apiResponse = await axiosInstance.delete('/carts/products');
        toast.success('Cart cleared successfully');
        return apiResponse;
    } catch(error) {
        toast.error('Failed to clear cart');
        throw error;
    }
});

export const getCartDetails = createAsyncThunk('/cart/getDetails', async () => {
    try {
        const apiResponse = await axiosInstance.get(`/carts`);
        return apiResponse;
    } catch(error) {
        if(error?.response?.status === 401) {
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
            // Handle cart fetch failure
        })
        .addCase(addProductToCart.fulfilled, (state, action) => {
            // Cart updated successfully
        })
        .addCase(addProductToCart.rejected, (state, action) => {
            // Handle add to cart failure
        })
        .addCase(removeProductFromCart.fulfilled, (state, action) => {
            // Cart updated successfully
        })
        .addCase(removeProductFromCart.rejected, (state, action) => {
            // Handle remove from cart failure
        })
        .addCase(clearCart.fulfilled, (state, action) => {
            // Cart cleared successfully
            state.cartsData = { items: [] };
        })
        .addCase(clearCart.rejected, (state, action) => {
            // Handle clear cart failure
        });
    }
});

export default cartSlice.reducer;
