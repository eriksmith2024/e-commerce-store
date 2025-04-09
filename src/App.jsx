// App.jsx
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
import { useSelector } from 'react-redux'; // Import useSelector

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/Login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> {/* Removed cart and setCart props */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} /> {/* Removed cart and setCart props */}
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Cart"
            element={
              <ProtectedRoute>
                <Cart /> {/* Removed cart and setCart props */}
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;