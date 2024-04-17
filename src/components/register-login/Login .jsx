import React, { useState } from "react";
import Input from "../inpute/Input";
import passwordicon from "../../assets/passwordicon/eye.svg";
import "./login.css";
import { json, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Login({ heding, title }) {
  // const notify = () => toast("Wrong login or password.")

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[emailError,setEmailError]=useState("");
  const[passwordError,setPasswordError]=useState("");
  const[passwordVisible,setPasswordVisible]=useState(false)

  const togglePasswod=()=>{
    setPasswordVisible(!passwordVisible)
  }
  const handleEmailChange=(event)=>{
  setEmail(event.target.value);
  setEmailError(" ")
  }
  const handlePasswordChange=(event)=>{
 setPassword(event.target.value)
  setPasswordError("")
  }
  const navigate = useNavigate();
  console.log(email)
  console.log(password)

//   const handleSubmit=(event)=>{
//     event.preventDefault();
// let hassError=false;
//     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
//       setEmailError("invalid Email")
//        hassError=true;
//     }

//     if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password)){
//       setPasswordError("Password must contain at least one letter and one number");
//       hassError=true;
     
//     }
//     const data=JSON.parse(localStorage.getItem("users"));
//       const res=data.find((item)=> item.email===email)
//       if(res){
//         navigate("/courses")
//       }else{
//         alert("you don't have account ")
//       }
//   }

const handleSubmit = (event) => {
  event.preventDefault();
  let hasError = false;

  // Check if email is empty
  if (email.trim() === "") {
    setEmailError("Email is required");
    hasError = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setEmailError("Invalid Email");
    hasError = true;
  }

  // Check if password is empty
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
    const data = JSON.parse(localStorage.getItem("users"));
    const res = data.find((item) => item.email === email);
    if (res) {
      navigate("/courses");
    } else {
    //  notify();
    }
  }
};

  return (
    <div id="login-main-section">
      <div className="outersection">
        <div className="container-login">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">{heding}</h1>
            <h4 className="Register-Now">{title}</h4>

            <div className="login-input">
            <Input type={"email"} label={"Email id"} placeholder={"Email"} handleChange={handleEmailChange} value={email} />
            <div className="emailError">{emailError}</div>
            </div>
            <div className="login-input">

            <div className="password-input">
              <Input
                type={passwordVisible ? "text" : "password"}
                label={"Password"}
                placeholder={"Password"}
                handleChange={handlePasswordChange} value={password}/>
              {<img className="img-section" src={passwordicon} alt="icon" onClick={togglePasswod}/>}
            </div>
            <div className="passwordError">{passwordError}</div>
            </div>
            <button
              type="submit"
              // onClick={() => navigate("/student/register")}
              className="btn custom-button"
              style={{
                background: "#1D366F",
                color: "#FFFFFF",
              }}
            >
              Login
            </button>
            <p className="paragraph">
              By continuing, you agree to our <span>Terms of Use</span> and
              <span>Privacy policies</span>
            </p>
          </form>
        </div>
      </div>
      <div className="login-link">
      Don't have an account?  <span onClick={()=>navigate("/student/register")}>Register</span>
      </div>
      {/* <Toaster /> */}
    </div>
  );
}

export default Login;