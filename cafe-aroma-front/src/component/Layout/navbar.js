import React from "react";
import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoHome } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";


function NavbarCafe() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><IoHome /> Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#"><GiCoffeeCup />
             Menú</Nav.Link>
            <Nav.Link href="#"><BiSolidOffer />
             Promos</Nav.Link>
            <NavDropdown title="Sobre Nosotros" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Quienes somos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Contactanos!
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Login</Nav.Link>
          <Nav.Link href="#">Registro</Nav.Link>
          </Nav>
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