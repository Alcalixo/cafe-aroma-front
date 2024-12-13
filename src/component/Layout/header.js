import React from "react";
import "./header.css";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <div className="Header">
      <Container>
        <h1 className="welcome-text">Bienvenido a Café Aroma</h1>
      </Container>
    </div>
  );
}

export default Header;
