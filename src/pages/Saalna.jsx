import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faYoutube,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcAmazonPay
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';

const Saalna = ({ images }) => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Function to update cart count from localStorage
  const updateCartCount = () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    } catch (error) {
      console.error('Error reading cart items:', error);
      localStorage.removeItem('cartItems');
      setCartCount(0);
    }
  };

  // Initialize cart count and set up storage listener
  useEffect(() => {
    updateCartCount();

    const handleStorageChange = (e) => {
      if (e.key === 'cartItems') {
        updateCartCount();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Add item to cart function
  const addToCart = (name, price) => {
    try {
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existingItem = cartItems.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      updateCartCount();
      alert(`"${name}" added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  // Handle checkout click with login check
  const handleCheckoutClick = (e) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      e.preventDefault();
      localStorage.setItem('redirectAfterLogin', '/checkout');
      navigate('/login');
    }
  };

  // Menu items data
  const menuItems = [
    { name: 'Idli', price: 100, img: `${process.env.PUBLIC_URL}/images/Idli.jpg` },
    { name: 'Dosa', price: 100, img: `${process.env.PUBLIC_URL}/images/dosa.jpeg` },
    { name: 'Poori', price: 100, img: images.poori },
    { name: 'Pongal', price: 100, img: images.pongal },
    { name: 'Vada', price: 100, img: images.vada },
    { name: 'Veg Biryani', price: 100, img: images.veg },
    { name: 'Parotta', price: 100, img: images.pa },
    { name: 'Chapati', price: 10, img: images.chap },
    { name: 'Veg Fried Rice', price: 150, img: images.vegRice },
  ];

  return (
    <div className="saalna-container">
      <video className="video-background" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/videos/videoplayback.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className="saalna-header">
        <img src={images.logo} alt="Saalna Logo" className="logo" />
        <h1>Saalna</h1>
        <div className="menu-buttons">
          <Link to="/login"><button className="nav-button">Login</button></Link>
          <Link to="/home"><button className="nav-button">Home</button></Link>
          <Link to="/contact"><button className="nav-button">Contact</button></Link>
          <Link 
            to="/checkout" 
            className="cart-link"
            onClick={handleCheckoutClick}
          >
            <img src={images.cart} alt="Cart" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div> 
      </header>

      <section className="scrolling-text">
        <div className="scrolling-container">YOUR ORDER HERE!!!</div>
      </section>

      <section className="special-item">
        <h2>OUR SPECIAL ITEM TO SERVE YOU...!!</h2>
        <img src={images.biryani} alt="Biryani Special" className="special-item-img" />
        <h2>HAVE IT....!! TASTE IT....!!</h2>
        <h3>Biryani</h3>
        <p>$100</p>
        <button className="add-to-cart-btn" onClick={() => addToCart('Biryani', 100)}>
          Add to Cart
        </button>
      </section>

      <section className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.name} className="item-img" />
            <h3>{item.name}</h3>
            <p className="item-price">${item.price}</p>
            <button 
              className="add-to-cart-btn" 
              onClick={() => addToCart(item.name, item.price)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <section className="about-section">
        <h2>ABOUT SAALNA</h2>
        <p>
          Welcome to Saalna, where taste meets convenience! Founded with a passion for
          bringing high-quality, delicious meals directly to your doorstep, we are dedicated
          to making your life easier, tastier, and healthier. Our chefs use only the freshest
          ingredients to create authentic flavors that will transport you to food heaven.
        </p>
      </section>

      <footer className="saalna-footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img 
              src={`${process.env.PUBLIC_URL}/images/logo-removebg-preview.png`} 
              alt="Saalna Logo" 
              className="footer-logo" 
            />
            <h3>Saalna Food Delivery</h3>
            <p className="footer-tagline">Delivering happiness to your doorstep</p>
            
            <div className="social-icons">
              <a href="https://facebook.com/saalna" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com/s_a_a_l_n_a_1" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com/saalna" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://youtube.com/saalna" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/menu">Our Menu</Link></li>
                <li><Link to="/offers">Special Offers</Link></li>
                <li><Link to="/track-order">Track Order</Link></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/locations">Our Locations</Link></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/return">Return Policy</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Food Street, Chennai</li>
                <li><FontAwesomeIcon icon={faPhone} /> 044-885865942</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> saalna@gmail.com</li>
                <li><FontAwesomeIcon icon={faClock} /> Open 10AM - 10PM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Saalna Food Delivery. All rights reserved.</p>
          <div className="payment-methods">
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faCcPaypal} />
            <FontAwesomeIcon icon={faCcAmazonPay} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Saalna;