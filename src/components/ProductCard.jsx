// ProductCard.jsx
import React from "react";
import { Card, Button, Dropdown } from 'react-bootstrap';
import "./ProductCard.css";

export function ProductCard({ product, cart, setCart }) {
  const [selectedColor, setSelectedColor] = React.useState('');

  const colorOptions = () => {
    if (["Protein Powder", "Creatine", "MassGainer"].includes(product.title)) {
      return ["Strawberry", "Vanilla", "Chocolate"];
    } else {
      return ["Silver", "Black", "Gold"];
    }
  };

  function handleAddToCart() {
    const itemWithColor = { ...product, color: selectedColor };
    setCart([...cart, itemWithColor]);
  }

  function handleRemoveFromCart() {
    setCart(cart.filter((item) => !(item.title === product.title && item.color === selectedColor)));
  }

  const isInCart = cart.some((item) => item.title === product.title && item.color === selectedColor);

  return (
    <Card style={{ width: '18rem' }} className="ProductCard d-flex flex-column">
      <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{product.title} - £{product.price}</Card.Title>
        <Card.Text>{product.desc}</Card.Text>

        <Dropdown className="mt-2">
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-color">
            {selectedColor ? `Color: ${selectedColor}` : "Select Color"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {colorOptions().map((color) => (
              <Dropdown.Item key={color} onClick={() => setSelectedColor(color)}>
                {color}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <div className="mt-auto btns d-flex justify-content-center gap-2">
          <Button
            variant="danger"
            className="btnPrice"
            onClick={handleRemoveFromCart}
            disabled={!selectedColor || !isInCart}
          >
            Remove
          </Button>

          <Button
            variant="primary"
            className="btnCart"
            onClick={handleAddToCart}
            disabled={!selectedColor}
          >
            Buy {/* Changed text to "Buy" */}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}