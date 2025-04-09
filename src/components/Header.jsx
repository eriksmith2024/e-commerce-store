import React from "react";
import "./Header.css";
import { useSelector } from 'react-redux';

export function Header() {
    const cartItems = useSelector((state) => state.cart.items); // Rename for clarity
    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0); // Calculate total quantity
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const { isLoggedIn, firstName, lastName } = useSelector((state) => state.auth);

    return (
        <header className="header">
            <h1 className="header-title">EJS Gym Solutions</h1>
            <div className="header-welcome">
                {isLoggedIn ? (
                    <h2>Welcome, {firstName} {lastName}!</h2>
                ) : (
                    <h2>Welcome!</h2>
                )}
            </div>
            <div className="header-cart">
                 <h2>🛒 {totalItems} Items - £{totalPrice}</h2>
            </div>
        </header>
    );
}