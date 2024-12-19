import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./VerComentarios.css";

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/comentarios/admin/comentarios`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/api/comentarios/marcarComoLeido/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === id ? { ...comment, leido: "SI" } : comment
        )
      );
    } catch (error) {
      console.error("Error marking comment as read:", error);
    }
  };

  const handleMarkAsUnread = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/api/comentarios/marcarComoNoLeido/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === id ? { ...comment, leido: "NO" } : comment
        )
      );
    } catch (error) {
      console.error("Error marking comment as unread:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/api/comentarios/admin/eliminarComentario/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== id)
      );
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  if (loading) {
    return <p>Cargando comentarios...</p>;
  }

  return (
    <Container className="comments-container">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="TitleComments">Comentarios Recibidos</h2>
          <Table striped bordered hover className="comments-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Asunto</th>
                <th>Descripción</th>
                <th>Leído</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment._id}>
                  <td>{comment.email}</td>
                  <td>{comment.asunto}</td>
                  <td>{comment.descripcion}</td>
                  <td>{comment.leido}</td>
                  <td>{new Date(comment.createdAt).toLocaleString()}</td>
                  <td>
                    {" "}
                    {comment.leido === "NO" && (
                      <Button
                        variant="success"
                        size="sm"
                        className="mr-2"
                        onClick={() => handleMarkAsRead(comment._id)}
                      >
                        {" "}
                        Marcar como leído{" "}
                      </Button>
                    )}{" "}
                    {comment.leido === "SI" && (
                      <Button
                        variant="warning"
                        size="sm"
                        className="mr-2"
                        onClick={() => handleMarkAsUnread(comment._id)}
                      >
                        {" "}
                        Marcar como no leído{" "}
                      </Button>
                    )}{" "}
                    <p> </p>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(comment._id)}
                    >
                      {" "}
                      Eliminar{" "}
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Comments;
