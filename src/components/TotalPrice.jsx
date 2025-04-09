import { useSelector } from "react-redux"; // Imports the useSelector hook to access the Redux store.
import { useEffect, useState } from "react"; // Imports the useEffect and useState hooks from React for managing side effects and local state.

export function TotalPrice() {

  const cart = useSelector((state) => state.cart.items);  // Accesses the 'items' array from the 'cart' section of the app's central data store (Redux).
  // Initializes a local state variable holding total price of items in the cart.
  const [totalPrice, setTotalPrice] = useState(0);
  // Initializes a local state variable holding  total number of items in the cart.
  const [totalItems, setTotalItems] = useState(0);

  // useEffect hook runs after every render and when the 'cart' array changes.
  useEffect(() => {
    const quantities = {}; // Creates an empty object to store the quantity of each unique item (based on title and color).
    cart.forEach(item => {
      const key = `${item.title}-${item.color}`; // Creates a unique key for each item based on its title and color.
      quantities[key] = (quantities[key] || 0) + 1; // Increments the quantity for the corresponding item key. If the key doesn't exist, it's initialized to 1.
    });

    // Calculates the total number of individual items in the cart by summing up all the quantities in the 'quantities' object.
    setTotalItems(Object.values(quantities).reduce((acc, qty) => acc + qty, 0));
    // Calculates the total price of all items in the cart by summing the price of each item in the 'cart' array.
    setTotalPrice(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]); // The effect runs whenever the 'cart' array in the Redux store changes.

  return (
    // A container for displaying the total price and checkout button.
    <div className="cart-footer" style={{ marginTop: '100px'}}>
      <div className="total-price">Total Items: {totalItems}</div>
      <div className="total-price" style={{ marginLeft: '20px' }}>
        Total Price: £{totalPrice}
      </div>
      <button>CHECKOUT</button>
    </div>
  );
}