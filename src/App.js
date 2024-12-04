import React from "react";
import Header from "./component/Layout/header";
import Footer from "./component/Layout/footer";
import NavbarCafe from "./component/Layout/navbar";
import Productos from "./component/Client/productos";
import UserTable from "./component/Admin/users";
import About from "./component/About/about";

function App() {
  return (
    <>
      <Header />
      <NavbarCafe />
      <p>Welcome</p>
      <Productos />
      <UserTable />
      <About />
      <Footer />
    </>
  );
}
export default App;
