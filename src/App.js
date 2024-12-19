// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./component/About/about";
import Crud from "./component/Admin/ProductManagment";
import UserTable from "./component/Admin/users";
import Cart from "./component/Client/cart";
import MercadoPagoCallback from "./component/Client/MercadoPagoCallback";
import OrdersHistory from "./component/Client/OrdersHistory";
import Productos from "./component/Client/productos";
import Contacto from "./component/Contact/contacto";
import Login from "./component/Formularios/login";
import Home from "./component/home/home";
import Erro404 from "./component/Layout/error404";
import Footer from "./component/Layout/footer";
import NavbarCafe from "./component/Layout/navbar";
import { AuthProvider, useAuth } from "./service/AuthContext";
import { SearchProvider } from "./service/SearchContext";
import Comentarios from "./component/Admin/VerComentarios";

function App() {
  return (
    <SearchProvider>
      <AuthProvider>
        <NavbarCafe />
        <MainRoutes />
        <Footer />
      </AuthProvider>
    </SearchProvider>
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
      <Route
        path="/MercadoPagoCallback/:status"
        element={<MercadoPagoCallback />}
      />
      {isAuthenticated ? (
        <>
          <Route path="/crud" element={<Crud />} />
          <Route path="/listaUsuarios" element={<UserTable />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ordersHistory" element={<OrdersHistory />} />
          <Route path="/admin/comentarios" element={<Comentarios />} />
        </>
      ) : (
        <Route path="/users/login" element={<Login />} />
      )}
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
