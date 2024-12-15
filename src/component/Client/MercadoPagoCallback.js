import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import pending from "../../assets/img/pending.gif";
import rejected from "../../assets/img/rejected.gif";
import success from "../../assets/img/success.gif";
import "./MercadoPagoCallback.css";

function MercadoPagoCallback() {
  const { status } = useParams();

  return (
    <Container className="d-flex flex-column align-items-center mt-3 pt-3">
      <Row className="d-flex justify-content-center">
        <Col>
          <Card className="card-zoom h-100 text-center" border="warning">
            {status === "approved" ? (
              <>
                <div class="success-container">
                  <img
                    id="success"
                    src={success}
                    alt="Sucess GIF"
                    className="gif"
                  />
                </div>
                <h1>Success</h1>
                <p>La operación se ha completado exitosamente.</p>
              </>
            ) : status === "pending" ? (
              <>
                <div class="pending-container">
                  <img
                    id="pending"
                    src={pending}
                    alt="Pending GIF"
                    className="gif"
                  />
                </div>
                <h1>Pending</h1>
                <p>La operación está pendiente de confirmación.</p>
              </>
            ) : (
              <>
                <div class="rejected-container">
                  <img
                    id="rejected"
                    src={rejected}
                    alt="Rejected GIF"
                    className="gif"
                  />
                </div>
                <h1>Rejected</h1>
                <p>La operación ha sido rechazada.</p>
              </>
            )}
            <Card>
              <Link to="/productos">
                <Button variant="primary">Seguir Comprando</Button>
              </Link>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MercadoPagoCallback;
