import { useSelector, useDispatch } from 'react-redux'; // Imports hooks to access the Redux store and dispatch actions.
import { removeItem } from '../store/cartSlice'; // Imports the action creator to remove items from the cart.
import { TotalPrice } from '../components/TotalPrice'; 
import './Cart.css'; 
import { Link } from 'react-router-dom'; // Imports the Link component for navigation without page reloads.
import { useEffect, useRef } from 'react'; // Imports hooks for managing side effects and creating mutable references.

export function Cart() {
  // Accesses the 'items' array from the 'cart' of central data store (Redux).
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();// Provides a function to dispatch actions to the Redux store.
  const renderCount = useRef(0);// Creates a reference to track the number of times this component renders.

  // Increments the render count on each render and logs the current count along with the cart items.
  renderCount.current = renderCount.current + 1;
  console.log(`Cart component rendered ${renderCount.current} times. cartItems:`, cartItems);

  // Function to "Remove" button for a cart item.
  function handleClick(item) {
    dispatch(removeItem(item)); // Dispatches the 'removeItem' action to remove the clicked item from the cart in the Redux store.
  }

  // useEffect hook runs after every render and specifically when the 'cartItems' array changes.
  useEffect(() => {
    console.log("Cart Items in Cart.jsx (useEffect):", cartItems); // Logs the 'cartItems' whenever it is updated. debugging check.
  }, [cartItems]); // The effect depends on 'cartItems', so it will re-run whenever this array changes.

  return (
    <>
      {/* Maps through the 'cartItems' array and renders a div for each item in the cart. */}
      {cartItems.map((item) => (
        <div className="ProductCard" key={`${item.title}-${item.color}`}> {/* Uses a combination of title and color as a unique key for each cart item. */}
          <div className="priceBox-cart">£{item.price}</div>
          <div className="cart-item-details">
            <div className="ImageTitleRemove">
              <img src={item.image} alt={item.title} className="product-image" />
              <h2>{item.title}</h2>
              {item.color && <p className="cart-item-info">Color: {item.color}</p>} {/* Conditionally renders the color if it exists. */}
              <p className="cart-item-info">Quantity: {item.quantity || 1}</p> {/* Displays the quantity of the item (defaults to 1 if not present). */}
              <button onClick={() => handleClick(item)}>Remove</button> {/* Button to trigger the removal of this specific item from the cart. */}
            </div>
            <div className="desc_price">
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}

      <TotalPrice /> 
      <Link to="/checkout">
        <button className="checkout-button">Proceed to Checkout</button>
      </Link>
    </>
  );
}