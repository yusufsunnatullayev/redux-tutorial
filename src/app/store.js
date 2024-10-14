import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
import { carsApi } from "../services/carsApi";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});
