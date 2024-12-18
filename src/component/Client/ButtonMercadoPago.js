import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../service/AuthContext";
import { postOrder } from "../../service/Redux/actions/cartActions";
import { clearCart } from "../../service/Redux/reducers/cartSlice";
import "./ButtonMercadoPago.module.css";

function ButtonMercadoPago() {
  const publicApi = process.env.REACT_APP_MP_PUBLIC_KEY;
  initMercadoPago(publicApi);

  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();

  const globalCart = useSelector((state) => state.cart);

  const cartWithIVA = globalCart.map((item) => {
    return {
      ...item,
      precio: (Number(item.precio) * 1.21).toFixed(2),
    };
  });

  const createPreference = async () => {
    try {
      const newOrder = await postOrder(globalCart, user);
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/mercadoPago/createPreference/${newOrder._id}`,
        cartWithIVA,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };
  const handleMP = async () => {
    setLoading(true);
    const id = await createPreference();
    id && setPreferenceId(id);
  };

  const handleRemoveAll = () => {
    dispatch(clearCart());
  };

  const initialization = {
    preferenceId: preferenceId,
  };

  const customization = {
    texts: {
      valueProp: "smart_option",
    },
    visual: {
      //buttonHeight: 'auto', // Cambia '0px' a 'auto' o a un valor específico
      //verticalPadding: '10px', // Ajusta el padding vertical según sea necesario
      //horizontalPadding: "20px", // Ajusta el padding horizontal según sea necesario
      hideValueProp: true,
    }
  };

  const onSubmit = async (formData) => {
    // callback called when clicking on Wallet Brick
    // this is possible because Brick is a button
    window.walletBrickController.unmount();
  };

  const onError = async (error) => {
    // callback called for all Brick error cases
    console.log(error);
  };

  const onReady = async () => {
    // Callback called when Brick is ready.
    // Here, you can hide loadings on your website, for example.
    setLoading(false);
  };

  return (
    <Container>
        <Row className="justify-content-between d-flex">
          <Col className="text-center mb-6">
            <Button variant="primary" onClick={() => handleRemoveAll()}>
              Vaciar el Carrito
            </Button>
          </Col>
          <Col className="text-center mb-6">
            <Button
              onClick={!isLoading ? handleMP : null}
              variant="primary"
              disabled={isLoading}
            >
              {isLoading ? "Preparando Pago" : "Proceder al Pago"}
            </Button>
          </Col>
        </Row>
      <Row>
        <Col className="text-center mb-12">
          {preferenceId && (
            <div className="wallet-container">
              <Wallet
                initialization={initialization}
                customization={customization}
                locale="es-AR"
                onSubmit={onSubmit}
                onReady={onReady}
                onError={onError}
              />
            </div>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonMercadoPago;
