import { createSlice } from "@reduxjs/toolkit";

const productoSlice = createSlice({
    name: 'productos',
    initialState: [],
    reducers: {
        getProductos: (state, action) => {
            return action.payload; // Actualiza el estado con los productos obtenidos
        }
    }
});

export const { getProductos } = productoSlice.actions;
export default productoSlice.reducer;
