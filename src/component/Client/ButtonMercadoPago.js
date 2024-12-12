
import { Button } from "react-bootstrap";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";

function ButtonMercadoPago({ cart }) {
    const publicApi = process.env.REACT_APP_MP_PUBLIC_KEY;
    initMercadoPago(publicApi);

    const [preferenceId, setPreferenceId] = useState(null);
    
    const createPreference = async () => {
        try {
          console.log(cart)
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
    return (
        <div>
            <Button onClick={handleMP} variant="primary">Proceder al Pago</Button>
            {preferenceId && (
              <Wallet
                initialization={{
                  preferenceId: preferenceId,
                  redirectMode: "blank",
                }}
              />
            )}
        </div>
    );
}

export default ButtonMercadoPago;