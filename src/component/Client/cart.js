import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../service/Redux/reducers/cartSlice";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import "./cart.css";
import { Link } from "react-router-dom";
import ButtonMercadoPago from "./ButtonMercadoPago";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const handleQuantityChange = (_id, quantity) => {
    dispatch(updateQuantity({ _id, quantity: parseInt(quantity, 10) }));
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  if (!Array.isArray(cart)) {
    return <p>Cargando carrito...</p>;
  }

  return (
    <Container className="cart-container">
      <h2>Tu Carrito</h2>
      <Row className="cart-items">
        {cart.length === 0 ? (
          <p>No tienes productos en tu carrito.</p>
        ) : (
          cart.map((item) => (
            <Row key={item._id} className="cart-item align-items-center mb-3">
              <Col xs={3}>
                <Image src={item.img} alt={item.name} fluid />
              </Col>
              <Col xs={6}>
                <h4>{item.title}</h4>
                <p>Precio: ${item.precio}</p>
              </Col>
              <Col xs={2}>
                <Form.Control
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item._id, e.target.value)
                  }
                />
              </Col>
              <Col xs={1}>
                <Button variant="danger" onClick={() => handleRemove(item._id)}>
                  Eliminar
                </Button>
              </Col>
            </Row>
          ))
        )}
      </Row>
      <div className="cart-summary">
        <h3>Resumen del Pedido</h3>
        <p>Subtotal: ${calculateSubtotal()}</p>
        <p>IVA: ${(calculateSubtotal() * 0.21).toFixed(2)} (21%)</p>
        <h4>Total: ${(calculateSubtotal() * 1.21).toFixed(2)}</h4>
        <div className="cart-actions mt-4">
          <Link to="../productos">
            <Button variant="secondary" className="me-3">
              Continuar Comprando
            </Button>
          </Link>
          {/* <Button variant="primary">Ir a Pagar</Button> */}
          <ButtonMercadoPago cart={cart} />
        </div>
      </div>
    </Container>
  );
}

export default Cart;
