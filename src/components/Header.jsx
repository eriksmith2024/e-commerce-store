import React from "react";
import "./Header.css";
import { useSelector } from 'react-redux';

export function Header() {
    const cart = useSelector((state) => state.cart.items);
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
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
