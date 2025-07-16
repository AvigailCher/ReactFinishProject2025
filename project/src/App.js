import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './componnets/Navbar';
import HomePage from './componnets/HomePage';
import ProductList from './componnets/ProductList';
import { Provider, useSelector } from 'react-redux';
import Cart from './componnets/Cart';
import store from './redux/store';
import Footer from './componnets/Footer';
import AboutPage from './componnets/AboutPage';
import CheckoutPage from './componnets/CheckoutPage';
import ThankYouPage from './componnets/ThankYouPage';
import ProductDetails from './componnets/ProductDetails';
import CartModel from './componnets/CartModel';
import 'bootstrap-icons/font/bootstrap-icons.css';
function AppWrapper() {
  const cartItems = useSelector((state) => state.cart.cart || []);
  const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* כפתור מצב כהה/בהיר */}
        <div style={{ textAlign: 'left', padding: '0.5rem' }}>
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'transparent', border: 'none' }}>
  {darkMode ? (
    <i className="bi bi-sun" style={{ fontSize: '1.5rem', color: '#FFD700' }}></i> // אייקון שמש למצב בהיר
  ) : (
    <i className="bi bi-moon" style={{ fontSize: '1.5rem', color: '#000' }}></i> // אייקון ירח למצב כהה
  )}
</button>

        </div>

        <CustomNavbar cartItemCount={cartItemCount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/CartModel" element={<CartModel />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

export default App;
