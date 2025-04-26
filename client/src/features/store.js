import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; 
import { userSlice } from "./auth/userSlicer";
import cartReducer from "./cart/cartSlice";
import favoriteReducer from "./cart/favoriteSlice";



const rootReducer = combineReducers({
  user: userSlice, 
  cart: cartReducer,
  favorite: favoriteReducer,
});

const persistConfig = {
  key: "root",
  storage, 
  version: 1, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);