import React from "react";
import AddSecctionCard from "./AddSecctionCard";
import "./addsectionCard.css";

function Addcard() {
  return (
    <>
      <div className="main-content-section">
        <div className="add-heder-section">
          <span>My Courses (23)</span>
          <button>Add Courses</button>
        </div>
        <div className="card-progress">
          <AddSecctionCard Chips="Draft" />
          <AddSecctionCard Chips="Published" />
          <AddSecctionCard Chips="Unublished" />
        </div>
      </div>
    </>
  );
}

export default Addcard;
