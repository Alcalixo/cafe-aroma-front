import React, { useEffect } from "react";
import "./user.css";
import Table from "react-bootstrap/Table";
//import users from "../../service/db/usersDB";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsuarios } from "../../service/Redux/actions/usersActions";

function UserTable() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios); // Selecciona usuarios del estado global

   useEffect(() => {
    dispatch(fetchUsuarios()); // Despacha la acción para obtener usuarios cuando el componente se monta
  }, [dispatch]);

  console.log('Usuarios:', usuarios); // Log para verificar los datos

  if (!Array.isArray(usuarios)) {
    return <p>Cargando usuarios...</p>;
  } // Renderizar algo mientras se cargan los datos
  
  return (
    <Container>
      <Row>
        <h2>Lista de Usuarios</h2>
        <Col>
          <Table striped className="tableUSer" border="warning">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <Form.Control as="select" value={usuario.category}>
                      <option value="administrador">Administrador</option>
                      <option value="cliente">Cliente</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Button variant="warning">
                      <TiDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default UserTable;
