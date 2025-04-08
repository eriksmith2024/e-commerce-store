import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar () {
    return (
        <div className="navbar">
            <Link to="/"><button className="navbutton">Home</button></Link>
            <Link to="/Registration"><button className="navbutton">Registration</button></Link>
            <Link to="/Login"><button className="navbutton">Login</button></Link>
            <Link to="/Products"><button className="navbutton">Products</button></Link>
            <Link to="/About"><button className="navbutton">About </button></Link>
            <Link to="/Contact"><button className="navbutton">Contact </button></Link>
            <Link to="/Cart"><button className="navbutton">Cart</button></Link>
        </div>
    )
}