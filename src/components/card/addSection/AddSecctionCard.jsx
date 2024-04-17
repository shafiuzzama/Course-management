import React from "react";
import "./addsectionCard.css";
import { data } from "../CardSection";
import Chip from "@mui/material/Chip";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";

function AddSecctionCard({ Chips, colors }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          className="add-card-sec"
          onClick={() =>
            navigate(
              "/instructor/myCourse/addCourses/course-progress/student-data"
            )
          }
        >
          <div className="card-inner-sec">
            <img src={data[0].image} alt="img" className="img-card" />
            <div className="card-dtl">
              <Chip label={Chips} color={colors} />
              <div className="heding-text">{data[0].heding}</div>
              <div className="stduent-icon">
                <span className="icons-sec">
                  <PermIdentityIcon />
                  24 Students enrolled
                </span>
                <div className="footer-day">{data[0].day} days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddSecctionCard;
