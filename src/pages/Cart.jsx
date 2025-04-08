import { useState, useEffect } from 'react';
import { TotalPrice } from '../components/TotalPrice';
import './Cart.css'; 

export function Cart({ cart, setCart }) {
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    const quantities = {};
    cart.forEach(item => {
      const key = `${item.title}-${item.color}`;
      quantities[key] = (quantities[key] || 0) + 1;
    });
    setItemQuantities(quantities);
  }, [cart]);

  function handleClick(item) {
    const key = `${item.title}-${item.color}`;
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(cartItem => cartItem.title === item.title && cartItem.color === item.color);
    if (index !== -1) {
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  }

  return (
    <>
      {Object.entries(itemQuantities).map(([key, quantity]) => {
        const [title, color] = key.split('-');
        const item = cart.find(cartItem => cartItem.title === title && cartItem.color === color);
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

      {/* Use the new TotalPrice component */}
      <TotalPrice cart={cart} />
    </>
  );
}

