import React, { useState } from "react";
import "./grade.css";
import cong from "../../assets/gradeicon/Group 65746.svg";
import star from "../../assets/staricon/Iconstar.jpg";
const Grade = ({ opc, message, heding }) => {
  const [color, setColor] = useState(false);
  const handelClick = () => {
    setColor(!color);
  };
  return (
    <div>
      <div className="grade-outersection" onClick={handelClick}>
        <img src={cong} alt="somg" style={{ opacity: color ? 1 : opc }} />
        <h3 style={{ color: "#999" }}>
          {color
            ? "Congratulations!!! You have secured"
            : "Grading will be given after evaluation"}
        </h3>
        <button style={{ opacity: color ? 1 : opc }}>
          <img src={star} alt="star" />
          <span className="grade-text">A+ Grade</span>
        </button>
      </div>
    </div>
  );
};

export default Grade;
