import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductos,
  deleteProducto,
  updateProducto,
  createProducto,
} from "../../service/Redux/actions/productActions";
import { Table, Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

const Crud = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos); // Selecciona productos del estado global

  // Columnas de la tabla productos
  const [selectedProduct, setSelectedProduct] = useState({
    _id: "",
    name: "",
    precio: "",
    stock: "",
    img: "",
    description: "",
  });

  // Para manipular el modal
  const [operacion, setOperacion] = useState(1); // Operación para el modal abm
  const [title, setTitle] = useState(""); // Título del modal abm
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // Mensaje para el modal de confirmación
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Controla la visibilidad del modal de confirmación

  // Usamos esto para traer los productos
  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  // Para abrir el modal y qué acción se va a ejecutar
  const openModal = (op, producto = {}) => {
    setSelectedProduct({
      _id: "",
      name: "",
      precio: "",
      stock: "",
      img: "",
      description: "",
    });
    setOperacion(op);
    if (op === 1) {
      setTitle("Registrar Producto");
    } else if (op === 2) {
      setTitle("Editar Producto");
      setSelectedProduct(producto);
    }
    setShow(true);
  };

  // Validación de campos vacíos y enviar solicitud
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, name, precio, stock, img, description } = selectedProduct;
    if (
      name.trim() === "" ||
      img.trim() === "" ||
      description.trim() === "" ||
      isNaN(precio) ||
      isNaN(stock)
    ) {
      Swal.fire("Error", "Todos los campos son obligatorios", "warning");
      return;
    }
    try {
      if (operacion === 1) {
        await dispatch(createProducto(selectedProduct));
        setModalMessage("Producto agregado correctamente.");
      } else {
        await dispatch(updateProducto(_id, selectedProduct));
        setModalMessage("Producto actualizado correctamente.");
      }
      setShow(false);
      setShowConfirmationModal(true); // Mostrar modal de confirmación
      dispatch(fetchProductos());
    } catch (error) {
      setModalMessage(error.message || "Error al agregar el producto.");
      setShow(false);
      setShowConfirmationModal(true); // Mostrar modal de confirmación
    }
  };

  const handleChange = (e) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
  };

  const handleDelete = (_id, name) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `¿Seguro de Eliminar el Producto ${name}?`,
      icon: "question",
      text: "No se podrá deshacer la eliminación del producto actual",
      showCancelButton: true,
      confirmButtonText: "Sí, Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProducto(_id));
        Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
        dispatch(fetchProductos());
      }
    });
  };

  if (!Array.isArray(productos)) {
    return <p>Cargando productos...</p>
  }

return (
  <div className="container-fluid">
    <div className="row mt-3">
      <div className="col-md-4 offset-md-4">
        <div className="d-grid mx-auto">
          <Button
            onClick={() => openModal(1)}
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#modalProductos"
          >
            <i className="fa-solid fa-circle-plus"></i> <FaCirclePlus />{" "}
            Añadir
          </Button>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12 col-lg-8 offset-0 offset-lg-2">
        <div className="table-responsive">
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>PRODUCTOS</th>
                <th>PRECIO</th>
                <th>STOCK</th>
                <th>IMAGEN</th>
                <th>DESCRIPCIÓN</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {productos.map((producto, i) => (
                <tr key={producto._id}>
                  <td>{i + 1}</td>
                  <td>{producto.name}</td>
                  <td>
                    ${new Intl.NumberFormat("es-mx").format(producto.precio)}
                  </td>
                  <td>{producto.stock}</td>
                  <td>
                    <img
                      src={producto.img}
                      alt={producto.name}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{producto.description}</td>
                  <td>
                    <Button
                      onClick={() => openModal(2, producto)}
                      className="btn btn-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-productos"
                    >
                      <i className="fa-solid fa-edit">
                        <FaRegEdit />
                      </i>
                    </Button>
                    &nbsp;
                    <Button
                      onClick={() =>
                        handleDelete(producto._id, producto.name)
                      }
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash">
                        <MdOutlineDeleteForever />
                      </i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>

    {/* Modal para agregar o editar producto */}
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={selectedProduct.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={selectedProduct.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              value={selectedProduct.precio}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={selectedProduct.stock}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formImg">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              name="img"
              value={selectedProduct.img}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {operacion === 1 ? "Agregar" : "Actualizar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>

    {/* Modal de Confirmación */}
    <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Resultado de la Operación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {modalMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Crud;