import React from "react";
import "./user.css";
import Table from "react-bootstrap/Table";
import users from "../db/usersDB";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";


function UserTable() {
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Form.Control as="select" value={user.category}>
                      <option value="administrador">Administrador</option>
                      <option value="cliente">Cliente</option>
                    </Form.Control>
                  </td>
                  <td><Button variant="warning"><TiDelete /></Button></td>
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
