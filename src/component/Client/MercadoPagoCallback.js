import React, { useEffect, useState } from "react";

const MercadoPagoCallback = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentId = params.get("payment_id");
    const status = params.get("status");
    const externalReference = params.get("external_reference");
    const merchantOrderId = params.get("merchant_order_id");

    if (paymentId && status) {
      // Aquí puedes realizar las acciones necesarias en tu frontend
      // Por ejemplo, mostrar un mensaje de éxito o error, actualizar el estado de la orden de compra, etc.
      setPaymentStatus(status);
    }
  }, []);

  if (paymentStatus === "approved") {
    return <div>Pago aprobado!</div>;
  } else if (paymentStatus === "pending") {
    return <div>Pago pendiente...</div>;
  } else {
    return <div>Pago rechazado</div>;
  }
};

export default MercadoPagoCallback;
