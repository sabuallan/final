import { useState } from 'react';

const Login = () => {
  // State to store user credentials
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  // State to store authentication status
  const [authenticated, setAuthenticated] = useState(false);

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation (e.g., required fields)
    if (!credentials.username || !credentials.password) {
      alert('Please enter both username and password.');
      return;
    }

    // Simulate successful authentication
    setAuthenticated(true);
  };

  return (
    <div>
      {authenticated ? (
        <p>Welcome, {credentials.username}! You are now logged in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
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
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
