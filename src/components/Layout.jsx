import { Navbar } from "./Navbar"; 
import { Header } from "./Header"; 
import { Outlet, useLocation } from "react-router-dom"; // Imports tools from React Router for managing nested routes. 'Outlet' is where child route components are rendered. 'useLocation' gives access to the current URL.
import { useSelector } from 'react-redux'; // Imports a hook to access the Redux store for global state.

export function Layout() { 
    const location = useLocation(); // Gets the current URL path.
    const isHomePage = location.pathname === "/"; // Checks if the current page is the home page ("/") and stores the result in a boolean.
    const { isLoggedIn, firstName, lastName } = useSelector((state) => state.auth); // Gets the login status, first name, and last name from the app's central data store (Redux).
    const cartItems = useSelector((state) => state.cart.items); // Gets the cart items array from the app's central data store (Redux).

    return (
        <>
            <Navbar />
            {/* Conditionally renders the Header component. It's shown if the user is logged in AND the current page is NOT the home page. */}
            {isLoggedIn && !isHomePage && <Header cart={cartItems} firstName={firstName} lastName={lastName} />}
            <main>
                <Outlet /> {/* This is where the content of the specific route (e.g., Home, Products, Cart) will be rendered. */}
            </main>
        </>
    );
}

