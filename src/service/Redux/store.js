import { configureStore } from "@reduxjs/toolkit";
import productoReducer from './reducers/productosSlice'; 
import usuariosReducer from './reducers/usuariosSlice';  
import cartReducer from './reducers/cartSlice';          

const store = configureStore({
    reducer: {
        productos: productoReducer, // Reducer de productos
        usuarios: usuariosReducer,  // Reducer de usuarios
        cart: cartReducer           // Reducer del carrito
    },
});

export default store;
