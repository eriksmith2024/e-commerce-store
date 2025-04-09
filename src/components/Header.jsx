import React from "react"; 
import "./Header.css"; 
import { useSelector } from 'react-redux'; // Imports a hook from 'react-redux' to access the Redux store.

export function Header() {
    // Gets the 'items' array from the 'cart' section of our central data store (Redux).
    const cartItems = useSelector((state) => state.cart.items);  

    // Calculates the total number of items in the cart by summing up the 'quantity' of each item (defaulting to 1 if no quantity is set).
    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0); 

    // Calculates the total price of all items in the cart by multiplying each item's price by its quantity and adding it to the sum.
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

    // Gets the login status, first name, and last name from the 'auth' section of the central data store (Redux).
    const { isLoggedIn, firstName, lastName } = useSelector((state) => state.auth);

    return ( 
        <header className="header">
              {/* The insertion of of headers into the header i.e. h1 gym name h2 welcome message*/}
            <h1 className="header-title">EJS Gym Solutions</h1>
            <div className="header-welcome">
                {/* If the user is logged in, display a personalized welcome message. */}
                {isLoggedIn ? (
                    <h2>Welcome, {firstName} {lastName}!</h2>
                ) : (
                    // If the user is not logged in, display a generic welcome message.
                    <h2>Welcome!</h2>
                )}
            </div>
          
            <div className="header-cart">
                 <h2>🛒 {totalItems} Items - £{totalPrice}</h2>
            </div>
        </header>
    );
}