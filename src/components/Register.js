import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "../App.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegisterWithEmail = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
    } catch (err) {
      setError("Failed to register. Please try again.");
    }
  };

  const handleRegisterWithGoogle = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Registered with Google!");
    } catch (err) {
      setError("Failed to register with Google.");
    }
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleRegisterWithEmail}>
        <h1>Sign Up</h1>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register with Email</button>
        <div className="or-divider">OR</div>
        <button type="button" onClick={handleRegisterWithGoogle}>
          Register with Google
        </button>
        <div className="or-divider">OR</div>
        <input type="text" placeholder="Phone Number" />
        <button type="button">Send OTP</button>
      </form>
    </div>
  );
};

export default Register;
