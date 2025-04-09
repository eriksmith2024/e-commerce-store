import "./Home.css";
import { Link } from "react-router-dom";
import BarbellImage from "../../public/Barbell.jpg";
import { Contact } from "../components/Contact"; // Corrected import path

// Defines the Home page component, now including the contact form.
export function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to our gym solutions store</h1>

            <img src={BarbellImage} alt="Barbell" className="barbell-image" />

            <div className="products-link">
                <Link to="/Products">
                    <button>View All Products</button>
                </Link>
            </div>

            {/* Render the Contact component here. Changed contact from page to component */}
            <div className="contact-section">
                <Contact />
            </div>
        </div>
    );
}