import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./Slices/cartSlice";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

const persistConfig = { key: "root", storage: sessionStorage };
const persistedReducer = persistReducer(persistConfig, cartSliceReducer);
export const store = configureStore({
  reducer: { cart: persistedReducer },
  middleware: () => [thunk],
});


export const persistor = persistStore(store);
