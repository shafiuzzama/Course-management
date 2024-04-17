import React from "react";
import "./landingPages.css";
import image from "../../assets/logo/Group.svg";
import { useNavigate } from "react-router-dom";

function LandingPages() {
  const navigate = useNavigate();
  return (
    <>
      <div id="main-section">
        <div className="card" style={{ border: "none" }}>
          <div className="logos">
            <img src={image} alt="logo" height={"71px"} width={"200px"} />
          </div>
          <div className="text-section">
            <div className=" text-center">
              <h3>Join our coding bootcamp today!</h3>
              <div className="heding-landing">
                Launch your career with e2e
                <span style={{ color: "red", fontWeight: "800" }}>H</span>iring
              </div>
            </div>
          </div>
          <div className="btn-landing ">
            <button className="btn-guest" onClick={() => navigate("/courses")}>
              Guest/ not registered user
            </button>
            <button
              className="btn-student"
              onClick={() => navigate("/student/register")}
            >
              Student module
            </button>
            <button
              className="btn-instructor"
              onClick={() => navigate("/instructor/register")}
            >
              Instructor Module
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPages;
