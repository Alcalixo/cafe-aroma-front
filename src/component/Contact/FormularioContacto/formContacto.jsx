import React, { useState, useEffect } from "react";
import axios from "axios";

function FormContacto() {
  const [form, setForm] = useState({ email: "", asunto: "", descripcion: "" });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    function SwitchContent() {
      const content = document.getElementById("contentContacto");
      const registrarseBtn = document.getElementById("registrarse");
      const accederBtn = document.getElementById("acceder");

      registrarseBtn.addEventListener("click", () => {
        content.classList.add("active");
      });
      accederBtn.addEventListener("click", () => {
        content.classList.remove("active");
      });
    }

    SwitchContent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEnvio = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/comentarios/crearComentario`, form);
      setEnviado(true);
    } catch (error) {
      if (error.response) {
        // La solicitud se realizó y el servidor respondió con un código de estado que no está en el rango de 2xx
        const errorMessage = error.response.data.error || "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.";
        alert(`Error: ${errorMessage}`);
      } else if (error.request) {
        // La solicitud se realizó pero no se recibió respuesta
        alert("No se recibió respuesta del servidor. Por favor, intenta nuevamente.");
      } else {
        // Algo sucedió al configurar la solicitud que lanzó un error
        alert("Error al enviar el mensaje: " + error.message);
      }
    }
  };

  const handleVolver = () => {
    setEnviado(false);
    setForm({ email: "", asunto: "", descripcion: "" });
  };

  return (
    <div className="contentContacto justify-content-center align-items-center d-flex shadow-lg" id="contentContacto">
      {enviado ? (
        <div className="switch-content">
          <div className="switch">
            <div className="switch-panel switch-left">
              <h1>Enviado!</h1>
              <p>Nos comunicaremos contigo a la brevedad.</p>
              <button className="btn text-white w-50 fs-6" onClick={handleVolver}>
                Volver a Enviar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="switch-content">
            <div className="switch">
              <div className="switch-panel switch-left">
                <h1>Gracias Por Contactarnos</h1>
                <p>Nos comunicaremos a la brevedad</p>
                <button className="hidden btn text-white w-50 fs-6" id="acceder">
                  Volver a Enviar
                </button>
              </div>
              <div className="switch-panel switch-right">
                <h1>  Dejanos Tu Inquietud</h1>
                <p> </p>
                <button className="hidden btn border-white text-white w-60 fs-6" id="registrarse">
                  Enviar Comentario
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 right-box">
            <form onSubmit={handleEnvio}>
              <div className="header-text mb-1">
                <h1>Envianos tu Inquietud</h1>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  className="form-control form-control-lg bg-light fs-6"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
              <input
                  type="asunto"
                  name="asunto"
                  placeholder="Motivo"
                  className="form-control form-control-lg bg-light fs-6"
                  value={form.asunto}
                  onChange={handleChange}
                  required
                />
              </div>              
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  name="descripcion"
                  placeholder="Escribe tu mensaje aquí..."
                  value={form.descripcion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3 justify-content-center">
                <button type="submit" className="btn border-white w-60 fs-6">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormContacto;
