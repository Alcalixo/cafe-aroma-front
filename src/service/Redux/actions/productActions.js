import axios from "axios";
import { getProductos } from '../reducers/productosSlice';  // Importar la acción desde el slice

// Acción para obtener todos los productos
export const fetchProductos = () => {
    return async function(dispatch) {
        try {
            const productos = (await axios("https://api.escuelajs.co/api/v1/products")).data;
            dispatch(getProductos(productos));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
};

// Acción para obtener un producto por ID
export const fetchProductoById = (id) => {
    return async function(dispatch) {
        try {
            const producto = (await axios(`https://api.escuelajs.co/api/v1/products/${id}`)).data;
            dispatch(getProductos(producto));
        } catch (error) {
            console.error("Error fetching product by ID:", error);
        }
    };
};

// Acción para eliminar un producto
export const deleteProducto = (id) => {
    return async function(dispatch) {
        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
            // Despacha una acción para eliminar producto del estado si es necesario
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };
};

// Acción para actualizar un producto
export const updateProducto = (id, data) => {
    return async function(dispatch) {
        try {
            // Llamada a la API para obtener productos
            const updatedProducto = (await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, data)).data;
            // Despacha una acción para actualizar producto en el estado si es necesario
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };
};
