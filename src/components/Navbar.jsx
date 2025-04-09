import { Link } from "react-router-dom" // Imports the Link component for navigation without page reloads.
import "./Navbar.css" // Imports the styling for the Navbar component.

// Defines the navigation bar component with links to different parts of the app.
export function Navbar () {
    return (
        <div className="navbar">
            <Link to="/Registration"><button className="navbutton">Registration</button></Link>
            <Link to="/Login"><button className="navbutton">Login</button></Link>
            <Link to="/"><button className="navbutton">Home</button></Link>
            <Link to="/About"><button className="navbutton">About </button></Link>
            <Link to="/Products"><button className="navbutton">Products</button></Link>
            <Link to="/Cart"><button className="navbutton">Cart</button></Link>
        </div>
    )
}