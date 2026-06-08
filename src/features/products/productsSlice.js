import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://api.my-shop.com/products');
    return response.data; // ← здесь может быть массив или { data: [...] }
  }
);

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("📦 API DATA:", action.payload); // ← очень важно посмотреть!
        
        // Защита от разных форматов ответа API
        const productsData = Array.isArray(action.payload) 
          ? action.payload 
          : action.payload?.data || action.payload?.products || [];

        state.isLoading = false;
        state.list = productsData;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки товаров';
        state.list = [];
      });
  },
});

export const selectProductsList = (state) => state.products.list;
export const selectProductsLoading = (state) => state.products.isLoading;

export default productsSlice.reducer;