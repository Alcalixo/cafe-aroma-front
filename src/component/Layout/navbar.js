import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoHome } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarCafe() {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce(
    (total, article) => total + article.quantity,
    0
  );

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          <IoHome /> Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/productos">
              <GiCoffeeCup />
              Menú
            </Nav.Link>
            <Nav.Link as={NavLink} to="/promos" disabled>
              <BiSolidOffer />
              Promos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/listaUsuarios">
              <FaRegUserCircle />
              Usuarios
            </Nav.Link>
            <NavDropdown title="Sobre Nosotros" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/about">
                Quienes somos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contacto">
                Contactanos!
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/users/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/registro">
              Registro
            </Nav.Link>
          </Nav>
          <div className="cart-link-container">
            <Link to="/cart" className="cart-link">
              <IoCartOutline className="cart-icon" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCafe;
