import React, { useState } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import passwordicon from "../../assets/passwordicon/eye.svg";
import Input from "../inpute/Input";
import { useNavigate } from "react-router-dom";

const Register = ({ heding, title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameEroor, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const handlePasswordChnage = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let hasError = false;
    if (!name.trim()) {
      // alert("name is required")
      setNameError("Name is Required");
      // return;
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
      setPasswordError(
        "Password must contain at least one letter and one number"
      );
      hasError = true;
    }
    if (!hasError) {
      const data = { name: name, email: email, password: password };

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      // existingUsers.push(data);
      // console.log("existingUsers", existingUsers);

      const isUserExist = existingUsers.filter((user) => user.email === email);
      console.log("isUserExist", isUserExist);
      if (isUserExist.length >= 1) {
        alert("you already register");
      } else {
        // existingUsers.push(data);
        // localStorage.setItem("userData", JSON.stringify([...existingUsers,data]));
        // navigate("/courses");

        localStorage.setItem("users", JSON.stringify([...existingUsers, data]));
        navigate("/courses");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <div className="outersection">
        <div className="container-box">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">{heding}</h1>
            <h4 className="Register-Now">{title}</h4>
            <div className=" inner-input">
              <Input
                type={"text"}
                label={"Full name"}
                placeholder={"Full name"}
                handleChange={handleNameChange}
                value={name}
              />
              <div className="nameEroor">{nameEroor}</div>
            </div>
            <div className=" inner-input">
              {/* <Input 
            <div className="nameEroor">{nameEroor}</div>
            </div>
            <div className=" inner-input"> */}

              <Input
                type={"email"}
                label={"Email id"}
                placeholder={"Email"}
                handleChange={handleEmailChange}
                value={email}
              />
              <div className="emailError">{emailError}</div>
            </div>
            <div className=" inner-input">
              <div className="password-input">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  label={"Password"}
                  placeholder={"Password"}
                  handleChange={handlePasswordChnage}
                  value={password}
                />

                {
                  <img
                    className="img-section"
                    src={passwordicon}
                    alt="icon"
                    onClick={togglePasswordVisibility}
                  />
                }
              </div>
              <div className="passwordError">{passwordError}</div>
            </div>
            {/* <button type="submit" className="custom-button"> */}
            <button type="submit" className="custom-button">
              Register
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and
              <span>Privacy policies</span>
            </p>
          </form>
        </div>
      </div>
      <div className="login-link">
        Already have an account?
        <span onClick={() => navigate("/login")}>Login</span>
      </div>
    </div>
  );
};

export default Register;
