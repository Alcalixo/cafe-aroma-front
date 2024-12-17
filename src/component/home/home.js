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

import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import Login from "../../component/Formularios/login"; // Asegúrate de que la ruta sea correcta
import "./home.css";
import img01 from "../../assets/img/img01.jpg";
import img02 from "../../assets/img/img02.jpg";
import img03 from "../../assets/img/img03.jpg";
import icono1 from "../../assets/img/biology.png";
import icono2 from "../../assets/img/coffee.png";
import icono3 from "../../assets/img/handshake.png";
import icono4 from "../../assets/img/hot-coffee.png";


function Home() {
  const [showLogin, setShowLogin] = useState(false); // Estado para mostrar el formulario de inicio de sesión
  const [products, setProducts] = useState([]); // Estado para los productos

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los productos, por ahora usamos un array de ejemplo
    const fetchProducts = async () => {
      // Simulación de una llamada a API para obtener los productos
      const response = await fetch('/api/products'); // Cambia la URL por tu API real
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
    
  
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
            <img src={img01} alt="Primera imagen" />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <a href="#!">
            <img src={img02} alt="Segunda imagen" />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <section class="info-section">
      <h2 class="info-title">Impulsado por el arte del café y la pasión de las personas</h2>
    
  <div class="info-container">
    <div class="info-card">
      <img src={icono1} alt="Café hecho a mano"/>
      <h3>ELABORACIÓN ARTESANAL PRARA CADA TAZA</h3>
      <p> Cada grano de café es seleccionado a mano y tostado artesanalmente para ofrecerte una experiencia única. Nuestro objetivo es brindar un sabor excepcional que conecta a las personas en cada mesa.</p>
    </div>
    <div class="info-card">
      <img src={icono2} alt="Amor por los frijoles"/>
      <h3>PASIÓN EN CADA MOMENTO</h3>
      <p> Nos apasiona el café desde la planta hasta tu taza. Cuidamos cada proceso, asegurando calidad y frescura que respetan los sabores y aromas naturales del grano</p>
    </div>
    <div class="info-card">
      <img src={icono3} alt="Comunidad global del café"/>
      <h3>UNIENDO A PRODUCTORES Y AMANTES DEL CAFÉ</h3>
      <p> Trabajamos directamente con agricultores y cooperativas locales para garantizar un comercio justo y sostenible, creando una cadena de valor que beneficia a todos.</p>
    </div>
    <div class="info-card">
      <img src={icono4}alt="No es tu promedio tostador"/>
      <h3>NO ES SOLO CAFÉ, ES UNA EXPERIENCIA</h3>
      <p>Exploramos nuevas técnicas de tostado y preparación para ofrecerte sabores innovadores que deleitan a conocedores y aficionados por igual.</p>
    </div>
  </div>
</section>


<div class="moving-text-container">
  <div class="moving-text">
    <span>¡Descubre nuestra variedad de cafés!</span>
    <span>Disfruta de un sabor único.</span>
    <span>¡Prueba nuestra selección especial!</span>
    <span>Cada taza de café cuenta una historia.</span>
    <span>¡Despierta tu pasión por el café!</span>
    <span>Descubre el sabor que hará tu día perfecto.</span>
    <span>¡Un café para cada momento!</span>
    <span>¡No es solo café, es una experiencia!</span>
    <span>¡Descubre nuestra variedad de cafés!</span>
    <span>Disfruta de un sabor único.</span>
    <span>¡Prueba nuestra selección especial!</span>
    <span>Cada taza de café cuenta una historia.</span>
    <span>¡Despierta tu pasión por el café!</span>
    <span>Descubre el sabor que hará tu día perfecto.</span>
    <span>¡Un café para cada momento!</span>
    <span>¡No es solo café, es una experiencia!</span>
    
  </div>
</div>


  <section class="cta-section">
    <div class="cta-content">
      <h2>Descubre Nuestros Mejores Cafés</h2>
      <p>Explora una selección única de granos frescos y tostados artesanalmente.</p>
    </div>
    <div class="cta-image">
      <img src={img03}  alt="Imagen de café artesanal"/>
    </div>
  </section>

  <div className="button-container">
        <Button variant="primary" className="view-products-button" onClick={handleLoginClick} >
          Ver Productos
        </Button>
        <Button
          variant="secondary"  className="login-button"
          onClick={handleLoginClick}
        >
          Iniciar Sesión
        </Button>
  </div>
  
</div>
  );
}

export default Home;
