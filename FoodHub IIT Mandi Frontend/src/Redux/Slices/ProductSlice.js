import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productsData: [], // Array of products
}

export const getAllProducts = createAsyncThunk('/products/getAll', async () => {
    try {
        const apiResponse = await axiosInstance.get('/products');
        return apiResponse;
    } catch(error) {
        throw error;
    }
});

export const getproductDetails = createAsyncThunk('/products/getDetails', async (id) => {
    try {
        const apiResponse = await axiosInstance.get(`/products/${id}`);
        return apiResponse;
    } catch(error) {
        throw error;
    }
});

export const addProduct = createAsyncThunk('/products/addProduct', async (productData) => {
    try {
        const formData = new FormData();
        formData.append('productName', productData.productName);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('quantity', productData.quantity);
        formData.append('category', productData.category);
        if (productData.productImage) {
            formData.append('productImage', productData.productImage);
        }

        const apiResponse = await axiosInstance.post('/products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
        return apiResponse;
    } catch(error) {
        throw error;
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            // Optional: Add loading state
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            const products = action?.payload?.data?.data;
            if (Array.isArray(products)) {
                state.productsData = products;
                toast.success('Products loaded successfully');
            } else {
                state.productsData = [];
                toast.error('Invalid products data format');
            }
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.productsData = [];
            toast.error('Failed to load products');
        })
        .addCase(getproductDetails.fulfilled, (state, action) => {
            toast.success('Product details loaded');
        })
        .addCase(getproductDetails.rejected, (state, action) => {
            toast.error('Failed to load product details');
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            toast.success('Product added successfully!');
        })
        .addCase(addProduct.rejected, (state, action) => {
            toast.error('Failed to add product');
        });
    }
});

export default productSlice.reducer;