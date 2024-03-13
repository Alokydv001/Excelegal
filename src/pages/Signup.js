import React, { useState } from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Logo from "../image/reglogo.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleType: "",
  });
  const [isStrongPassword, setIsStrongPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    // Check password strength
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsStrongPassword(strongPasswordRegex.test(newPassword));
    handleChange(e);
  };

  const sendRequest = async () => {
    try {
      const response = await fetch("http://192.168.68.25:8080/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
      navigate("/");
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <div className="reg">
     
      <div className="registration" >
        <img src={Logo} alt="" className="logooo"></img>
   
        <h2 className="signup-text">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              type="text"
              id="firstname"
              name="firstName"
              value={formData.firstName}
              multiline
              maxRows={4}
              onChange={handleChange}
              required
              label="First Name"
            />
          </div>
          <div className="form-group">
            <TextField
              multiline
              maxRows={4}
              type="text"
              id="lastname"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              label="Last Name"
            />
          </div>
          <div className="form-group">
            <TextField
              multiline
              maxRows={4}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              label="E-mail"
            />
          </div>

          <div className="form-group">
            <TextField
              multiline
              maxRows={4}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handlePasswordChange}
              required
              label="Password"
            />
            {formData.password && !isStrongPassword ? (
              <p className="text-danger">
                Password must contain at least 8 characters, including
                uppercase, lowercase, numbers, and special characters.
              </p>
            ) : null}
          </div>

         
          <br></br>
          <button className="reg-b" type="submit">
            Register
          </button>
          
        </form>
        <div
          style={{
            justifyContent: "space-between",
            // display: "flex",
            marginTop: "30px",
          }}
        >
          <p style={{ marginTop: "10px", color: "black" }}>
            User already Login
          </p>
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
