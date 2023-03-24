import {configureStore} from "@reduxjs/toolkit";
import authreducer from "../Components/Auth/authSlice";
import orderSlice from "../Components/Order/orderSlice";

import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    versiion: 1,
    storage,
};

const reducer = combineReducers({
    auth: authreducer,
    order: orderSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer:  persistedReducer
});

const persistor = persistStore(store)

export default store;
export {persistor}