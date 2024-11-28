import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Auth.css'; // Custom CSS file
import logo from './assets/logo.png';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // For error messages
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (password !== confirmPassword) {
            setError("Passwords don't match.");
            return;
        }

        try {
            // Call Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Firebase returns the created user
            const user = userCredential.user;
            console.log('User created:', user);

            // Redirect to home page after successful signup
            alert('Signed up successfully!');
            navigate('/home');
        } catch (error) {
            // Handle errors and show them to the user
            setError(error.message);
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Create Account</h1>
                <img src={logo} alt="Logo" className="auth-logo" />
                <form onSubmit={handleSignup}>
                    {error && <p className="error-message">{error}</p>} {/* Display errors */}
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="password-input" // CSS class for styling
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{
                            borderColor: confirmPassword
                                ? confirmPassword === password
                                    ? 'green'
                                    : 'red'
                                : 'initial',
                        }}
                    />
                    {confirmPassword && confirmPassword !== password && (
                        <p className="error-message">Passwords do not match</p>
                    )}
                    <div className="auth-terms">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            I agree to all statements in{' '}
                            <a href="/terms">Terms of Service</a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="auth-button"
                        disabled={password !== confirmPassword} // Disable button if passwords don't match
                    >
                        Sign Up
                    </button>
                </form>
                <p>
                    Already have an account?{' '}
                    <a href="/login" className="auth-link">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
