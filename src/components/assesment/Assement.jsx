import React from "react";
import "./assesment.css";
import BootstrapDrop from "./BootstrapDrop";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ClearIcon from "@mui/icons-material/Clear";
const Assement = ({ setOpen }) => {
  return (
    <div className="assesment-outersection">
      <div className="assesment-innersection">
        <div className="assentment-icon">
          <div className="assentment-text">Assessment 1</div>
          <ClearIcon
            onClick={() => setOpen(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="assesment-innerBorder"></div>
        <div className="assesment-inputBox">
          <div className="assesment-title">Title</div>
          <input type="text" placeholder="Enter assessment 1 title" />
        </div>
        <div className="MultipleSelect">
          <div className="assesment-time">Time Duration (in days)</div>
          <BootstrapDrop />
        </div>
        <div className="text-area-field">
          <span className="text-desc">Description</span>
          <ReactQuill
            theme="snow"
            placeholder="Enter assesstment 1 description"
            style={{ height: "200px" }}
          ></ReactQuill>
        </div>
        <div className="btn-sectons">
          <button className="btn-cancel" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="btn-submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Assement;
