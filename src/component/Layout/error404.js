import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";
import './error404.css'

function Erro404() {
  return (
    <Container className="error404">
  <Row className="justify-content-center">
    <GiCoffeeCup size={100} /> {/* Ícono de café grande */}
  </Row>
  <Row className="justify-content-center">
    <h1>Error 404</h1>
  </Row>
  <Row className="justify-content-center">
    <p>No pudimos encontrar lo que buscas</p>
  </Row>
  <Row className="justify-content-center">
    <p>¿Y si mejor te pides un Café?</p>
  </Row>
  <Row className="justify-content-center">
    <Link to="/productos">
      <Button variant="warning" className="view-products-button">
        <GiCoffeeCup/>
      </Button>
    </Link>
  </Row>
</Container>

  );
}

export default Erro404;
