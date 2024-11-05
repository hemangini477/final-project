import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./componenets/CartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
