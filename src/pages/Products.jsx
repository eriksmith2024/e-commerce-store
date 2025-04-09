import React from 'react';
import { ProductCard } from "../components/ProductCard";
import "./Products.css";

// Create the list of products in an array
export function Products() {
  const products = [
    { title: "Protein Powder", desc: "Whey protein powder used to build muscle", price: 40, image: "/whey_protein.jpg" },
    { title: "Creatine", desc: "Creatine monohydrate used to supplement your athleticism", price: 25, image: "/creatine.jpg" },
    { title: "MassGainer", desc: "Dense carb-loaded powder for packing on weight", price: 50, image: "/massgainer.jpg" },
    { title: "Large Bar Bell", desc: "Large Dumbell Bar for full body exercises squats presses etc", price: 100, image: "/smart_barbell.png" },
    { title: "Hand Bar Bell", desc: "Handweights with small unit weight adjustments for incremental gains", price: 55, image: "/smart_handweight.png" },
    { title: "Pull Up Frame", desc: "Frame for body weight exercises i.e. dips or chin-ups", price: 250, image: "/pull_up_frame.jpg" },
    { title: "One KG Weights", desc: "Four Barbell plates of 1kg - 5kg", price: 20, image: "/low_weights_adjuster.png" },
    { title: "5-10KG Weights", desc: "Two Adjustable plates of 5kg to 10kg", price: 20, image: "/smart_weights.png" },
    { title: "10-15KG Weights", desc: "Two Adjustable plates of 10kg to 15kg", price: 20, image: "/smart_weights.png" },
    { title: "15-20KG Weights", desc: "Two Adjustable plates of 15kg to 20kg", price: 20, image: "/smart_weights.png" }
  ];


  return (
    <div className="products-container"> {/* Added this wrapper div to style */}
      <div className="products-grid">
        {products.map((product) => ( // Maps through 'products' array & displays a ProductCard for each product.
          <ProductCard key={product.title} product={product}  /> // 'key' prop is essential to update list of product components.
        ))}
      </div>
    </div>
  );
}

// https://formik.org/docs/overview Accessed 20th March 2025 for base structure of code
// https://formik.org/docs/overview Accessed 20th March 2025 for base structure of code
// https://codesandbox.io/p/sandbox/zKrK5YLDZ Accessed 20th March 2025
// Hyperion Dev React - Form Validation Accessed 20th March 2025