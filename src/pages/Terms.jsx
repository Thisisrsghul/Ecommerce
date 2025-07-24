import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <header className="terms-header">
        <div className="header-content">
          <h1 className="page-title">Terms and Conditions</h1>
          
        </div>
      </header>

      <main className="terms-container">
        <section className="terms-section" aria-labelledby="section1">
          <h2 className="section-title" id="section1"><span className="section-number">1.</span> Introduction</h2>
          <p>Welcome to <strong className="highlight">Saalna</strong>. By accessing or using our website and services, you agree to be bound by these terms and conditions. Please read them carefully before placing an order. If you disagree with any part, please refrain from using our services.</p>
        </section>

        <section className="terms-section" aria-labelledby="section2">
          <h2 className="section-title" id="section2"><span className="section-number">2.</span> User Responsibilities</h2>
          <ul className="terms-list">
            <li>You must be at least 18 years old to place an order or have parental consent</li>
            <li>You agree to provide accurate and complete contact and payment information</li>
            <li>You must not misuse, hack, or disrupt the website services</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
          </ul>
        </section>

        <section className="terms-section" aria-labelledby="section3">
          <h2 className="section-title" id="section3"><span className="section-number">3.</span> Ordering & Payments</h2>
          <ul className="terms-list">
            <li>All orders are subject to product availability</li>
            <li>Payment must be made in full at the time of order confirmation</li>
            <li>Prices may change without prior notice but will not affect confirmed orders</li>
            <li>We accept various payment methods including credit/debit cards and digital wallets</li>
            <li>You will receive an order confirmation email upon successful payment</li>
          </ul>
        </section>

        <section className="terms-section" aria-labelledby="section4">
          <h2 className="section-title" id="section4"><span className="section-number">4.</span> Cancellation & Refund Policy</h2>
          <ul className="terms-list">
            <li>Orders can be canceled within 10 minutes of placing them without penalty</li>
            <li>Refunds will be processed within 7 working days for eligible cancellations</li>
            <li>If you receive an incorrect, damaged, or unsatisfactory item, contact our support team within 24 hours of delivery</li>
            <li>Refunds will be issued to the original payment method</li>
          </ul>
        </section>

        <section className="terms-section" aria-labelledby="section5">
          <h2 className="section-title" id="section5"><span className="section-number">5.</span> Privacy & Data Protection</h2>
          <ul className="terms-list">
            <li>We respect your privacy and protect your personal information in accordance with applicable laws</li>
            <li>Your data will not be shared with third parties without your explicit consent, except as required by law</li>
            <li>We implement security measures to protect your information but cannot guarantee absolute security</li>
            <li>Review our <Link to="/privacy" className="highlight">Privacy Policy</Link> for comprehensive details</li>
          </ul>
        </section>

        <section className="terms-section" aria-labelledby="section6">
          <h2 className="section-title" id="section6"><span className="section-number">6.</span> Limitation of Liability</h2>
          <p><strong className="highlight">Saalna</strong> is not responsible for:</p>
          <ul className="terms-list">
            <li>Delays or failures caused by third-party delivery services</li>
            <li>Damages beyond the value of the order</li>
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Issues arising from force majeure events (natural disasters, strikes, etc.)</li>
          </ul>
        </section>

        <section className="terms-section" aria-labelledby="section7">
          <h2 className="section-title" id="section7"><span className="section-number">7.</span> Governing Law</h2>
          <p>These terms are governed by and construed in accordance with the laws of India. Any disputes arising will be subject to the exclusive jurisdiction of the courts in Chennai.</p>
        </section>

        <section className="terms-section contact-section" aria-labelledby="section8">
          <h2 className="section-title" id="section8"><span className="section-number">8.</span> Contact Us</h2>
          <p>For any questions or concerns regarding these terms:</p>
          <div className="contact-methods">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📞</span>
              <span>Phone: <a href="tel:044-885865942">044-885865942</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📧</span>
              <span>Email: <a href="mailto:saalna@gmail.com" className="highlight">saalna@gmail.com</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">🏢</span>
              <span>Address: 123 Food Street, Chennai, Tamil Nadu 600001</span>
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

export default Terms;