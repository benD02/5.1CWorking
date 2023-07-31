import React, { useState } from "react";
import firebase from "../../firebaseConfig";
import bcrypt from "bcryptjs";
import "firebase/auth"; // For authentication
import "./account.css";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [accountCreated, setAccountCreated] = useState(false); // New state variable
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const refreshPageAfterDelay = (delay) => {
    setTimeout(() => {
      window.location.reload();
    }, delay);
  };

  const handleAuthentication = async (e) => {
    e.preventDefault();
    try {
      if (isLoginMode) {
        // Handle login
        console.log("Check 1");
        await firebase.auth().signInWithEmailAndPassword(email, password);
        setSuccessMessage("Account login successfully");

        // Redirect the user to the home page or any other route after successful login
      } else {
        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }

        if (password.length < 6) {
          setError("Password must be at least 6 characters long.");
          return;
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user account in Firebase Authentication with the hashed password
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, hashedPassword);

        // Save additional user information to Firestore database
        const userRef = firebase.firestore().collection("users").doc(email); // Use the email as the document ID
        userRef.set({
          firstName,
          lastName,
          email,
          password
        });

        // Set the accountCreated state to true after successful registration
        setAccountCreated(true);
        setIsModalOpen(true); // Open the modal on successful registration
        console.log("Account created");
        refreshPageAfterDelay(2000);

      }
    } catch (error) {
      console.log(error);
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="form-container">
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <p>Successful account creation. Please login.</p>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </div>
          )}

          <h2>{isLoginMode ? "Login" : "Registration "}</h2>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          {!accountCreated && (
            <form onSubmit={handleAuthentication}>
              {!isLoginMode && (
                <>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              )}
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
              {!isLoginMode && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              )}
              <button type="submit">
                {isLoginMode ? "Login" : "Register"}
              </button>
            </form>
          )}
          <button onClick={toggleMode}>
            {isLoginMode ? "Register here" : "back to Login"}
          </button>
          {accountCreated && <p>Successful account creation. Please login. </p>}
        </div>
      </div>
    </div>
  );
};

export default Create;
