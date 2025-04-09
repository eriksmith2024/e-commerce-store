// Cart.jsx
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';
import { TotalPrice } from '../components/TotalPrice';
import './Cart.css';

export function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemQuantities = {};
  cartItems.forEach(item => {
    const key = `${item.title}-${item.color}`;
    itemQuantities[key] = (itemQuantities[key] || 0) + 1;
  });

  function handleClick(item) {
    dispatch(removeItem(item));
  }

  return (
    <>
      {Object.entries(itemQuantities).map(([key, quantity]) => {
        const [title, color] = key.split('-');
        const item = cartItems.find(cartItem => cartItem.title === title && cartItem.color === color);
        if (!item) return null;

        return (
          <div className="ProductCard" key={key}>
            <div className="priceBox-cart">£{item.price}</div>
            <div className="cart-item-details">
              <div className="ImageTitleRemove">
                <img src={item.image} alt={item.title} className="product-image" />
                <h2>{item.title}</h2>
                {item.color && <p className="cart-item-info">Color: {item.color}</p>}
                <p className="cart-item-info">Quantity: {quantity}</p>
                <button onClick={() => handleClick(item)}>Remove</button>
              </div>
              <div className="desc_price">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}

      <TotalPrice cart={cartItems} />
    </>
  );
}