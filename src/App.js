// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./component/About/about";
import UserTable from "./component/Admin/users";
import Cart from "./component/Client/cart";
import Productos from "./component/Client/productos";
import Contacto from "./component/Contact/contacto";
import Login from "./component/Formularios/login";
import Home from "./component/home/home";
import Erro404 from "./component/Layout/error404";
import Footer from "./component/Layout/footer";
import Header from "./component/Layout/header";
import NavbarCafe from "./component/Layout/navbar";
import { AuthProvider, useAuth } from "./service/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <NavbarCafe />
      <MainRoutes />
      <Footer />
    </AuthProvider>
  );
}

function MainRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacto" element={<Contacto />} />
      {isAuthenticated ? (
        <>
          <Route path="/listaUsuarios" element={<UserTable />} />
          <Route path="/cart" element={<Cart />} />
        </>
      ) : (
        <Route path="/users/login" element={<Login />} />
      )}
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
