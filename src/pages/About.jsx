import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import './About.css';

// Defines the About page component providing information about the gym store.
export function About() {
  return (
    <div className="about-container">
      <Figure>
        <Figure.Image
          className="logo-image"
          alt="Erik's Gym Store Logo"
          src="/EJS_logo.png"
        />
      </Figure>

      <h4>
        EJS gym solutions Modern fitness tools that enable fitness goals
      </h4>

      <p>
        At Erik's Gym Store, it is our goal to provide you with the tools and equipment to meet your fitness goals.
      </p>

      <p>
        We were founded in 2025 as basic things like wireless earpods enable a workout without getting tangled in wires.
      </p>

      <p>
        We expect the same form our weights and supplements - like adjustable handbar weights that allow to add small increases to stretch you rather than large jumps.
      </p>

      <p>
        Our mission is fitness tools that enable fitness goals.
      </p>

      <div className="store-images">
        <Figure>
          <Figure.Image
            className="store-image"
            alt="Store Image 1"
            src="/store_interior.png"
          />
          <Figure.Caption>
            Our store's interior.
          </Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            className="store-image"
            alt="Store Image 2"
            src="/store_exterior.png"
          />
          <Figure.Caption>
            Our store's exterior.
          </Figure.Caption>
        </Figure>
      </div>

      <p>
        Have questions? <Link to="/home">Contact us</Link> today.
      </p>
    </div>
  );
}