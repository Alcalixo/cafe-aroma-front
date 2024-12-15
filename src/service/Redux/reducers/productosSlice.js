import { createSlice } from "@reduxjs/toolkit";

const productosSlice = createSlice({
    name: 'productos',
    initialState: [],
    reducers: {
        getProductos: (state, action) => {
            return action.payload;
        }
    }
});

export const { getProductos } = productosSlice.actions;
export default productosSlice.reducer;
