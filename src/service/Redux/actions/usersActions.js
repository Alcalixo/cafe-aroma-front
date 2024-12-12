import axios from "axios";
import { getUsuarios } from '../reducers/usuariosSlice';  // Importar la acción desde el slice

// Acción para obtener todos los usuarios
export const fetchUsuarios = () => {
    return async function(dispatch) {
        try {
            const usuarios = (await axios(`${process.env.REACT_APP_API_BASE_URL}/api/users/admin/usuarios`)).data;
            dispatch(getUsuarios(usuarios));
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
};

// Acción para obtener un usuario por ID
export const fetchUsuarioById = (id) => {
    return async function(dispatch) {
        try {
            const usuario = (await axios(`${process.env.REACT_APP_API_BASE_URL}/api/users/${id}`)).data;
            dispatch(getUsuarios(usuario));
        } catch (error) {
            console.error("Error fetching user by ID:", error);
        }
    };
};

// Acción para eliminar un usuario
export const deleteUsuario = (id) => {
    return async function(dispatch) {
        try {
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/users/admin/destruirUsuario/${id}`);
            // Despacha una acción para eliminar usuario del estado si es necesario
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
};

// Acción para actualizar un usuario
export const updateUsuario = (id, data) => {
    return async function(dispatch) {
        try {
            // Llamada a la API para obtener usuarios
            const updatedUsuario = (await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/users/editarUsuario/${id}`, data)).data;
            // Despacha una acción para actualizar usuario en el estado si es necesario
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };
};
