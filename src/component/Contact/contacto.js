import React, { useState } from "react";
import "./contacto.css";
import CardList from "./tarjeta/CardList";
import FormContacto from "./FormularioContacto/formContacto";
import "./FormularioContacto/formContacto.css";

function Contacto() {
  const [showForm, setShowForm] = useState(false); // Estado para controlar la vista

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowComments = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="contenedorContacto d-flex flex-wrap justify-content-center">
        <div
          className={`container-contacto ${
            showForm ? "active" : ""
          } col-md-6 col-lg-4`}
        >
          <CardList />
        </div>
        <div
          className={`formbody-contacto ${
            showForm ? "active" : ""
          } col-md-6 col-lg-4`}
        >
          <FormContacto />
        </div>
      </div>
    </>
  );
}

export default Contacto;
