import React, { useEffect, useState } from "react";
import "./user.css";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsuarios,
  deleteUsuario,
  changeToClient,
  changeToAdmin,
} from "../../service/Redux/actions/usersActions";

const UserTable = () => {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userCategories, setUserCategories] = useState({});

  useEffect(() => {
    dispatch(fetchUsuarios());
  }, [dispatch]);

  useEffect(() => {
    // Inicializa las categorías actuales en un objeto de estado
    const initialCategories = {};
    usuarios.forEach((usuario) => {
      initialCategories[usuario._id] = usuario.categoria;
    });
    setUserCategories(initialCategories);
  }, [usuarios]);

  const handleDelete = (usuario) => {
    setSelectedUser(usuario);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedUser) {
      dispatch(deleteUsuario(selectedUser._id));
      setShowDeleteModal(false);
      dispatch(fetchUsuarios());
    }
  };

  const handleUpdate = (usuario) => {
    setSelectedUser(usuario);
    setShowUpdateModal(true);
  };

  const confirmUpdate = () => {
    if (selectedUser) {
      const newCategory = userCategories[selectedUser._id];
      if (newCategory === "cliente") {
        dispatch(changeToClient(selectedUser._id));
      } else if (newCategory === "admin") {
        dispatch(changeToAdmin(selectedUser._id));
      }
      setShowUpdateModal(false);
      // dispatch(fetchUsuarios());
    }
  };

  const handleCategoryChange = (e, usuarioId) => {
    const value = e.target.value;
    setUserCategories((prevCategories) => ({
      ...prevCategories,
      [usuarioId]: value,
    }));
  };

  return (
    <Container>
      <Row>
        <h2 className="userTitle">Lista de Usuarios</h2>
        <Col>
          <Table striped className="tableUser" border="warning">
            <thead>
              <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Provincia</th>
                <th>Ciudad</th>
                <th>Domicilio</th>
                <th>Category</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario._id}>
                  <td>{usuario.dni}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.provincia}</td>
                  <td>{usuario.ciudad}</td>
                  <td>{usuario.domicilio}</td>
                  <td className="categoryColumn">{usuario.categoria}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdate(usuario)}
                    >
                      Cambiar a{" "}
                      {usuario.categoria === "cliente" ? "admin" : "cliente"}
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(usuario)}
                    >
                      <TiDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar al usuario {selectedUser?.nombre}
          {selectedUser?.apellido}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Actualización</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          ¿Estás seguro de que deseas cambiar la categoría del usuario{" "}
          {selectedUser?.nombre} {selectedUser?.apellido} de{" "}
          {selectedUser?.categoria} a{" "}
          {selectedUser?.categoria === "cliente" ? "admin" : "cliente"}?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmUpdate}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserTable;
