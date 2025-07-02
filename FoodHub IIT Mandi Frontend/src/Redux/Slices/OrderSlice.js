import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    ordersData: null
}

export const placeOrder = createAsyncThunk('/order/placeOrder', async () => {
    try {
        const apiResponse = await axiosInstance.post(`/orders`);
        toast.success('Order created successfully');
        return apiResponse;
    } catch(error) {
        toast.error('Failed to create order');
        throw error;
    }
});


const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(placeOrder.fulfilled, (state, action) => {
            state.ordersData = action?.payload?.data;
        })
        .addCase(placeOrder.rejected, (state, action) => {
            state.ordersData = null;
        });
    }
});

export default OrderSlice.reducer;