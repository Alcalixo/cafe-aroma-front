import axios from "axios";
import { getUsuarios } from "../reducers/usuariosSlice"; // Importar la acción desde el slice

// Obtener el token de autenticación
const getToken = () => {
  return localStorage.getItem("token");
};

// Acción para obtener todos los usuarios
export const fetchUsuarios = () => {
  return async function (dispatch) {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const usuarios = (
        await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/users/admin/usuarios`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      ).data;
      dispatch(getUsuarios(usuarios));
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response ? error.response.data.message : error.message
      );
    }
  };
};

// Acción para obtener un usuario por ID
export const fetchUsuarioById = (id) => {
  return async function (dispatch) {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const usuario = (
        await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/users/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      ).data;
      dispatch(getUsuarios(usuario));
    } catch (error) {
      console.error("Error fetching user by ID:", error);
    }
  };
};

// Acción para eliminar un usuario
export const deleteUsuario = (id) => {
  return async function (dispatch) {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/admin/destruirUsuario/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(fetchUsuarios()); // Actualiza la lista de usuarios después de eliminar uno
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
};

// Acción para actualizar un usuario
export const updateUsuario = (id, data) => {
  return async function (dispatch) {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const updatedUsuario = (
        await axios.put(
          `${process.env.REACT_APP_API_BASE_URL}/api/users/editarUsuario/${id}`,
          data,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      ).data;
      dispatch(fetchUsuarios()); // Actualiza la lista de usuarios después de actualizar uno
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
};

// Acción para actualizar la categoría de usuario a cliente
export const changeToClient = (_id) => {
  return async function (dispatch) {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const updatedUsuario = (
        await axios.patch(
          `${process.env.REACT_APP_API_BASE_URL}/api/users/admin/changeClient/${_id}`,
          { _id: _id },
          { headers: { Authorization: `Bearer ${token}` } }
        )
      ).data;
      dispatch(fetchUsuarios());
    } catch (error) {
      console.error("Error changing user to client:", error);
    }
  };
}; // Acción para actualizar la categoría de usuario a administrador
export const changeToAdmin = (_id) => {
  return async function (dispatch) {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const updatedUsuario = (
        await axios.patch(
          `${process.env.REACT_APP_API_BASE_URL}/api/users/admin/changeAdmin/${_id}`,
          { _id: _id },
          { headers: { Authorization: `Bearer ${token}` } }
        )
      ).data;
      dispatch(fetchUsuarios());
    } catch (error) {
      console.error("Error changing user to admin:", error);
    }
  };
};
