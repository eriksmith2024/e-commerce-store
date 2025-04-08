import "./Home.css"; // Import the CSS file
import { Link } from "react-router-dom";
import BarbellImage from "../../public/Barbell.jpg";

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
        </div>
    );
}
