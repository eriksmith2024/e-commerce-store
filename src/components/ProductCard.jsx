import React, { useState } from "react"; // Imports React and the useState hook for managing local component state.
import { Card, Button, Dropdown } from 'react-bootstrap'; // Imports specific UI components (Card, Button, Dropdown) from the React Bootstrap
import { useDispatch, useSelector } from 'react-redux'; // Imports hooks from 'react-redux' to interact with the Redux store.
import { addItem, removeItem } from '../store/cartSlice'; // Imports action creators from the 'cartSlice' to add and remove items from the cart in the Redux store.
import "./ProductCard.css"; // Imports the styling rules specific to this ProductCard component.

// Defines a functional component called ProductCard, which takes a 'product' object as a prop.
export function ProductCard({ product }) {
  // Manages the currently selected color for the product, initialized as an empty string.
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();  // Provides a function to dispatch actions to the Redux store.
  // Accesses the 'items' array from the 'cart' section of the app's central data store (Redux).
  const cartItems = useSelector((state) => state.cart.items);

  // Determines the available color options for the product based on its title.
  const colorOptions = () => {
    if (["Protein Powder", "Creatine", "MassGainer"].includes(product.title)) {
      return ["Strawberry", "Vanilla", "Chocolate"]; // If the product is a supplement, offer flavor options.
    } else {
      return ["Silver", "Black", "Gold"]; // Otherwise, offer standard color options.
    }
  };

  // Function to handle adding the product to the cart.
  function handleAddToCart() {
    if (selectedColor) {
      const itemWithColor = { ...product, color: selectedColor }; // Creates a new item object including the selected color.
      console.log("Item dispatched to cart:", itemWithColor); // <--- ADD THIS LINE (Logs the item being dispatched for debugging).
      dispatch(addItem(itemWithColor)); // Dispatches the 'addItem' action to the Redux store with the product and selected color.
    } else {
      alert("Please select a color before adding to cart."); 
    }
  }

  // Function to handle removing the product from the cart.
  function handleRemoveFromCart() {
    if (selectedColor) {
      const itemToRemove = { ...product, color: selectedColor }; // Creates an item object with the selected color to identify it in the cart.
      dispatch(removeItem(itemToRemove)); // Dispatches the 'removeItem' action to the Redux store with the product and selected color.
    } else {
      alert("Please select a color to remove from cart."); // Alerts the user if they try to remove without selecting a color.
    }
  }

  // Checks if the current product with the selected color is already present in the cart.
  const isInCart = cartItems.some((item) => item.title === product.title && item.color === selectedColor);

  return (
    // A Bootstrap Card component to display the product information.
    <Card style={{ width: '18rem' }} className="ProductCard d-flex flex-column">
      <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{product.title} - £{product.price}</Card.Title>
        <Card.Text>{product.desc}</Card.Text>

        {/* A Bootstrap Dropdown component to allow the user to select a color. */}
        <Dropdown className="mt-2">
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-color"
            className="product-card-dropdown-toggle" // Added this class for potential custom styling.
          >
            {selectedColor ? `Color: ${selectedColor}` : "Select Color"} {/* Displays the selected color or a default message. */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Maps through the available color options and creates a Dropdown.Item for each. */}
            {colorOptions().map((color) => (
              <Dropdown.Item key={color} onClick={() => setSelectedColor(color)}>
                {color}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {/* Container for the "Remove" and "Buy" buttons, positioned at the bottom of the card. */}
        <div className="mt-auto btns d-flex justify-content-center gap-2">
          {/* Button to remove the item from the cart, disabled if no color is selected or if the item isn't in the cart. */}
          <Button
            variant="danger"
            className="btnPrice"
            onClick={handleRemoveFromCart}
            disabled={!selectedColor || !isInCart}
          >
            Remove
          </Button>

          {/* Button to add the item to the cart, disabled if no color is selected. */}
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