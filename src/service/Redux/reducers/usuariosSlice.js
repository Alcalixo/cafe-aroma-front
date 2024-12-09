import { createSlice } from "@reduxjs/toolkit";

const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: [],
    reducers: {
        getUsuarios: (state, action) => {
            return action.payload; // Actualiza el estado con los usuarios obtenidos
        }
    }
});

export const { getUsuarios } = usuariosSlice.actions;
export default usuariosSlice.reducer;
