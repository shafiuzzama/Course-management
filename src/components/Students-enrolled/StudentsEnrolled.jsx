import React from "react";
import "./Students-enrolled.scss";
import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import Chip from "@mui/material/Chip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function StudentsEnrolled() {
  return (
    <>
      <div id="enroll-main-section">
        <div className="enroll-main">
          <img src={javaImg} alt="java" className="enroll-image" />
          <div className="enroll-heding">
            <h4>Learn java programming : for absolute beginners</h4>
            <div className="enroll-chip">
              <Chip label="Draft" style={{ width: "60px" }} />
              <span>3 days ago</span>
            </div>
          </div>
        </div>
        <div style={{ gap: "10px" }}>
          <button className="btn-preview">Preview</button>
          <button className="btn-edit">Edit</button>
          <button className="btn-manu">
            <MoreVertIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default StudentsEnrolled;
