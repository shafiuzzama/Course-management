import React, { useState } from "react";
import "./submitassignment.css";
import assingmenticon from "../../assets/Mask Group 29/Mask Group 29.png";
import cancle from "../../assets/assignmenticob/Group 5389.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const SubmitAssignment = ({ setOpen }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    // console.log(name);
    if (file) {
      const reader = new FileReader();
      setName(file.name);
      // console.log(reader);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div className="submit-outersection">
        <div className="submit-doc-section">
          <h1 className="sumbit-text">Submit Assignment</h1>
          <div className="submit-innersection">
            <Button component="label" onChange={handleFileChange}>
              <img src={assingmenticon} alt="som" className="assingmenticon" />
              <VisuallyHiddenInput type="file" />
            </Button>
            <p>
              Drop your assignment here or <span>Browse</span>
            </p>
            <p>Supported : Doc, Pdf ( 5Mb max)</p>
          </div>
          {image ? (
            <div className="img-after-uplode">
              <div>
                <img
                  src={assingmenticon}
                  alt="Preview"
                  className="img-folder"
                />
                <span>somt{name}</span>
              </div>
              <img
                src={cancle}
                alt="cancle"
                className="cancle-icons"
                onClick={() => setImage(null)}
              />
            </div>
          ) : (
            <p className="No-file-uploaded">No file uploaded</p>
          )}
        </div>
        <div className="submit-btn">
          <button onClick={() => setOpen(false)} className="submit-btn1">
            cancel
          </button>
          {image ? (
            <button
              className="submit-btn2"
              onClick={() =>
                navigate(
                  "/dashboard-card-details/card-status/assignment-status"
                )
              }
            >
              submit
            </button>
          ) : (
            <button className="submit-btn2" style={{ opacity: "0.5" }}>
              submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitAssignment;
