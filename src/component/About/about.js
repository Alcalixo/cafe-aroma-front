import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import personal from "../../service/db/personal";
import "./about.css";

function About() {
  return (
    <Container className="mt-3 pt-3">
      {/* <h2>Quienes Somos</h2> */}
      <Row className="row row-cols-1 row-cols-md-3 g-4">
        {personal.map((persona) => (
          <Col key={persona.id} md={4} className="mb-4">
            <Card className="card-zoom h-100 text-center" border="warning">
              <Card.Img
                variant="top"
                src={persona.imagen}
                alt={persona.nombre}
                style={{ width: "200px" }}
              />
              <Card.Body>
                <Card.Title>{persona.nombre}</Card.Title>
                <Card.Text>{persona.descripcion}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ display: "flex", gap: 10 }}>
                <Button
                  variant="primary"
                  href={persona.linkedin}
                  target="_blank"
                >
                  <FaLinkedin />
                </Button>
                <Button variant="dark" href={persona.github} target="_blank">
                  <FaGithub />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default About;
