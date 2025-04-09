import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Imports hooks to access the Redux store and dispatch actions.
import { setShipmentMethod } from '../store/shipmentSlice'; // Imports the action creator to set the selected shipment method in Redux.
import { useNavigate } from 'react-router-dom'; // Imports the useNavigate hook for programmatic navigation between routes.
import './Checkout.css'; 

// Defines the Checkout component, allowing users to review their cart and select a shipping method.
export function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);  // Accesses array 'items'from the 'cart' section of data store(Redux).
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0); // Calculates the total number of items in the cart.
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);  // Calculates the total price of all items in the cart.
  const [selectedShipping, setSelectedShipping] = useState(null);  // Manages the locally selected shipping method, initialized to null.
  const dispatch = useDispatch(); // Provides a function to dispatch actions to the Redux store.
  const navigate = useNavigate(); // Provides a function to navigate to different routes in the app.
  const [showHelp, setShowHelp] = useState(false);  // Manages the visibility of the shipping help modal, initialized to false (hidden).

  // Defines an array of available shipping options with their values, labels, and prices.
  const shippingOptions = [
    { value: 'standard', label: 'Standard Shipping (3-5 days)', price: 5 },
    { value: 'express', label: 'Express Shipping (1-2 days)', price: 10 },
    { value: 'free', label: 'Free Shipping (7-10 days) - Orders over £50', price: 0 },
  ];

  // Handles the change event when a shipping method radio button is selected.
  const handleShippingChange = (event) => {
    const method = event.target.value; // Gets the value of the selected shipping method.
    setSelectedShipping(method); // Updates the local state with the selected method.
    dispatch(setShipmentMethod(method)); // Dispatches an action to update the selected shipping method in the Redux store.
  };

  // Creates the click event for 'showHelp' modal at checkout.
  const handleHelpClick = () => {
    setShowHelp(!showHelp); 
  };

  // Handles the click event on the "Proceed to Payment" button.
  const handleProceedToPayment = () => {
    if (selectedShipping) {
      navigate('/payment'); 
    } else {
      alert('Please select a shipping method.'); 
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Displays a summary of the items in the cart. */}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {totalItems}</p>
        <p>Subtotal: £{totalPrice.toFixed(2)}</p>
        {/* Conditionally displays the selected shipping cost. */}
        {selectedShipping && (
          <p>
            Shipping ({
              shippingOptions.find((option) => option.value === selectedShipping)?.label.split('(')[0]
            }): £{shippingOptions.find((option) => option.value === selectedShipping)?.price?.toFixed(2)}
          </p>
        )}
        {/* Displays the estimated total cost, including shipping if selected. */}
        <p className="total">
          Total (Estimated): £{(totalPrice + (shippingOptions.find((option) => option.value === selectedShipping)?.price || 0)).toFixed(2)}
        </p>
      </div>

      {/* Allows the user to select a shipping option. */}
      <div className="shipping-options">
        <h3>Shipping Options</h3>
        {shippingOptions.map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="radio"
                value={option.value}
                name="shippingMethod"
                checked={selectedShipping === option.value}
                onChange={handleShippingChange}
                disabled={option.value === 'free' && totalPrice < 50} // Disables free shipping if the order total is under £50.
              />
              {option.label} - £{option.price.toFixed(2)}
              {/* Displays a note about the free shipping condition. */}
              {option.value === 'free' && totalPrice < 50 && (
                <span className="disabled-note"> (Free on orders over £50)</span>
              )}
            </label>
          </div>
        ))}
      </div>

      {/* Button to show the shipping information modal. */}
      <button className="help-button" onClick={handleHelpClick}>
        Help with Shipping
      </button>

      {/* Conditionally renders the shipping help modal. */}
      {showHelp && (
        <div className="shipping-help-modal">
          <h3>Shipping Information</h3>
          <ul>
            <li>
              <strong>Standard Shipping (3-5 days):</strong> Our most economical option, delivering within 3 to 5 business days.
            </li>
            <li>
              <strong>Express Shipping (1-2 days):</strong> For faster delivery, choose express shipping to receive your order within 1 to 2 business days.
            </li>
            <li>
              <strong>Free Shipping (7-10 days):</strong> Enjoy free shipping on all orders over £50. Please allow 7 to 10 business days for delivery.
            </li>
          </ul>
          <button onClick={() => setShowHelp(false)}>Close</button>
        </div>
      )}

    
      <button
        className="proceed-button"
        onClick={handleProceedToPayment}
        disabled={!selectedShipping}
      >
        Proceed to Payment
      </button>
    </div>
  );
}