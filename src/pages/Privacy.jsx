import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <div className="inline-container">
          
         
          <h1 className="page-title">Privacy Policy</h1>
        </div>
      </header>

      <div className="privacy-container">
        <h2>1. Introduction</h2>
        <p>Welcome to <span className="highlight">Saalna</span>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect different types of data to provide and improve our services, including:</p>
        <ul>
          <li><strong>Personal Information</strong>: Name, email, phone number, address, payment details.</li>
          <li><strong>Non-Personal Information</strong>: Browser type, device information, IP address.</li>
          <li><strong>Cookies & Tracking Data</strong>: For improving user experience and analytics.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To process orders and payments.</li>
          <li>To improve website functionality and personalize user experience.</li>
          <li>To provide customer support and send order-related notifications.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We use secure encryption and trusted payment gateways to protect your data. However, no online transmission is 100% secure, so we advise caution when sharing personal details.</p>

        <h2>5. Third-Party Sharing</h2>
        <p>We do not sell or rent your personal data. However, we may share data with trusted partners like payment processors and delivery services.</p>

        <h2>6. Cookies & Tracking</h2>
        <p>Cookies help us analyze traffic and enhance user experience. You can manage or disable cookies in your browser settings.</p>

        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your data.</li>
          <li>Ask for corrections or deletion of your information.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy from time to time. Please check this page periodically for changes.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about our Privacy Policy, contact us:</p>
        <p>📞 Phone: 044-885865942<br />
           📧 Email: <a href="mailto:saalna@gmail.com">saalna@gmail.com</a></p>
      </div>

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
                   <a href="https://facebook.com" aria-label="Facebook">
                     <span className="social-icon">FB</span>
                   </a>
                   <a href="https://instagram.com" aria-label="Instagram">
                     <span className="social-icon">IG</span>
                   </a>
                   <a href="https://twitter.com" aria-label="Twitter">
                     <span className="social-icon">TW</span>
                   </a>
                 </div>
               </div>
     
               <div className="footer-links">
                 <div className="link-column">
                   <h4>Quick Links</h4>
                   <ul>
                     <li><Link to="/home">Home</Link></li>
                     <li><Link to="/menu">Our Menu</Link></li>
                     <li><Link to="/offers">Special Offers</Link></li>
                     <li><Link to="/track-order">Track Order</Link></li>
                   </ul>
                 </div>
     
                 <div className="link-column">
                   <h4>Company</h4>
                   <ul>
                     <li><Link to="/about">About Us</Link></li>
                     <li><Link to="/contact">Contact Us</Link></li>
                     <li><Link to="/careers">Careers</Link></li>
                     <li><Link to="/locations">Our Locations</Link></li>
                   </ul>
                 </div>
     
                 <div className="link-column">
                   <h4>Legal</h4>
                   <ul>
                     <li><Link to="/terms">Terms & Conditions</Link></li>
                     <li><Link to="/privacy">Privacy Policy</Link></li>
                     <li><Link to="/faq">FAQs</Link></li>
                     <li><Link to="/return">Return Policy</Link></li>
                   </ul>
                 </div>
     
                 <div className="link-column">
                   <h4>Contact Us</h4>
                   <ul className="contact-info">
                     <li><span className="contact-icon">📍</span> 123 Food Street, Chennai</li>
                     <li><span className="contact-icon">📞</span> 044-885865942</li>
                     <li><span className="contact-icon">✉️</span> saalna@gmail.com</li>
                     <li><span className="contact-icon">⏰</span> Open 10AM - 10PM</li>
                   </ul>
                 </div>
               </div>
             </div>
     
             <div className="footer-bottom">
               <p>&copy; {new Date().getFullYear()} Saalna Food Delivery. All rights reserved.</p>
               <div className="payment-methods">
                 <span className="payment-icon">Visa</span>
                 <span className="payment-icon">Mastercard</span>
                 <span className="payment-icon">PayPal</span>
                 <span className="payment-icon">Amazon Pay</span>
               </div>
             </div>
           </footer>
    </div>
  );
};

export default Privacy;