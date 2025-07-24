import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const AboutUs = ({ images }) => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url(${images.back})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Discover the passion behind Saalna</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Saalna, we're committed to bringing authentic, delicious food to your doorstep with 
              unmatched quality and service. We believe good food should be convenient, affordable, 
              and most importantly, memorable.
            </p>
          </div>
          <div className="mission-image">
            <img src={images.biryani} alt="Our delicious biryani" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="member-image">
              <img src={`${process.env.PUBLIC_URL}/images/chef1.jpg`} alt="Head Chef" />
            </div>
            <h3>Rajesh Kumar</h3>
            <p>Head Chef</p>
            <p>15+ years of culinary experience</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={`${process.env.PUBLIC_URL}/images/chef2.avif`} alt="Pastry Chef" />
            </div>
            <h3>Priya Sharma</h3>
            <p>Pastry Chef</p>
            <p>Specializes in traditional desserts</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={`${process.env.PUBLIC_URL}/images/chef3.png`} alt="Delivery Head" />
            </div>
            <h3>Arun Patel</h3>
            <p>Delivery Head</p>
            <p>Ensuring your food arrives perfect</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🍲</div>
            <h3>Authenticity</h3>
            <p>Traditional recipes passed down through generations</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h3>Innovation</h3>
            <p>Constantly improving our menu and service</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Community</h3>
            <p>Supporting local farmers and producers</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainability</h3>
            <p>Eco-friendly packaging and practices</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to experience authentic flavors?</h2>
        <Link to="/saalna" className="cta-button">Order Now</Link>
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
    </div>
  );
};

export default AboutUs;