// Layout.jsx
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

export function Layout({ cart }) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const { isLoggedIn, firstName, lastName } = useSelector((state) => state.auth);

    return (
        <>
            <Navbar />
            {isLoggedIn && !isHomePage && <Header cart={cart} firstName={firstName} lastName={lastName} />}
            <main>
                <Outlet />
            </main>
        </>
    );
}