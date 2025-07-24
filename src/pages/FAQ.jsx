import React from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Saalna?",
      answer: <p><span className="highlight">Saalna</span> is an online food ordering platform that connects customers with their favorite meals, offering fast delivery and quality food.</p>
    },
    {
      id: 2,
      question: "How do I place an order?",
      answer: "Ordering on Saalna is easy! Simply browse our menu, add items to your cart, proceed to checkout, and complete the payment."
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, UPI, net banking, and cash on delivery (COD)."
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer: "Once your order is placed, you will receive a tracking link via SMS or email. You can also track your order through the 'My Orders' section on our website."
    },
    {
      id: 5,
      question: "What are your delivery hours?",
      answer: "We deliver between 9 AM to 11 PM, seven days a week."
    },
    {
      id: 6,
      question: "Can I cancel my order?",
      answer: "Orders can be canceled within 5 minutes of placement. Once the food is prepared, cancellation is not allowed."
    },
    {
      id: 7,
      question: "What is your refund policy?",
      answer: "Refunds are provided for canceled orders or if an order is not delivered. Refunds may take 5-7 business days to process."
    },
    {
      id: 8,
      question: "Do I need an account to place an order?",
      answer: "No, you can place an order as a guest. However, having an account helps track orders and receive special offers."
    },
    {
      id: 9,
      question: "How do I contact customer support?",
      answer: "You can reach us at 📞 044-885865942 or 📧 saalna@gmail.com."
    }
  ];

  return (
    <div className="faq-page">
      <header>
        <div className="inline-container">
          
          
          <h1 className="page-title">Frequently Asked Questions (FAQs)</h1>
        </div>
      </header>

      <div className="faq-container">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.id}. {faq.question}</h3>
            <div className="faq-answer">
              {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
            </div>
          </div>
        ))}
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

export default FAQ;