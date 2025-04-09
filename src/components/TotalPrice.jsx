import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function TotalPrice() {
  const cart = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const quantities = {};
    cart.forEach(item => {
      const key = `${item.title}-${item.color}`;
      quantities[key] = (quantities[key] || 0) + 1;
    });

    setTotalItems(Object.values(quantities).reduce((acc, qty) => acc + qty, 0));
    setTotalPrice(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  return (
    <div className="cart-footer">
      <div className="total-price">Total Items: {totalItems}</div>
      <div className="total-price" style={{ marginLeft: '20px' }}>
        Total Price: £{totalPrice}
      </div>
      <button>CHECKOUT</button>
    </div>
  );
}