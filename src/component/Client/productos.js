import React, { useEffect } from "react";
import "./productos.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../../service/Redux/actions/productActions";

function Productos() {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos); // Selecciona productos del estado global

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]); // Asegurarse de que fetchProductos solo se llama una vez

  console.log("Productos:", productos); // Log para verificar los datos

  if (!Array.isArray(productos)) {
    return <p>Cargando productos...</p>; // Renderizar algo mientras se cargan los datos
  }

  return (
    <Container>
      <h2>Nuestros Productos</h2>
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} md={4} className="mb-4">
            <Card className="card-zoom" border="warning">
              <Card.Img
                variant="top"
                src={producto.images[0]} // Asegúrate de que la propiedad sea correcta
                alt={producto.title} // Asegúrate de que la propiedad sea correcta
                style={{ width: "200px" }}
              />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>Precio: ${producto.price}</Card.Text>
                <Card.Text>
                  Disponibilidad:
                  {producto.enStock ? "Disponible" : "No disponible"}
                </Card.Text>
                <Button variant="warning">
                  <TiShoppingCart /> Agregar al Carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
