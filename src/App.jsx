// Import required dependencies i.e. styling and components for navigation and pages.
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Contact } from './components/Contact'; // Updated import path for Contact component
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { useSelector } from 'react-redux';

function App() {
   // Checks if the user is logged in by accessing the Redux store's 'auth' state.
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Protects routes, redirects to the Login page if the user is not logged in.
  const ProtectedRoute = ({ children }) => !isLoggedIn ? <Navigate to="/Login" replace /> : children;

  return (
    <Router>
      <Routes>
        {/* Applies the 'Layout' component to all routes within. */}
        <Route element={<Layout />}>
          {/* Defines website pages: the 'path' is the URL, and the 'element' is the component to display. */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          {/* Commented out this line as Contact is now part of the Home page */}
          {/* <Route path="/Contact" element={<Contact />} /> */}
          {/* 'Cart' and 'checkout' pages are protected and can only be accessed by logged-in users. */}
          <Route path="/Cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;