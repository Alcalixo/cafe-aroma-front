// App.js
import React from "react";
import Header from "./component/Layout/header";
import Footer from "./component/Layout/footer";
import NavbarCafe from "./component/Layout/navbar";
import Productos from "./component/Client/productos";
import UserTable from "./component/Admin/users";
import About from "./component/About/about";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/home";
import Erro404 from "./component/Layout/error404";
import Cart from "./component/Client/cart";
import Login from "./component/Formularios/login";
import Contacto from "./component/Contact/contacto";
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
