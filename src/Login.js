import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase login method
import { useNavigate } from 'react-router-dom'; // For navigation
import { auth } from './firebase'; // Firebase configuration
import './Auth.css'; // Custom CSS file
import logo from './assets/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle login errors
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        try {
            // Firebase login
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            navigate('/home'); // Redirect to home page upon successful login
        } catch (error) {
            // Handle login errors
            if (error.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.');
            } else if (error.code === 'auth/user-not-found') {
                setError('No account found with this email.');
            } else {
                setError('Failed to login. Please check your credentials.');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Welcome to ForestForUs</h1>
                <img src={logo} alt="Logo" className="auth-logo" />
                <form onSubmit={handleLogin}>
                    {error && <p className="error-message">{error}</p>} {/* Display login errors */}
                    <input
                        type="email"
                        placeholder="username@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="auth-links">
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <a href="/signup" className="auth-link">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
