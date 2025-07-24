import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p className="subtitle">We'd love to hear from you! Reach out through any of these channels.</p>
          
          <div className="contact-grid">
            {/* Phone */}
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>044-885865942</p>
              <p className="contact-hours">Mon-Fri: 9AM-6PM</p>
            </div>
            
            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>saalna@gmail.com</p>
              <p className="contact-note">Response within 24 hours</p>
            </div>
            
            {/* Address */}
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Chrompet, Chennai</p>
              <p>600044, India</p>
            </div>
            
            {/* Social */}
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Social Media</h3>
              <p>@s_a_a_l_n_a_1</p>
              <p className="social-link">
                <a href="https://instagram.com/s_a_a_l_n_a_1" target="_blank" rel="noopener noreferrer">
                  DM us on Instagram
                </a>
              </p>
            </div>
          </div>
          
          {/* Customer Support Info */}
          <div className="support-section">
            <div className="support-header">
              <span className="support-icon">⏰</span>
              <h3>Customer Support</h3>
            </div>
            <p>Our team is available to assist you 24/7 with any inquiries or order issues.</p>
            <div className="support-details">
              <p><strong>Live Chat:</strong> Available daily from 9AM-9PM IST</p>
              <p><strong>Help Center:</strong> <Link to="/help">Browse FAQs</Link></p>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Contact;