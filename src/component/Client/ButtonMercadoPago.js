import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ButtonMercadoPago({ cart }) {
  const publicApi = process.env.REACT_APP_MP_PUBLIC_KEY;
  initMercadoPago(publicApi);

  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/mercadoPago/createPreference`,
        cart
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };
  const handleMP = async () => {
    const id = await createPreference();
    id && setPreferenceId(id);
  };

  const initialization = {
    preferenceId: preferenceId,
    redirectMode: "blank",
  };

  const customization = {
    texts: {
      valueProp: "smart_option",
    },
  };

  const onSubmit = async (formData) => {
    // callback called when clicking on Wallet Brick
    // this is possible because Brick is a button
  };

  const onError = async (error) => {
    // callback called for all Brick error cases
    console.log(error);
  };

  const onReady = async () => {
    // Callback called when Brick is ready.
    // Here, you can hide loadings on your website, for example.
  };

  return (
    <div>
      <Button onClick={handleMP} variant="primary">
        Proceder al Pago
      </Button>
      {preferenceId && (
        <Wallet
          initialization={initialization}
          customization={customization}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={onError}
        />
      )}
    </div>
  );
}

export default ButtonMercadoPago;
