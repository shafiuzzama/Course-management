import React from "react";
import "./addCources.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import search from "../../assets/serch-icon/search-24px.svg";
import AddSecctionCard from "../card/addSection/AddSecctionCard";

function AddCources() {
  return (
    <>
      <div id="add-section">
        <div className="add-sec-heding">
          <h4>My Courses (23)</h4>
          <button className="btn-add">Add Course</button>
        </div>
        <div className="add-input-sec">
          <div className="add-serch-icon">
            <input
              type="text"
              className="add-input"
              placeholder="Search your courses"
            />
            <img src={search} alt="serch" className="search-icon" />
          </div>
          <button className="add-btn-sec">
            <span style={{ fontSize: "10px" }}>Sort By</span>
            <span style={{ fontSize: "14px" }}>
              Most Recent <KeyboardArrowDownIcon />
            </span>
          </button>
        </div>
        <div className="add-cards">
          <AddSecctionCard Chips="Draft" />
          <AddSecctionCard Chips="Published" colors="success" />
          <AddSecctionCard Chips="Unublished" colors="primary" />
        </div>
      </div>
    </>
  );
}

export default AddCources;
