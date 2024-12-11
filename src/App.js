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

function App() {
  return (
    <>
      <Header />
      <NavbarCafe />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/productos" element= {<Productos />}/>
        <Route path="/listaUsuarios" element= {<UserTable />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/cart" element ={<Cart />}/>
        <Route path="/users/login" element={<Login />} />
        <Route path="*" element= {<Erro404 />}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
