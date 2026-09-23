import React from 'react'
import "../../../styles/button.scss";
import { useNavigate, Link } from "react-router";

const Register = () => {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }
 return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Email">Email </label>
            <input
              type="text"
              id="Email"
              name="Email"
              placeholder="Enter Email Address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>

          <button className="button primary" type="submit">
    Register
</button>
        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </main>
  );
};

export default Register;