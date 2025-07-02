import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || '',
    data: (() => {
        const storedData = localStorage.getItem('data');
        if (storedData && storedData !== 'undefined' && storedData !== 'null') {
            try {
                return JSON.parse(storedData);
            } catch (error) {
                return {};
            }
        }
        return {};
    })(),
};

export const createAccount = createAsyncThunk('/auth/createAccount', async (data) => {
    try {
        const apiResponse = await axiosInstance.post('/users', data);
        toast.success(apiResponse?.data?.message || 'Account created successfully');
        return apiResponse;
    } catch(error) {
        toast.error('Registration failed. Please try again.');
        throw error;
    }
});

export const login = createAsyncThunk('/auth/login', async (data) => {
    try {
        const apiResponse = await axiosInstance.post('/auth/login', data);
        toast.success(apiResponse?.data?.message || 'Logged in successfully');
        return apiResponse;
    } catch(error) {
        toast.error('Login failed. Please try again.');
        throw error;
    }
});

export const logout = createAsyncThunk('/auth/logout', async () => {
    try {
        const apiResponse = await axiosInstance.post('/auth/logout');
        toast.success(apiResponse?.data?.message || 'Logged out successfully');
        return apiResponse;
    } catch(error) {
        toast.error('Logout failed. Please try again.');
        throw error;
    }
});

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            // reducer which will execute when the login thunk is fulfilled
            state.isLoggedIn = true;
            state.role = action?.payload?.data?.data?.userRole,
            state.data = action?.payload?.data?.data?.userData

            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.data?.data?.userRole);
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data?.userData));
        })
        .addCase(login.rejected, (state, action) => {
            // reducer which will execute when the login thunk is rejected
            state.isLoggedIn = false;
            state.role = '';
            state.data = {};
        })
        .addCase(logout.fulfilled, (state) => {
            // reducer which will execute when the logout thunk is fulfilled
            localStorage.setItem('isLoggedIn', false);
            localStorage.setItem('role', '');
            localStorage.setItem('data', JSON.stringify({}));
            state.isLoggedIn = false;
            state.role = '';
            state.data = {};
        })
    }
});

export default AuthSlice.reducer;