import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector

function App() {
  const [cart, setCart] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get isLoggedIn from Redux

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/Login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout cart={cart} setCart={setCart} />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} /> {/* Removed onLoginStatusChange */}
          <Route path="/Registration" element={<Registration />} /> {/* Removed onLoginStatusChange */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;