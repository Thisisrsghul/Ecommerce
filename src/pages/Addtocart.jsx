import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Addtocart.css';

const AddToCart = ({ images }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const navigate = useNavigate();

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const loadCartItems = () => {
      try {
        const savedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedItems);
      } catch (error) {
        console.error('Error loading cart items:', error);
        localStorage.removeItem('cartItems');
        setCartItems([]);
      }
    };

    loadCartItems();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadCartItems();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    updateCart(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    updateCart(updatedItems);
  };

  const updateCart = (items) => {
    try {
      setCartItems(items);
      localStorage.setItem('cartItems', JSON.stringify(items));
      
      // Dispatch storage event to sync across tabs
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    ).toFixed(2);
  };

  const getImage = (itemName) => {
    try {
      const imageKey = itemName.toLowerCase().replace(/\s+/g, '');
      return images?.[imageKey] || images?.biryani || '/default-food-image.jpg';
    } catch {
      return '/default-food-image.jpg';
    }
  };

  const handleProceedToCheckout = (e) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      e.preventDefault();
      localStorage.setItem('redirectAfterLogin', '/checkout');
      localStorage.setItem('pendingCart', JSON.stringify({
        items: cartItems,
        total: getTotal()
      }));
      alert('Please login to proceed to checkout. You will be redirected to the login page.');
      navigate('/login');
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={`${item.name}-${index}`}>
                <img 
                  src={getImage(item.name)} 
                  alt={item.name} 
                  className="item-image"
                  onError={(e) => {
                    e.target.src = '/default-food-image.jpg';
                  }}
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      disabled={item.quantity >= 99}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items):</span>
              <span>${getTotal()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${getTotal()}</span>
            </div>
            
            <Link 
              to="/checkout" 
              className="checkout-btn"
              state={{ cartItems, total: getTotal() }}
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </Link>
            
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;