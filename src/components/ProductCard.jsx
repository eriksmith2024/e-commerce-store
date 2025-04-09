// ProductCard.jsx
import React, { useState } from "react";
import { Card, Button, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/cartSlice';
import "./ProductCard.css";

export function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const colorOptions = () => {
    if (["Protein Powder", "Creatine", "MassGainer"].includes(product.title)) {
      return ["Strawberry", "Vanilla", "Chocolate"];
    } else {
      return ["Silver", "Black", "Gold"];
    }
  };

  function handleAddToCart() {
    if (selectedColor) {
      const itemWithColor = { ...product, color: selectedColor };
      console.log("Item dispatched to cart:", itemWithColor); // <--- ADD THIS LINE
      dispatch(addItem(itemWithColor));
    } else {
      alert("Please select a color before adding to cart.");
    }
  }

  function handleRemoveFromCart() {
    if (selectedColor) {
      const itemToRemove = { ...product, color: selectedColor };
      dispatch(removeItem(itemToRemove));
    } else {
      alert("Please select a color to remove from cart.");
    }
  }

  const isInCart = cartItems.some((item) => item.title === product.title && item.color === selectedColor);

  return (
    <Card style={{ width: '18rem' }} className="ProductCard d-flex flex-column">
      <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{product.title} - £{product.price}</Card.Title>
        <Card.Text>{product.desc}</Card.Text>

        <Dropdown className="mt-2">
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-color"
            className="product-card-dropdown-toggle" // Added this class
          >
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
            Buy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}