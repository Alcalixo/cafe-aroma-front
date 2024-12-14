import { useParams } from "react-router-dom";
import pending from "../../assets/img/pending.gif";
import rejected from "../../assets/img/rejected.gif";
import success from "../../assets/img/success.gif";
import "./MercadoPagoCallback.css";

function MercadoPagoCallback() {
  const { status } = useParams();

  if (status === "approved") {
    return (
      <div class="container text-center">
        <div class="success-container">
          <img id="success" src={success} alt="Sucess GIF" className="gif" />
        </div>
        <h1>Success</h1>
        <p>La operación se ha completado exitosamente.</p>
        {/* <a href="http://localhost:3000/">Volver</a> */}
      </div>
    );
  } else if (status === "pending") {
    return (
      <div class="container text-center">
        <div class="pending-container">
          <img id="pending" src={pending} alt="Pending GIF" className="gif" />
        </div>
        <h1>Pending</h1>
        <p>La información solicitada está pendiente de ser procesada.</p>
        {/* <a href="http://localhost:3000/">Volver</a> */}
      </div>
    );
  } else {
    return (
      <div class="container text-center">
        <div class="rejected-container">
          <img
            id="rejected"
            src={rejected}
            alt="Rejected GIF"
            className="gif"
          />
        </div>
        <h1>Rejected</h1>
        <p>La operación se ha rechazado.</p>
        {/* <a href="http://localhost:3000/">Volver</a> */}
      </div>
    );
  }
}

export default MercadoPagoCallback;
