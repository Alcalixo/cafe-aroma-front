import axios from "axios";
import { getProductos } from "../reducers/productosSlice"; // Importar la acción desde el slice

// Obtener el token de autenticación
const getToken = () => {
  return localStorage.getItem("token");
};

// Acción para obtener todos los productos (sin autorización)
export const fetchProductos = () => {
  return async function (dispatch) {
    try {
      const productos = (
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/productos`)
      ).data;
      dispatch(getProductos(productos));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

// Acción para obtener un producto por ID (requiere autorización)
export const fetchProductoById = (id) => {
  return async function (dispatch) {
    try {
      const producto = (
        await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/productos/${id}`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        )
      ).data;
      dispatch(getProductos(producto));
    } catch (error) {
      console.error("Error fetching product by ID:", error);
    }
  };
};

// Acción para eliminar un producto (requiere autorización)
export const deleteProducto = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/api/productos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      dispatch(fetchProductos()); // Actualiza la lista de productos después de eliminar uno
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
};

// Acción para actualizar un producto (requiere autorización)
export const updateProducto = (id, data) => {
  return async function (dispatch) {
    try {
      const updatedProducto = (
        await axios.put(
          `${process.env.REACT_APP_API_BASE_URL}/api/productos/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        )
      ).data;
      dispatch(fetchProductos()); // Actualiza la lista de productos después de actualizar uno
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
};

// Acción para crear un nuevo producto (requiere autorización)
export const createProducto = (data) => {
  return async function (dispatch) {
    try {
      const newProducto = (
        await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/api/productos`,
          data,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        )
      ).data;
      dispatch(fetchProductos()); // Actualiza la lista de productos después de crear uno
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
};
