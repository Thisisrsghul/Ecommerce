import React from 'react';
import { Link } from 'react-router-dom';
import './Return.css';

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <header className="policy-header">
        <h1 className="policy-title">Return & Refund Policy</h1>
        <p className="policy-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <main className="policy-content">
        <section className="policy-card">
          <h2 className="section-title">1. Overview</h2>
          <div className="section-content">
            <p>
              At <span className="brand-name">Saalna</span>, we strive to provide the best food delivery experience. 
              If you're not satisfied with your order, our return and refund policy ensures your concerns are addressed promptly.
            </p>
          </div>
        </section>

        <section className="policy-card">
          <h2 className="section-title">2. Eligibility for Refunds</h2>
          <div className="section-content">
            <p>We issue refunds under the following circumstances:</p>
            <ul className="policy-list">
              <li>The food item was <strong>incorrect</strong> or different from what was ordered</li>
              <li>The food was <strong>spoiled, expired, or contaminated</strong></li>
              <li>The order was <strong>not delivered</strong> due to an issue on our end</li>
              <li>The order was <strong>significantly delayed</strong> (more than 90 minutes)</li>
            </ul>
          </div>
        </section>

        <section className="policy-card">
          <h2 className="section-title">3. Non-Refundable Situations</h2>
          <div className="section-content">
            <p>Refunds are <strong>not applicable</strong> in these cases:</p>
            <ul className="policy-list">
              <li>Change of mind after ordering</li>
              <li>Food was <strong>partially consumed</strong></li>
              <li><strong>Incorrect delivery address</strong> provided by customer</li>
              <li>Delivery delays due to <strong>unforeseen circumstances</strong> (weather, traffic, etc.)</li>
              <li>Minor packaging issues that don't affect food quality</li>
            </ul>
          </div>
        </section>

        <section className="policy-card">
          <h2 className="section-title">4. Refund Processing</h2>
          <div className="section-content">
            <p>
              Approved refunds are processed within <strong>3-5 business days</strong> to your original payment method. 
              The exact timing depends on your bank's processing period.
            </p>
            <div className="notice-box">
              <p>Note: Refund times may vary during holidays or peak periods.</p>
            </div>
          </div>
        </section>

        <section className="policy-card">
          <h2 className="section-title">5. Cancellation Policy</h2>
          <div className="section-content">
            <p>
              Orders can be canceled within <strong>10 minutes</strong> of placement. 
              After this window, cancellations may not be possible if preparation has begun.
            </p>
            <p>
              For scheduled orders, cancellations must be made <strong>at least 2 hours</strong> before the delivery time.
            </p>
          </div>
        </section>

        <section className="policy-card">
          <h2 className="section-title">6. How to Request a Refund</h2>
          <div className="section-content">
            <p>To initiate a refund request:</p>
            <ol className="steps-list">
              <li>Contact our support team within <strong>24 hours</strong> of delivery</li>
              <li>Provide your <strong>Order ID</strong> and details of the issue</li>
              <li>Include clear photos if the issue is food quality or incorrect items</li>
            </ol>
            
            <div className="contact-methods">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>saalna@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>044-885865942</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <span>Live Chat on our app/website</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="saalna-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src={`${process.env.PUBLIC_URL}/images/logo-removebg-preview.png`} 
              alt="Saalna Logo" 
              className="footer-logo" 
            />
            <h3>Saalna Food Delivery</h3>
            <p className="footer-tagline">Delivering happiness to your doorstep</p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" className="social-link">
                <span className="social-icon">FB</span>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="social-link">
                <span className="social-icon">IG</span>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="social-link">
                <span className="social-icon">TW</span>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="link-column">
              <h4 className="column-title">Quick Links</h4>
              <ul>
                <li><Link to="/home" className="footer-link">Home</Link></li>
                <li><Link to="/menu" className="footer-link">Our Menu</Link></li>
                <li><Link to="/offers" className="footer-link">Special Offers</Link></li>
                <li><Link to="/track-order" className="footer-link">Track Order</Link></li>
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">Company</h4>
              <ul>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                <li><Link to="/careers" className="footer-link">Careers</Link></li>
                <li><Link to="/locations" className="footer-link">Our Locations</Link></li>
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">Legal</h4>
              <ul>
                <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/faq" className="footer-link">FAQs</Link></li>
                <li><Link to="/return" className="footer-link active">Return Policy</Link></li>
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">Contact Us</h4>
              <ul className="contact-info">
                <li className="contact-item">
                  <span className="contact-icon">📍</span> 
                  <span>123 Food Street, Chennai</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📞</span> 
                  <span>044-885865942</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">✉️</span> 
                  <span>saalna@gmail.com</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">⏰</span> 
                  <span>Open 10AM - 10PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Saalna Food Delivery. All rights reserved.
          </p>
          <div className="payment-methods">
            <span className="payment-method">Visa</span>
            <span className="payment-method">Mastercard</span>
            <span className="payment-method">PayPal</span>
            <span className="payment-method">Amazon Pay</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReturnPolicy;