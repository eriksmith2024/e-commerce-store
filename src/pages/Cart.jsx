// Cart.jsx (Modified)
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';
import { TotalPrice } from '../components/TotalPrice';
import './Cart.css';

export function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleClick(item) {
    dispatch(removeItem(item));
  }

  console.log("Cart Items in Cart.jsx:", cartItems);

  return (
    <>
      {cartItems.map((item, index) => (
        <div className="ProductCard" key={`${item.title}-${item.color}-${index}`}> {/* Unique key */}
          <div className="priceBox-cart">£{item.price}</div>
          <div className="cart-item-details">
            <div className="ImageTitleRemove">
              <img src={item.image} alt={item.title} className="product-image" />
              <h2>{item.title}</h2>
              {item.color && <p className="cart-item-info">Color: {item.color}</p>}
              <p className="cart-item-info">Quantity: {item.quantity}</p>
              <button onClick={() => handleClick(item)}>Remove</button>
            </div>
            <div className="desc_price">
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}

      <TotalPrice /> {/* Removed passing cartItems as it's already in useSelector */}
    </>
  );
}