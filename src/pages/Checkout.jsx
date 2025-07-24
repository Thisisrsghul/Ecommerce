import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'credit'
  });
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart and check authentication
  useEffect(() => {
    const loadCartAndCheckAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      
      if (!loggedIn) {
        // Save current cart before redirecting to login
        const pendingCart = location.state || { cartItems: [], total: 0 };
        localStorage.setItem('pendingCart', JSON.stringify(pendingCart));
        localStorage.setItem('redirectAfterLogin', '/checkout');
        navigate('/login');
        return;
      }

      // Load cart from location state or localStorage
      const items = location.state?.cartItems || 
                   JSON.parse(localStorage.getItem('cartItems')) || 
                   [];
      
      setCartItems(items);
      calculateTotal(items);
      setIsLoading(false);
    };

    loadCartAndCheckAuth();
  }, [location.state, navigate]);

  const calculateTotal = (items) => {
    const calculatedTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(calculatedTotal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Remove item from cart
  const removeItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    
    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  // Update item quantity
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    
    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Double-check authentication
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert('Please login to place your order');
      localStorage.setItem('redirectAfterLogin', '/checkout');
      navigate('/login');
      return;
    }

    // Proceed with order placement
    const orderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
    
    const orderData = {
      orderId,
      items: cartItems,
      total,
      customerInfo: formData,
      status: 'Processing',
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()
    };

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem('cartItems');
    setCartItems([]);
    setTotal(0);

    navigate('/order-tracking', { state: { orderId } });
  };

  if (isLoading) {
    return (
      <div className="checkout-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      <div className="checkout-grid">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={`${item.name}-${index}`} className="cart-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)} × {item.quantity}</span>
                </div>
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="order-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Customer Information</h2>
          
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  checked={formData.payment === 'credit'}
                  onChange={handleChange}
                />
                Credit Card
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={formData.payment === 'paypal'}
                  onChange={handleChange}
                />
                PayPal
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={formData.payment === 'cash'}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          
          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;