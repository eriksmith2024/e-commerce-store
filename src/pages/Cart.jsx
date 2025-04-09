// Cart.jsx (Amended - More Logging)
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';
import { TotalPrice } from '../components/TotalPrice';
import './Cart.css';
import { Link } from 'react-router-dom'; // Import Link
import { useEffect, useRef } from 'react'; // Import useRef

export function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;
  console.log(`Cart component rendered ${renderCount.current} times. cartItems:`, cartItems);

  function handleClick(item) {
    dispatch(removeItem(item));
  }

  useEffect(() => {
    console.log("Cart Items in Cart.jsx (useEffect):", cartItems);
  }, [cartItems]); // Log whenever cartItems changes

  return (
    <>
      {cartItems.map((item) => (
        <div className="ProductCard" key={`${item.title}-${item.color}`}>
          <div className="priceBox-cart">£{item.price}</div>
          <div className="cart-item-details">
            <div className="ImageTitleRemove">
              <img src={item.image} alt={item.title} className="product-image" />
              <h2>{item.title}</h2>
              {item.color && <p className="cart-item-info">Color: {item.color}</p>}
              <p className="cart-item-info">Quantity: {item.quantity || 1}</p>
              <button onClick={() => handleClick(item)}>Remove</button>
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