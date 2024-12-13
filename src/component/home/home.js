// import React, { useState } from "react";
// import { Carousel, Button } from "react-bootstrap";
// import Login from "../../component/Formularios/login"; // Asegúrate de que la ruta sea correcta
// import "./home.css";

// function Home() {
//   const [showLogin, setShowLogin] = useState(false); // Estado para mostrar el formulario de inicio de sesión

//   const handleLoginClick = () => {
//     setShowLogin(true); // Mostrar el formulario de inicio de sesión
//   };

//   return (
//     <div className="home-container">
//       {showLogin && (
//         <Login setIsAuthenticated={() => setShowLogin(false)} />
//       )}{" "}
//       {/* Mostrar el formulario de inicio de sesión si showLogin es true */}
//       <div className="carousel-container">
//         <Carousel>
//           <Carousel.Item>
//             <a href="#!">
//               {" "}
//               {/* Enlace para la primera imagen */}
//               <img
//                 className="d-block w-100"
//                 src="https://plus.unsplash.com/premium_photo-1664189122782-c95ef0a841c7?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Cambia por la URL de tu imagen
//                 alt="Primera imagen"
//               />
//             </a>
//             <Carousel.Caption>
//               <h3>Bienvenido a Café Aroma</h3>
//               <p>Disfruta de nuestros deliciosos cafés y productos.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <a href="#!">
//               {" "}
//               {/* Enlace para la segunda imagen */}
//               <img
//                 className="d-block w-100"
//                 src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Cambia por la URL de tu imagen
//                 alt="Segunda imagen"
//               />
//             </a>
//             <Carousel.Caption>
//               <h3>Calidad y Sabor</h3>
//               <p>Experimenta la mejor calidad en cada taza.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <a href="#!">
//               {" "}
//               {/* Enlace para la tercera imagen */}
//               <img
//                 className="d-block w-100"
//                 src="https://images.unsplash.com/photo-1530268430791-f7d3be9b5f52?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Cambia por la URL de tu imagen
//                 alt="Tercera imagen"
//               />
//             </a>
//             <Carousel.Caption>
//               <h3>Explora Nuestros Productos</h3>
//               <p>Desde cafés hasta postres, tenemos algo para todos.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//       <div className="button-container">
//         <Button variant="primary" className="view-products-button">
//           Ver Productos
//         </Button>
//         <Button
//           variant="secondary"
//           className="login-button"
//           onClick={handleLoginClick}
//         >
//           Iniciar Sesión
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import Login from "../../component/Formularios/login"; // Asegúrate de que la ruta sea correcta
import "./home.css";

function Home() {
  const [showLogin, setShowLogin] = useState(false); // Estado para mostrar el formulario de inicio de sesión

  const handleLoginClick = () => {
    setShowLogin(true); // Mostrar el formulario de inicio de sesión
  };

  return (
    <div className="home-container">
      {showLogin && <Login setIsAuthenticated={() => setShowLogin(false)} />}{" "}
      {/* Mostrar el formulario de inicio de sesión si showLogin es true */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <a href="#!">
              <img
                className="d-block w-100"
                src="https://plus.unsplash.com/premium_photo-1664189122782-c95ef0a841c7?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Cambia por la URL de tu imagen
                alt="Primera imagen"
              />
            </a>
            <Carousel.Caption>
              <h3>Bienvenido a Café Aroma</h3>
              <p>Disfruta de nuestros deliciosos cafés y productos.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="#!">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Cambia por la URL de tu imagen
                alt="Segunda imagen"
              />
            </a>
            <Carousel.Caption>
              <h3>Calidad y Sabor</h3>
              <p>Experimenta la mejor calidad en cada taza.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="#!">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1530268430791-f7d3be9b5f52?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Cambia por la URL de
                alt="Tercera imagen"
              />
            </a>
            <Carousel.Caption>
              <h3>Explora Nuestros Productos</h3>
              <p>Desde cafés hasta postres, tenemos algo para todos.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="button-container">
        <Button variant="primary" className="view-products-button">
          Ver Productos
        </Button>
        <Button
          variant="secondary"
          className="login-button"
          onClick={handleLoginClick}
        >
          Iniciar Sesión
        </Button>
      </div>
    </div>
  );
}

export default Home;
