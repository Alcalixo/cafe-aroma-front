import React from "react";
import "./header.css";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/logo-cafe-aroma.png"; //logo provisional

function Header() {
  return (
    <div className="Header">
      <Container>
        <img className="Logo" src={logo} alt="Logo Café Aroma" />
      </Container>
    </div>
  );
}

export default Header;
