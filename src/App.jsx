import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Saalna from './pages/Saalna';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Return from './pages/Return';
import AddToCart from './pages/Addtocart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './App.css';

const App = () => {
 
  const images = {
    b3: `${process.env.PUBLIC_URL}/images/b3.webp`,
    b5: `${process.env.PUBLIC_URL}/images/b5.jpg`,
    back: `${process.env.PUBLIC_URL}/images/back.jpg`,
    biryani: `${process.env.PUBLIC_URL}/images/briyani.jpg`,
    cart: `${process.env.PUBLIC_URL}/images/cart.jpg`,
    chap: `${process.env.PUBLIC_URL}/images/chap.jpg`,
    logo: `${process.env.PUBLIC_URL}/images/logo-removebg-preview.png`,
    pa: `${process.env.PUBLIC_URL}/images/pa.jpeg`,
    pongal: `${process.env.PUBLIC_URL}/images/pongal.webp`,
    poori: `${process.env.PUBLIC_URL}/images/poori.jpeg`,
    vada: `${process.env.PUBLIC_URL}/images/vada.webp`,
    vegRice: `${process.env.PUBLIC_URL}/images/veg rice.jpg`,
    veg: `${process.env.PUBLIC_URL}/images/veg.jpg`,
  
    default: `${process.env.PUBLIC_URL}/images/default-food-image.jpg`
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Saalna images={images} />} />
        <Route path="/login" element={<Login images={images} />} />
        <Route path="/signup" element={<Signup images={images} />} />
        <Route path="/saalna" element={<Saalna images={images} />} />
        <Route path="/about" element={<About images={images} />} />
        <Route path="/contact" element={<Contact images={images} />} />
        <Route path="/faq" element={<FAQ images={images} />} />
        <Route path="/terms" element={<Terms images={images} />} />
        <Route path="/privacy" element={<Privacy images={images} />} />
        <Route path="/return" element={<Return images={images} />} />
        <Route path="/home" element={<Saalna images={images} />} />
        <Route path="/add-to-cart" element={<AddToCart images={images} />} />
        <Route 
          path="/checkout" 
          element={<Checkout />} 
        />
        <Route 
          path="/order-tracking" 
          element={<OrderTracking />} 
        />
        
        <Route path="*" element={<Saalna images={images} />} />
      </Routes>
    </Router>
  );
};

export default App;