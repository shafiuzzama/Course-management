

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "../inpute/Input"; // Check if this path is correct
import passwordicon from "../../assets/passwordicon/eye.svg";
import {Link, useNavigate } from "react-router-dom";


const InstructorRegister = ({ heading, title, placeholder }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(" ");
    setEmail(" ");
    setEmail(" ");
    setPassword(" ");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let hasError = false;

    if (!name.trim()) {
      setNameError("Name is required");
      hasError = true;
    }
    if (email.trim() === "") {
      setEmailError("Email is Required");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid Email");
      hasError = true;
    }

    if (password.trim() === "") {
      setPasswordError("Password is Required");
      hasError = true;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password)) {
      setPasswordError("Password must contain at least one letter and one number");
      hasError = true;
    }

    if (!hasError) {
      const data = { name: name, email: email, password: password };
      const existingUsers = JSON.parse(localStorage.getItem("userdata")) || [];
      const isUserExist = existingUsers.filter((item) => item.email === email);
      
      if (isUserExist.length > 0) {
        alert("User already exists");
      } else {
        localStorage.setItem("userdata", JSON.stringify([...existingUsers, data]));
        navigate("/instructor/myCourse/");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="instructor-registering-main">
        <div className="container container-box">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">{heading}</h1>
            <h4 className="Register-Now">{title}</h4>
            <div className="input-error">
              <Input
                type={"text"}
                label={"Full name"}
                placeholder={"Full name"}
                handleChange={handleNameChange}
                value={name}
              />
              <div className="nameError">{nameError}</div>
            </div>
            <div className="input-error">
              <Input
                type={"email"}
                label={"Email id"}
                placeholder={"Email"}
                handleChange={handleEmailChange}
              />
              <div className="emailError">{emailError}</div>
            </div>
            <div className="input-error">
              <div className="password-input">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  label={"Password"}
                  placeholder={"Password"}
                  handleChange={handlePasswordChange}
                />
                <img
                  className="img-section"
                  src={passwordicon}
                  alt="icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className="passwordError">{passwordError}</div>
            </div>
            <button type="submit" className="custom-button">
              Register
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and{" "}
              <span>Privacy policies</span>
            </p>
          </form>
        </div>
      </div>
      <h5 className="login-link">
        Already have an account? <Link to={"/instructor/login"}>Login</Link> 
      </h5>
    </div>
  );
};

export default InstructorRegister;

