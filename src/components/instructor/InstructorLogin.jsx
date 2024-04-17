
import React, { useState } from "react";
import Input from "../inpute/Input";
import passwordicon from "../../assets/passwordicon/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import "./instructor.css";

const InstructorLogin = ({ heading, title }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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

    // Check if email is empty or invalid
    if (email.trim() === "") {
      setEmailError("Email is required");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid Email");
      hasError = true;
    }

    // Check if password is empty or invalid
    if (password.trim() === "") {
      setPasswordError("Password is required");
      hasError = true;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password)) {
      setPasswordError(
        "Password must contain at least one letter and one number"
      );
      hasError = true;
    }

    if (!hasError) {
      const userData = localStorage.getItem("userdata");
      if (userData) {
        const data = JSON.parse(userData);
        const res = data.find((item) => item.email === email && item.password === password);
        if (res) {
          // Navigate to courses page if user is found
          navigate("/instructor/myCourse/");
        } else {
          // Alert if user is not found
          alert("Incorrect email or password");
        }
      } else {
        // Handle case where no user data is found in localStorage
        console.error("No user data found in localStorage");
      }
    }
  };

  return (
    <div>
      <div id="outersection-inst">
        <div className="container container-box">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">{heading}</h1>
            <h4 className="Register-Now">{title}</h4>
            <div className="input-error">
              <Input
                type={"email"}
                label={"Email id"}
                placeholder={"Email"}
                handleChange={handleEmailChange}
              />
              {emailError && <div className="emailError">{emailError}</div>}
            </div>
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
              {passwordError && (
                <div className="passwordError">{passwordError}</div>
              )}
            </div>
            <button type="submit" className="custom-button">
              Login
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and
              <span>Privacy policies</span>
            </p>
            <div className="already-acc">
              Don't have an account?{" "}
              <Link to={"/instructor/register"}>Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstructorLogin;
