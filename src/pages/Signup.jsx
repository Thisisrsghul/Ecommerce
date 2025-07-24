import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = ({ images }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    const newErrors = {...errors};
    
    switch(name) {
      case 'name':
        if (!value.trim()) newErrors.name = 'Full name is required';
        else delete newErrors.name;
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) newErrors.email = 'Email is required';
        else if (!emailRegex.test(value)) newErrors.email = 'Please enter a valid email';
        else delete newErrors.email;
        break;
        
      case 'password':
        if (!value) newErrors.password = 'Password is required';
        else if (value.length < 6) newErrors.password = 'Password must be at least 6 characters';
        else delete newErrors.password;
        
        if (formData.confirmPassword && value !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        } else if (formData.confirmPassword) {
          delete newErrors.confirmPassword;
        }
        break;
        
      case 'confirmPassword':
        if (!value) newErrors.confirmPassword = 'Please confirm your password';
        else if (value !== formData.password) newErrors.confirmPassword = 'Passwords do not match';
        else delete newErrors.confirmPassword;
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
    return !newErrors[name];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleKeyDown = (e, nextField) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const isValid = validateField(e.target.name, e.target.value);
      if (isValid && nextField && nextField.current) {
        nextField.current.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isPasswordValid = validateField('password', formData.password);
    const isConfirmValid = validateField('confirmPassword', formData.confirmPassword);
    
    if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful registration
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      
      const redirectPath = localStorage.getItem('redirectAfterLogin') || '/saalna';
      localStorage.removeItem('redirectAfterLogin');
      
      navigate(redirectPath);
    } catch (error) {
      setErrors({...errors, general: 'Registration failed. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container" style={{ backgroundImage: `url(${images.b3})` }}>
      <div className="signup-overlay"></div>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <h2>Create Your Account</h2>
          <p className="signup-subtitle">Join Saalna to enjoy delicious food delivery</p>
          
          {localStorage.getItem('redirectAfterLogin') && (
            <div className="info-message">Please register to proceed to checkout</div>
          )}
          
          {errors.general && <div className="error-message">{errors.general}</div>}
          
          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          
          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              value={formData.email}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, passwordRef)}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          
          <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              value={formData.password}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
              placeholder="Create a password (min 6 characters)"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
          
          <div className={`form-group ${errors.confirmPassword ? 'has-error' : ''}`}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              ref={confirmPasswordRef}
              value={formData.confirmPassword}
              onChange={handleChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>
          
          <button 
            type="submit" 
            className="signup-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
          
          <div className="signup-links">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;