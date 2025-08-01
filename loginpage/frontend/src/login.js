import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import validation from './loginvalidation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // Initialize errors state

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validate inputs
    const validationErrors = validation({ email, password });
    setErrors(validationErrors);

    // Check if there are any errors
    if (Object.keys(validationErrors).length > 0) {
      return; // Stop if validation fails
    }

    // Basic validation (optional, since validation() already checks)
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    alert(`Logging in with Email: ${email}`);
    // Here you would typically handle the login logic, e.g., API call
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="terms-text">By logging in, you agree to our terms and conditions.</p>
        <Link to="/signup" className="create-account-btn">Create Account</Link>
      </div>
    </div>
  );
}

export default Login;