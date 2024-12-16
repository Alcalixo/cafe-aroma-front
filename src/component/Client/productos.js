import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FormSelect from "react-bootstrap/FormSelect";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../../service/Redux/actions/productActions";
import { addCart } from "../../service/Redux/reducers/cartSlice";
import { SearchContext } from "../../service/SearchContext";
import Paginacion from "./Paginacion";
import "./productos.css";

function Productos() {
  const { searchTerm } = useContext(SearchContext);
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos); // Selecciona productos del estado global
  const cart = useSelector((state) => state.cart); // Selecciona el carrito del estado global (opcional para verificar)
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina, setProductosPorPagina] = useState(4);

  const filteredProducts = productos.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalDeProductos = filteredProducts.length;

  const ultimoIndice = productosPorPagina * paginaActual;
  const primerIndice = ultimoIndice - productosPorPagina;

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]); // Asegurarse de que fetchProductos solo se llama una vez

  if (!Array.isArray(productos)) {
    return <p>Cargando productos...</p>; // Renderizar algo mientras se cargan los datos
  }

  const handleAddCart = (producto) => {
    dispatch(
      addCart({
        _id: producto._id,
        img: producto.img,
        title: producto.name,
        precio: producto.precio,
        description: producto.description,
      })
    );
  };

  return (
    <Container className="mt-3 pt-3">
      {/* <h2>Nuestros Productos</h2> */}
      <Row>
        {filteredProducts.slice(primerIndice, ultimoIndice).map((producto) => (
          <Col key={producto._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="card-zoom h-100" border="warning">
              <Card.Img
                variant="top"
                src={producto.img}
                alt={producto.name}
                style={{ width: "200px" }}
              />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Card.Text>Disponibilidad:{producto.stock} </Card.Text>
              </Card.Body>
              <Button
                variant="warning"
                style={{ marginBottom: "10px" }}
                onClick={() => handleAddCart(producto)}
              >
                <TiShoppingCart /> Agregar al Carrito
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center text-align-center">
        <Col xs="auto">
          <FormSelect
            value={productosPorPagina}
            onChange={(e) => setProductosPorPagina(e.target.value)}
          >
            <option value="4">4 productos</option>
            <option value="6">6 productos</option>
            <option value="8">8 productos</option>
            <option value={totalDeProductos}>todos los productos</option>
          </FormSelect>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Paginacion
            productosPorPagina={productosPorPagina}
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            totalDeProductos={totalDeProductos}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Productos;
