// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShipmentMethod } from '../store/shipmentSlice';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // Create this CSS file

export function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);

  const shippingOptions = [
    { value: 'standard', label: 'Standard Shipping (3-5 days)', price: 5 },
    { value: 'express', label: 'Express Shipping (1-2 days)', price: 10 },
    { value: 'free', label: 'Free Shipping (7-10 days) - Orders over £50', price: 0 },
  ];

  const handleShippingChange = (event) => {
    const method = event.target.value;
    setSelectedShipping(method);
    dispatch(setShipmentMethod(method));
  };

  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };

  const handleProceedToPayment = () => {
    if (selectedShipping) {
      navigate('/payment'); // You'll create this page later
    } else {
      alert('Please select a shipping method.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {totalItems}</p>
        <p>Subtotal: £{totalPrice.toFixed(2)}</p>
        {selectedShipping && (
          <p>
            Shipping ({
              shippingOptions.find((option) => option.value === selectedShipping)?.label.split('(')[0]
            }): £{shippingOptions.find((option) => option.value === selectedShipping)?.price.toFixed(2)}
          </p>
        )}
        <p className="total">
          Total (Estimated): £{(totalPrice + (shippingOptions.find((option) => option.value === selectedShipping)?.price || 0)).toFixed(2)}
        </p>
      </div>

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
                disabled={option.value === 'free' && totalPrice < 50}
              />
              {option.label} - £{option.price.toFixed(2)}
              {option.value === 'free' && totalPrice < 50 && (
                <span className="disabled-note"> (Free on orders over £50)</span>
              )}
            </label>
          </div>
        ))}
      </div>

      <button className="help-button" onClick={handleHelpClick}>
        Help with Shipping
      </button>

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