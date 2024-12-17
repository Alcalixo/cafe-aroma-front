import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useAuth } from "../../service/AuthContext";
import { postOrder } from "../../service/Redux/actions/cartActions";

function ButtonMercadoPago({ cart }) {
  const publicApi = process.env.REACT_APP_MP_PUBLIC_KEY;
  initMercadoPago(publicApi);
  
  const [preferenceId, setPreferenceId] = useState(null);
  const { user } = useAuth();

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
    const id = await createPreference();
    id && setPreferenceId(id);
  };

  const initialization = {
    preferenceId: preferenceId,
  };

  const customization = {
    texts: {
      valueProp: "smart_option",
    },
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
