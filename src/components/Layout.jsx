// Layout.jsx
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

export function Layout() { // Removed { cart } prop
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const { isLoggedIn, firstName, lastName } = useSelector((state) => state.auth);
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux

    return (
        <>
            <Navbar />
            {isLoggedIn && !isHomePage && <Header cart={cartItems} firstName={firstName} lastName={lastName} />}
            <main>
                <Outlet />
            </main>
        </>
    );
}

// removed cart prop from here to store