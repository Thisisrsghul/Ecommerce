import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ images }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';
    
    if (savedRememberMe && savedEmail) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail
      }));
      setRememberMe(savedRememberMe);
    }
  }, []);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setErrors(prev => ({...prev, email: 'Email is required'}));
      return false;
    } else if (!emailRegex.test(formData.email)) {
      setErrors(prev => ({...prev, email: 'Please enter a valid email address'}));
      return false;
    }
    setErrors(prev => ({...prev, email: ''}));
    return true;
  };

  const validateForm = () => {
    const isValidEmail = validateEmail();
    const newErrors = {...errors};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else {
      newErrors.password = '';
    }
    
    setErrors(newErrors);
    return isValidEmail && !newErrors.password;
  };

  const handleEmailKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const isValid = validateEmail();
      if (isValid) {
        passwordRef.current.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (rememberMe) {
        localStorage.setItem('email', formData.email);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('rememberMe');
      }
      
      const authToken = 'sample-token-' + Math.random().toString(36).substring(2);
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      
      const redirectPath = localStorage.getItem('redirectAfterLogin') || '/saalna';
      localStorage.removeItem('redirectAfterLogin');
      
      navigate(redirectPath);
    } catch (error) {
      setErrors({general: error.message || 'Login failed. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${images?.b5 || ''})` }}>
      <div className="login-overlay"></div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Saalna</h2>
          
          {localStorage.getItem('redirectAfterLogin') && (
            <div className="info-message">Please login to proceed to checkout</div>
          )}
          
          {errors.general && (
            <div className="error-message">{errors.general}</div>
          )}
          
          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData, email: e.target.value});
                if (errors.email) setErrors({...errors, email: ''});
              }}
              onKeyDown={handleEmailKeyDown}
              placeholder="Enter your email"
              autoComplete="username"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-text">{errors.email}</span>
            )}
          </div>
          
          <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="Enter your password"
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              autoComplete="current-password"
              disabled={isSubmitting}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isSubmitting}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          
          <button 
            type="submit" 
            className="login-button" 
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Logging in...
              </>
            ) : 'Login'}
          </button>
          
          <div className="login-links">
            <Link to="/signup" tabIndex={isSubmitting ? -1 : 0}>
              Don't have an account? Sign Up
            </Link>
            <Link to="/forgot-password" tabIndex={isSubmitting ? -1 : 0}>
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;