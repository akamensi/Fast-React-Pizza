import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import CratReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: CratReducer,
  },
});

export default store;
