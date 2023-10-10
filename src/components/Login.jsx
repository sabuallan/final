import { useState } from "react";
import "../login.css"; // Import the CSS file

const Login = () => {
  // State to store user credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // State to store authentication status
  const [authenticated, setAuthenticated] = useState(false);

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform client-side validation (e.g., required fields)
    if (!credentials.username || !credentials.password) {
      alert("Please enter both username and password.");
      return;
    }

    // Send a POST request to the server
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();

        const token = data.token;

        localStorage.setItem("authToken", token);

        setAuthenticated(true);
      } else {
        console.error("Authentication failed");
        alert("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred during authentication:", error);
      alert("An error occurred during authentication. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-center">
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          {authenticated ? (
            <p className="welcome-message">
              Welcome, {credentials.username}! You are now logged in.
            </p>
          ) : (
            <>
              <h2 className="login-heading">Login</h2>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="login-input"
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="login-input"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="login-button"
                >
                  Login
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
