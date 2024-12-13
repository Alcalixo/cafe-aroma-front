/*
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
              Cuenta
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
*/

// 2do navbar
// import React from "react";
// import "../../Styles/miestilo.css"; // Asegúrate de que la ruta sea correcta
// import "./navbar.css";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { IoCartOutline } from "react-icons/io5";
// import { Link, NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import logo from "../../assets/img/logo-cafe-aroma.png"; // Importa el logo

// function NavbarCafe() {
//   const cart = useSelector((state) => state.cart);
//   const cartCount = cart.reduce((total, article) => total + article.quantity, 0);

//   // Simulando datos de sesión
//   const session = {
//     usuario: " ", // Cambia esto por el valor real de tu estado global
//     categoria: " ", // Cambia esto según el perfil del usuario (1: admin, 2: cliente)
//   };

//   return (
//     <Navbar expand="lg" className="navbar-custom">
//     <Container>
//       <Navbar.Brand as={Link} to="/">
//         <img src={logo} alt="Logo Café Aroma" width="77" height="77" className="img-fluid" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarSupportedContent" />
//       <Navbar.Collapse id="navbarSupportedContent">
//         <Nav className="me-auto">
//             {/* Navbar para Admin */}
//             {session.perfil_id === 1 && (
//               <>
//                 <Nav.Link as={NavLink} to="/panel" className="nav-link">PANEL</Nav.Link>
//                 <Nav.Link as={NavLink} to="/" className="nav-link">Inicio</Nav.Link>
//                 <Nav.Link as={NavLink} to="/quienes_somos" className="nav-link">Quienes Somos</Nav.Link>
//                 <Nav.Link as={NavLink} to="/acerca_de" className="nav-link">Acerca de</Nav.Link>
//                 <NavDropdown title="Opciones" id="navbarDropdown">
//                   <NavDropdown.Item as={Link} to="/listado">Ver Usuarios</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/listado_de_eliminados">Reestablecer Usuarios</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/registro">Registrar Usuarios</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item as={Link} to="#" onClick={() => buscarUsuario()}>Editar Mis Datos</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/logout">Cerrar Sesión</NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             )}

//             {/* Navbar para Cliente */}
//             {session.perfil_id === 2 && (
//               <>
//                 <Nav.Link as={NavLink} to="/" className="nav-link">Inicio</Nav.Link>
//                 <Nav.Link as={NavLink} to="/quienes_somos" className="nav-link">Quienes Somos</Nav.Link>
//                 <Nav.Link as={NavLink} to="/acerca_de" className="nav-link">Acerca de</Nav.Link>
//                 <Nav.Link as={NavLink} to="/catalogo" className="nav-link">Catálogo</Nav.Link>
//                 <NavDropdown title="Ajustes" id="navbarDropdown">
//                   <NavDropdown.Item as={Link} to="#" onClick={() => buscarUsuario()}>Editar Mis Datos</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/darme_de_baja">Darme de Baja</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item as={Link} to="/logout">Cerrar Sesión</NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             )}

//             {/* Navbar para Visitante (No logueado) */}
//             {session.perfil_id === undefined && (
//               <>
//                 <Nav.Link as={NavLink} to="/" className="nav-link">Inicio</Nav.Link>
//                 <Nav.Link as={NavLink} to="/quienes_somos" className="nav-link">Quienes Somos</Nav.Link>
//                 <Nav.Link as={NavLink} to="/acerca_de" className="nav-link">Acerca de</Nav.Link>
//                 <Nav.Link as={NavLink} to="/catalogo" className="nav-link">Catálogo</Nav.Link>
//                 <Nav.Link as={NavLink} to="/registro" className="nav-link">Registrarse</Nav.Link>
//                 <Nav.Link as={NavLink} to="/login" className="nav-link">Iniciar Sesión</Nav.Link>
//               </>
//             )}
//           </Nav>
//           <Form className="d-flex" role="search">
//             <Form.Control
//               type="search"
//               placeholder="Buscar"
//               aria-label="Buscar"
//               className="me-2"
//             />
//             <Button variant="outline-light" type="submit">Buscar</Button>
//           </Form>
//           <div className="cart-link-container">
//             <Link to="/cart" className="cart-link">
//               <IoCartOutline className="cart-icon" />
//               {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//             </Link>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// // Función para buscar usuario (simulando la funcionalidad de CodeIgniter)
// function buscarUsuario() {
//   const dni = "12345678"; // Cambia esto por el valor real de tu estado global
//   const form = document.createElement('form');
//   form.action = '/buscar_usuario'; // Cambia esto por la ruta real de tu API
//   form.method = 'post';
//   const input = document.createElement('input');
//   input.type = 'hidden';
//   input.name = 'dni';
//   input.value = dni;
//   form.appendChild(input);
//   document.body.appendChild(form);
//   form.submit();
// }

