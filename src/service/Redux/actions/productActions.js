import axios from "axios";
import { getProductos } from "../reducers/productosSlice"; // Importar la acción desde el slice

// Acción para obtener todos los productos
export const fetchProductos = () => {
  return async function (dispatch) {
    try {
      console.log("Fetching productos..."); // Log
      const productos = (
        await axios(`${process.env.REACT_APP_API_BASE_URL}/api/productos`)
      ).data;
      console.log("Fetched productos:", productos); // Log
      dispatch(getProductos(productos));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

// Acción para obtener un producto por ID
export const fetchProductoById = (id) => {
  return async function (dispatch) {
    try {
      const producto = (
        await axios(`${process.env.REACT_APP_API_BASE_URL}/api/productos/${id}`)
      ).data;
      dispatch(getProductos(producto));
    } catch (error) {
      console.error("Error fetching product by ID:", error);
    }
  };
};

// Acción para eliminar un producto
export const deleteProducto = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/productos/${id}`);
      // Despacha una acción para eliminar producto del estado si es necesario
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
};

// Acción para actualizar un producto
export const updateProducto = (id, data) => {
  return async function (dispatch) {
    try {
      // Llamada a la API para obtener productos
      const updatedProducto = (
        await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/productos/${id}`, data)
      ).data;
      // Despacha una acción para actualizar producto en el estado si es necesario
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
};
