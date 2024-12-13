import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google successfully!");
    } catch (err) {
      setError("Failed to login with Google.");
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
        <button onClick={handleLoginWithEmail}>Login with Email</button>
        <div className="or-divider">OR</div>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        <div className="or-divider">OR</div>
        <input type="tel" placeholder="Phone Number" />
        <button>Send OTP</button>
        <div className="or-divider">OR</div>
        <button style={{ backgroundColor: "#6c757d" }}>Continue as Guest</button>
      </div>
    </div>
  );
};

export default Login;