// export default NavbarCafe;                

//3er navbar
import React, { useEffect, useState } from "react";
import "../../Styles/miestilo.css"; // Asegúrate de que la ruta sea correcta
import "./navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/img/logo-cafe-aroma.png"; // Importa el logo
import axios from "axios"; // Asegúrate de tener axios instalado

function NavbarCafe() {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((total, article) => total + article.quantity, 0);

  const [session, setSession] = useState({
    usuario: "",
    categoria: "", // "admin" o "cliente"
  });

  useEffect(() => {
    // Simulando la obtención del token (esto debería ser real en tu aplicación)
    const token = localStorage.getItem("token"); // O de donde estés obteniendo el token

    if (token) {
      // Hacer la solicitud para obtener los datos del usuario
      axios.post('/misDatos', { token })
        .then(response => {
          const { nombre, categoria } = response.data; // Asegúrate de que la respuesta tenga estos campos
          setSession({ usuario: nombre, categoria });
        })
        .catch(error => {
          console.error("Error al obtener los datos del usuario:", error);
        });
    }
  }, []);

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo Café Aroma" width="77" height="77" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            {/* Navbar para Admin */}
            {session.categoria === "admin" && (
              <>
                <Nav.Link as={NavLink} to="/panel" className="nav-link">PANEL</Nav.Link>
                <Nav.Link as={NavLink} to="/" className="nav-link">Inicio</Nav.Link>
                <Nav.Link as={NavLink} to="/quienes_somos" className="nav-link">Quienes Somos</Nav.Link>
                <Nav.Link as={NavLink} to="/acerca_de" className="nav-link">Acerca de</Nav.Link>
                <NavDropdown title="Opciones" id="navbarDropdown">
                  <NavDropdown.Item as={Link} to="/listado">Ver Usuarios</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/listado_de_eliminados">Reestablecer Usuarios</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/registro">Registrar Usuarios</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="#" onClick={() => buscarUsuario()}>Editar Mis Datos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/logout">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {/* Navbar para Cliente */}
            {session.categoria === "cliente" && (
              <>
                <Nav.Link as={NavLink} to="/" className="nav-link">Inicio</Nav.Link>
                <Nav.Link as={NavLink} to="/quienes_somos" className="nav-link">Quienes Somos</Nav.Link>
                <Nav.Link as={NavLink} to="/acerca_de" className="nav-link">Acerca de</Nav.Link>
                <Nav.Link as={NavLink} to="/catalogo" className="nav-link">Catálogo</Nav.Link>
                <NavDropdown title="Ajustes" id="navbarDropdown">
                  <NavDropdown.Item as={Link} to="#" onClick={() => buscarUsuario()}>Editar Mis Datos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/darme_de_baja">Darme de Baja</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/logout">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {/* Navbar para Visitante (No logueado) */}
            {session.categoria === "" && (
              <>
                <Nav.Link as={NavLink} to="/" className="nav-link">Inicio</Nav.Link>
                <Nav.Link as={NavLink} to="/quienes_somos" className="nav-link">Quienes Somos</Nav.Link>
                <Nav.Link as={NavLink} to="/acerca_de" className="nav-link">Acerca de</Nav.Link>
                <Nav.Link as={NavLink} to="/catalogo" className="nav-link">Catálogo</Nav.Link>
                <Nav.Link as={NavLink} to="/registro" className="nav-link">Registrarse</Nav.Link>
                <Nav.Link as={NavLink} to="/login" className="nav-link">Iniciar Sesión</Nav.Link>
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
            <Button variant="outline-light" type="submit">Buscar</Button>
          </Form>
          <div className="cart-link-container">
            <Link to="/cart" className="cart-link">
              <IoCartOutline className="cart-icon" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Función para buscar usuario (simulando la funcionalidad de CodeIgniter)
function buscarUsuario() {
  const dni = "12345678"; // Cambia esto por el valor real de tu estado global
  const form = document.createElement('form');
  form.action = '/buscar_usuario'; // Cambia esto por la ruta real de tu API
  form.method = 'post';
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'dni';
  input.value = dni;
  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
}

export default NavbarCafe;