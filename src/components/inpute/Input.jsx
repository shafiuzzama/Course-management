import React from "react";
// reusable component
import "./input.css";
const Input = ({ type, label, placeholder,handleChange }) => {
  return (
    <>
      <div>
        <div className="mb-3 input-container">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label shadow-none"
            id="input-lable"
          >
            {label}
          </label>
          <input
            type={type}
            placeholder={placeholder}
            className="form-control shadow-none"
        onChange={handleChange}  />
        </div>
      </div>
    </>
  );
};

export default Input;
