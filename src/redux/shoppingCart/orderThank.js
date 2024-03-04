import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://65e3681688c4088649f5c41d.mockapi.io/';

export const options = {
    width: '400px',
    position: 'center-center',
    timeout: 3000,
    fontSize: '20px',
}

export const postOrder = async (order, thunkAPI) => {
    try {
        const response = await axios.post('/order', order);
        Notify.success(`Order ${response.data.user.name} added successfully`, options);
        console.log('response.data', response.data);
        return response.data;
    }
    catch (e) {
        Notify.failure(`Sorry , your order doesn't add with error: "${e.message}"`, options);
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const postOrderThunk = createAsyncThunk(
    'shoppingCart/postOrder',
    postOrder
);