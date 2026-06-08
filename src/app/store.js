// подключаем магию Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// подключаем наши slices
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice';

// создаём store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    
  },
});

// сохраняем корзину
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.items));
});

export default store;