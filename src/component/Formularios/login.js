import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useAuth } from "../../service/AuthContext"; // Importa el contexto de autenticación
import { jwtDecode } from "jwt-decode";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" }); // Estado para el formulario de inicio
  const [registerForm, setRegisterForm] = useState({
    dni: 0,
    nombre: "",
    apellido: "",
    username: "",
    email: "",
    password: "",
    //lines commented
    // provincia: null,
    // ciudad: null,
    // domicilio: null,
  }); // Estado para el formulario de registro

  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  const { login } = useAuth(); // Obtiene la función de login del contexto

  // Cambiar entre los formularios
  const switchContent = () => {
    const content = document.getElementById("contentLogin");
    content.classList.toggle("active");
  };

  // Manejo del cambio en los campos del formulario de inicio
  const handleLoginChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manejo del cambio en los campos del formulario de registro
  const handleRegisterChange = (e) => {
    if (e.target.name === "dni") {
      setRegisterForm({
        ...registerForm,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }
  };

  // Función para manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    setShowErrors(false);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
        form
      );
      localStorage.setItem("token", response.data.token); // Guardar token
      const userData = jwtDecode(response.data.token); // Decodificar el token para obtener los datos del usuario
      login(userData); // Pasar los datos del usuario al contexto de autenticación
      alert("Inicio de sesión exitoso.");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const apiErrors = Array.isArray(error.response.data.error)
          ? error.response.data.error
          : [error.response.data.error];
        setErrors(apiErrors);
      } else {
        setErrors([
          "Error al iniciar sesión. Verifica tu correo y/o contraseña.",
        ]);
      }
      setShowErrors(true);
    }
  };

  // Función para manejar el registro
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors([]); // Inicializar como array vacío
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/registrarUsuario`,
        registerForm
      );
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      switchContent(); // Cambiar al formulario de inicio
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const apiErrors = Array.isArray(error.response.data.error)
          ? error.response.data.error
          : [error.response.data.error];
        setErrors(apiErrors);
      } else {
        setErrors(["Error en el registro. Por favor, verifica tus datos."]);
      }
      setShowErrors(true);
    }
  };

  return (
    <div className="bodyLogin">
      <div
        className="contentLogin justify-content-center align-items-center d-flex shadow-lg"
        id="contentLogin"
      >
        {/*-------------FORMULARIO DE REGISTRO-----------------*/}
        <div className="col-md-6 d-flex justify-content-center">
          <form onSubmit={handleRegister}>
            <div className="header-text mb-4">
              <h1>Registrarse</h1>
            </div>
            <input
              type="number"
              name="dni"
              placeholder="DNI"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.dni}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.nombre}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.apellido}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Nombre de Usuario"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.username}
              onChange={handleRegisterChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.email}
              onChange={handleRegisterChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.password}
              onChange={handleRegisterChange}
            />
            {/* <input
              type="text"
              name="provincia"
              placeholder="Provincia"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.provincia}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.ciudad}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="domicilio"
              placeholder="Domicilio"
              className="form-control form-control-lg bg-light fs-6"
              value={registerForm.domicilio}
              onChange={handleRegisterChange}
            /> */}
            <button type="submit" className="btn border-white w-60 fs-6">
              Registrarse
            </button>
            {errors.length > 0 && (
              <div className="mt-3">
                {errors.map((error, index) => (
                  <p key={index} className="text-danger">
                    {error}
                  </p>
                ))}
              </div>
            )}
          </form>
        </div>
        {/*-------------FORMULARIO DE INICIO-----------------*/}
        <div className="col-md-6 right-box">
          <form onSubmit={handleLogin}>
            <div className="header-text mb-4">
              <h1>Iniciar Sesión</h1>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                name="email"
                placeholder="Correo"
                className="form-control form-control-lg bg-light fs-6"
                value={form.email}
                onChange={handleLoginChange}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control form-control-lg bg-light fs-6"
                value={form.password}
                onChange={handleLoginChange}
              />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Recordarme</label>
            </div>
            <button type="submit" className="btn border-white w-50 fs-6">
              Acceder
            </button>
          </form>
        </div>
        {/*---------------------------------Panel Dinámico------------------------------*/}
        <div className="switch-content">
          <div className="switch">
            <div className="switch-panel switch-left">
              <h1>Bienvenido a Café Aroma</h1>
              <p>Regístrate para vivir una nueva experiencia</p>
              <button
                className="btn text-white w-50 fs-6"
                id="acceder"
                onClick={switchContent}
              >
                Acceder
              </button>
            </div>
            <div className="switch-panel switch-right">
              <h1>Bienvenido de Nuevo</h1>
              <p>Gracias por volver</p>
              <button
                className="btn border-white text-white w-60 fs-6"
                id="registrarse"
                onClick={switchContent}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
