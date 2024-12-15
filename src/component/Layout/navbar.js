//  ASI FUNCIONABA EL NAVBAR ----INICIO
// //Navbar 4, con lógica de estado global de usuario

// // NavbarCafe.js
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo-cafe-aroma.png"; // Importa el logo
import { useAuth } from "../../service/AuthContext"; // Importa el contexto de autenticación
import "../../Styles/miestilo.css"; // Asegúrate de que la ruta sea correcta
import DarmeDeBaja from "../Client/DarmeDeBaja";
import "./navbar.css";

function NavbarCafe() {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce(
    (total, article) => total + article.quantity,
    0
  );

  const { isAuthenticated, user, logout } = useAuth(); // Usa el contexto de autenticación
  console.log("Estado de autenticación:", isAuthenticated); // Verifica el estado de autenticación
  console.log("Datos del usuario:", user); // Verifica los datos del usuario

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo Café Aroma"
            width="77"
            height="77"
            className="img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            {isAuthenticated && user?.categoria === "admin" && (
              <>
                <Nav.Link as={NavLink} to="/crud" className="nav-link">
                  PANEL
                </Nav.Link>
                <Nav.Link as={NavLink} to="/" className="nav-link">
                  Inicio
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" className="nav-link">
                  Quienes Somos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/acerca_de" className="nav-link">
                  Lista de comentarios
                </Nav.Link>
                <NavDropdown title="Opciones" id="navbarDropdown">
                  <NavDropdown.Item as={Link} to="/listaUsuarios">
                    Ver Usuarios
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/listado_de_eliminados">
                    Reestablecer Usuarios
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/registro">
                    Registrar Usuarios
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="#"
                    onClick={() => buscarUsuario()}
                  >
                    Editar Mis Datos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#" onClick={logout}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {isAuthenticated && user?.categoria === "cliente" && (
              <>
                <Nav.Link as={NavLink} to="/" className="nav-link">
                  Inicio
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" className="nav-link">
                  Quienes Somos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contacto" className="nav-link">
                  Contactanos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/productos" className="nav-link">
                  Catálogo
                </Nav.Link>
                <NavDropdown title="Ajustes" id="navbarDropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="#"
                    onClick={() => buscarUsuario()}
                  >
                    Editar Mis Datos
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item as={Link} onClick={DarmeDeBaja}>
                    Darme de Baja
                  </NavDropdown.Item> */}
                  <DarmeDeBaja />
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="#" onClick={logout}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="cart-link-container">
                  <Link to="/cart" className="cart-link">
                    <IoCartOutline className="cart-icon" />
                    {cartCount > 0 && (
                      <span className="cart-count">{cartCount}</span>
                    )}
                  </Link>
                </div>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Nav.Link as={NavLink} to="/" className="nav-link">
                  Inicio
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" className="nav-link">
                  Quienes Somos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contacto" className="nav-link">
                  Contactanos
                </Nav.Link>
                <Nav.Link as={NavLink} to="/productos" className="nav-link">
                  Catálogo
                </Nav.Link>
                <Nav.Link as={NavLink} to="/users/login" className="nav-link">
                  Cuenta
                </Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex" role="search">
            <Form.Control
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
              className="me-2"
            />
            <Button variant="outline-light" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Función para buscar usuario (simulando la funcionalidad de CodeIgniter)
function buscarUsuario() {
  const dni = "12345678"; // Cambia esto por el valor real de tu estado global
  const form = document.createElement("form");
  form.action = "/buscar_usuario"; // Cambia esto por la ruta real de tu API
  form.method = "post";
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "dni";
  input.value = dni;
  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
}

export default NavbarCafe;
// --------FIN NAVBAR QUE FUNCIONABA
