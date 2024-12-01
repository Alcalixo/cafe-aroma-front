import React from "react";
import './about.css'
import { MdOutlineEdit } from "react-icons/md";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import personal from "./../db/personal";


function About() {
    return (
      <Container>
        <h2>Nuestros Productos</h2>
        <Row>
          {personal.map((persona) => (
            <Col key={persona.id} md={4} className="mb-4">
              <Card className="card-zoom" border="warning">
                <Card.Img
                  variant="top"
                  src={persona.imagen}
                  alt={persona.nombre}
                  style={{ width: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{persona.nombre}</Card.Title>
                  <Card.Text>{persona.descripcion}</Card.Text>
                  <Button variant="warning">
                    <MdOutlineEdit />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  export default About;