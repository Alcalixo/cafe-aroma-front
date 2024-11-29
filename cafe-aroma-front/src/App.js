import React from "react";
import Header from "./component/Layout/header";
import Footer from "./component/Layout/footer";
import NavbarCafe from "./component/Layout/navbar";
import Productos from "./component/home/productos";

function App() {
  return (
    <>
      <Header />
      <NavbarCafe />
      <p>Welcome</p>
      <Footer />
    </>
  );
}
export default App;
