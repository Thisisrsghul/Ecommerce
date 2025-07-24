import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderTracking.css';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.orderId) {
      setOrderId(location.state.orderId);
      trackOrder(location.state.orderId);
    }
  }, [location.state]);

  const trackOrder = (id) => {
    if (!id.trim()) return;
    
    setLoading(true);
    setError('');
    
    
    setTimeout(() => {
      try {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const foundOrder = orders.find(order => order.orderId === id);
        
        if (foundOrder) {
         
          let statusProgress = 25;
          if (foundOrder.status === 'Processing') statusProgress = 50;
          if (foundOrder.status === 'Shipped') statusProgress = 75;
          if (foundOrder.status === 'Delivered') statusProgress = 100;
          
          setOrder({
            ...foundOrder,
            statusProgress
          });
        } else {
          setError('Order not found. Please check your order ID.');
        }
      } catch (err) {
        setError('Failed to fetch order details. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackOrder(orderId);
  };

  const getStatusColor = () => {
    if (!order) return '#95a5a6';
    switch(order.status.toLowerCase()) {
      case 'processing': return '#3498db';
      case 'shipped': return '#f39c12';
      case 'delivered': return '#2ecc71';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="order-tracking-container">
      <h1>Track Your Order</h1>
      
      <form onSubmit={handleSubmit} className="tracking-form">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your order ID"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Tracking...' : 'Track Order'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Fetching order details...</p>
        </div>
      )}

      {order && !loading && (
        <div className="order-details">
          <div className="order-header">
            <h2>Order #{order.orderId}</h2>
            <span className="order-status" style={{ color: getStatusColor() }}>
              {order.status}
            </span>
          </div>

          <div className="progress-tracker">
            <div 
              className="progress-bar" 
              style={{ width: `${order.statusProgress}%`, backgroundColor: getStatusColor() }}
            ></div>
            <div className="progress-steps">
              <span className={order.statusProgress >= 25 ? 'active' : ''}>Ordered</span>
              <span className={order.statusProgress >= 50 ? 'active' : ''}>Processed</span>
              <span className={order.statusProgress >= 75 ? 'active' : ''}>Shipped</span>
              <span className={order.statusProgress >= 100 ? 'active' : ''}>Delivered</span>
            </div>
          </div>

          <div className="order-section">
            <h3>Estimated Delivery</h3>
            <p>{order.estimatedDelivery}</p>
          </div>

          <div className="order-section">
            <h3>Order Items</h3>
            <ul className="order-items">
              {order.items.map((item, index) => (
                <li key={index}>
                  <span className="item-name">{item.name} × {item.quantity}</span>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-section">
            <h3>Shipping Address</h3>
            <p>{order.customerInfo.address}</p>
          </div>

          <div className="order-total">
            <span>Total:</span>
            <span>${order.total}</span>
          </div>

          <Link to="/" className="back-to-home">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;