// write a react code to create a signup page similar to the login page
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
function Signup() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();
        // Basic validation
        if (!email || !password || !confirmPassword || !name) {
            alert('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        alert(`Signing up with Email: ${email}, Name: ${name}`);
        // Here you would typically handle the signup logic, e.g., API call
    }
    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
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
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="login-btn">Sign Up</button>
                </form>
                <p className="terms-text">By signing up, you agree to our terms and conditions.</p>
                <Link to="/" className="create-account-btn">Already have an account? Log In</Link>
                </div>
        </div>
    );
}
export default Signup;
