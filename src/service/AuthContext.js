// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id; // Asegúrate de que el token tenga el campo _id
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          setIsAuthenticated(true);
          console.log("Datos del usuario cargados:", response.data);
        })
        .catch((error) => {
          console.error(
            "Error al obtener los datos del usuario:",
            error.response ? error.response.data.message : error.message
          );
        });
    }
  }, []);

  const login = (user) => {
    setUser(user);
    setIsAuthenticated(true);
    console.log("Usuario logueado:", user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    console.log("Usuario desconectado");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
