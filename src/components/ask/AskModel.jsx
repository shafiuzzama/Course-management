import React from "react";
import ComboBox from "./ComboBox";
import "./askmodel.css";
import ClearIcon from "@mui/icons-material/Clear";

function AskModel({ setOpen }) {
  return (
    <>
      <div className="Askmodel-outersection">
        <div className="icon-section">
          <p style={{ marginBottom: "10px" }}>Ask a question</p>
          <ClearIcon onClick={() => setOpen(false)} />
        </div>
        <div>
          <div className="Your-Question">Your Question</div>
          <textarea className="inner-box" placeholder="Add tsks"></textarea>
        </div>
        <div className="ComboBox">
          <div>
            <span>Select Course</span>
            <ComboBox label="Select Course" />
          </div>
          <div>
            <span>Select Topic</span>
            <ComboBox label="Select Topic" />
          </div>
        </div>
        <div className="bottom-border">
          <button className="Submit-Question">Submit question</button>
        </div>
      </div>
    </>
  );
}

export default AskModel;
