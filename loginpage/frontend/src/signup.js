// write a react code to create a signup page similar to the login page
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // ✅ update this line

function Signup() {
    const navigate = useNavigate();
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

    const values = {
        name: name,
        email: email,
        password: password
    };

    axios.post('http://localhost:8081/signup', values)
        .then(res => {
            console.log(res.data);
            alert('Signup successful!');
            navigate('/'); // Redirect to login page after successful signup
        })
        .catch(err => {
            console.error(err);
            alert('Signup failed. Please try again.');
        });
};

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
