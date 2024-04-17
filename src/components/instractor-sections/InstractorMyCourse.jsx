import React from "react";
import sad from "../../assets/instractor-my-corse/Group 63848.svg";
import "./instractorMyCourse.css";
import { useNavigate } from "react-router-dom";

function InstractorMyCourse() {
  const navigate = useNavigate();
  return (
    <>
      <div id="instractor-my-course">
        <h4>My Courses (0)</h4>
        <div className="icon-sed">
          <img src={sad} alt="sad" />
          <p>No courses added</p>
          <button
            className="btn-my-cources"
            onClick={() => navigate("/instructor/myCourse/addCourses/")}
          >
            Add Course Now
          </button>
        </div>
      </div>
    </>
  );
}

export default InstractorMyCourse;
