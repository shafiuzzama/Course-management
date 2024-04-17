import React, { useState } from "react";
import "./Add-basic-detais.css";
import imgss from "../../assets/file-uplode/file-icon.svg";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
function AddBasicDetails() {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="add-corses-section">
        <div id="basic-details">
          <div className="input-sec">
            <label for="Course Title">Course Title</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input-title"
            />
            <div className="input-inlin">
              <div className="course-category">
                <label for="Course Category">Course Category</label>
                <input
                  type="text"
                  placeholder="Select course category"
                  className="input-category"
                />
              </div>
              <div className="course-category">
                <label for="Course skill">Skill</label>
                <input
                  type="text"
                  placeholder="Select skill"
                  className="input-category"
                />
              </div>
            </div>
            <div>
              <p>Course thumbnail ( Short summary of this course )</p>
              <div
                className="img-inside"
                id={`dropzone ${dragging ? "dragging" : ""}`}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Button
                  component="label"
                  startIcon={<img src={imgss} alt="uplode" />}
                >
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                  <VisuallyHiddenInput type="file" />
                </Button>
                {image ? (
                  <div style={{ display: "flex" }}>
                    <div>Drag files here or</div>
                    <Link to={"#"}>Browse</Link>
                  </div>
                ) : null}
              </div>
              <p>Supported format : PNG, JPEG</p>
            </div>
            <div>
              <p>About Course ( Short summary of this course )</p>
              <textarea
                type="text"
                placeholder="Enter about course"
                className="text-areas"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBasicDetails;
