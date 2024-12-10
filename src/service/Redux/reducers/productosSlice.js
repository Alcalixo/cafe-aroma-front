import { createSlice } from "@reduxjs/toolkit";

const productosSlice = createSlice({
    name: 'productos',
    initialState: [],
    reducers: {
        getProductos: (state, action) => {
            console.log("Updating state with productos:", action.payload); // Log
            return action.payload;
        }
    }
});

export const { getProductos } = productosSlice.actions;
export default productosSlice.reducer;
