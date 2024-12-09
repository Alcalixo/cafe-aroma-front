import { configureStore } from "@reduxjs/toolkit";
import productoReducer from './reducers/productosSlice';
import usuariosReducer from './reducers/usuariosSlice';

const store = configureStore({
    reducer: {
        productos: productoReducer, // Reducer de productos
        usuarios: usuariosReducer,  // Reducer de usuarios
    },
});

export default store;
