import React, { useState } from 'react'
import "../../../styles/button.scss";
import { useNavigate, Link } from "react-router";
import { useAuth } from '../hooks/useauth';

const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername]= useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const{loading,handleRegister} = useAuth()
  const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister({username,email,password})
        navigate("/")
        // Handle form submission logic here
    }
      if (loading) {
        return (
            <main>
                <h1>Loading.....</h1>
            </main>
        );
    }
 return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
            onChange={(e)=>{setUsername(e.target.value)}}
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Email">Email </label>
            <input
            onChange={(e)=>{setEmail(e.target.value)}}
              type="text"
              id="Email"
              name="Email"
              placeholder="Enter Email Address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            onChange={(e)=>{setpassword(e.target.value)}}
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