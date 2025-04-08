// Header.jsx
import React from "react";
import "./Header.css";
import { useSelector } from 'react-redux';

export function Header({ cart }) {
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const { isLoggedIn, firstName, lastName } = useSelector((state) => state.auth);

    return (
        <header className="header">
            <h1>EJS Gym Solutions</h1>
            <div>
                {isLoggedIn ? (
                    <h2>Welcome, {firstName} {lastName}! 🛒 {totalItems} Items - £{totalPrice}</h2>
                ) : (
                    <h2>🛒 {totalItems} Items - £{totalPrice}</h2>
                )}
            </div>
        </header>
    );
}