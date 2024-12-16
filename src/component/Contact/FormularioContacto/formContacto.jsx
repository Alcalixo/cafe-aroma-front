import React, { useState, useRef } from "react";
import axios from "axios";

function FormContacto() {
  const [form, setForm] = useState({ email: "", asunto: "", descripcion: "" });
  const [enviado, setEnviado] = useState(false);
  const [activePanel, setActivePanel] = useState(false); // Estado para manejar la clase "active"

  const contentRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEnvio = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/comentarios/crearComentario`,
        form
      );
      setEnviado(true);
    } catch (error) {
      const errorMessage =
        error.response?.data.error ||
        "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.";
      alert(`Error: ${errorMessage}`);
    }
  };

  const handleVolver = () => {
    setEnviado(false);
    setForm({ email: "", asunto: "", descripcion: "" });
  };

  return (
    <div
      className={`contentContacto ${activePanel ? "active" : ""}`}
      id="contentContacto"
      ref={contentRef}
    >
      {enviado ? (
        <div className="formbody-contacto">
          <h1>¡Enviado!</h1>
          <p>Nos comunicaremos contigo a la brevedad.</p>
          <button
            className="btn"
            onClick={() => {
              handleVolver();
              setActivePanel(false); // Volver al panel inicial
            }}
          >
            Volver a Enviar
          </button>
        </div>
      ) : (
        <>
          {/* Switch Panel */}
          <div className="switch-content">
            <div className="switch">
              <div className="switch-panel switch-left">
                <h1>¡Gracias por Contactarnos!</h1>
                <p>Nos comunicaremos contigo pronto.</p>
                <button
                  className="btn"
                  onClick={() => setActivePanel(false)}
                >
                  Volver
                </button>
              </div>
              <div className="switch-panel switch-right">
                <h1>Déjanos tu Inquietud</h1>
                <button
                  className="btn"
                  onClick={() => setActivePanel(true)}
                >
                  Enviar Comentario
                </button>
              </div>
            </div>
          </div>
          {/* Formulario */}
          <div className="formbody-contacto">
            <form onSubmit={handleEnvio}>
              <div className="header-text mb-3">
                <h1>Envianos tu Inquietud</h1>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="asunto"
                  placeholder="Motivo"
                  className="form-control"
                  value={form.asunto}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  name="descripcion"
                  placeholder="Escribe tu mensaje aquí..."
                  value={form.descripcion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn w-100">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default FormContacto;


