import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Si estás usando Bootstrap para las tarjetas

// Este componente recibirá una lista de productos y los mostrará
const FeaturedProducts = ({ products }) => {
  // Limitar la cantidad de productos a mostrar (por ejemplo, los primeros 5 productos)
  const limitedProducts = products.slice(0, 5); // Cambia el número a 4 si quieres mostrar 4 productos

  return (
    <div className="featured-products-container">
      {limitedProducts.map((product) => (
        <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedProducts;
