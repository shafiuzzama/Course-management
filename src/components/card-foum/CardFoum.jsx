import React from "react";
import "./cardfoum.css";
import clock from "../../assets/logo/clock.svg";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function CardFoum({ time, course, topic, answer }) {
  return (
    <>
      <div className="main-froum">
        <div className="card-froum">
          <div className="froum-sec">
            <span>Asked by Janmenjaya </span>
            <div>
              <div className="froum-logo-section" id="logo">
                <img src={clock} alt="clock" style={{ marginRight: "5px" }} />
                <span>{time} days</span>
              </div>
            </div>
          </div>
          <div>
            <div className="from-text-sec">
              <div className="froum-box"></div>
              <span className="from-box-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren
              </span>
            </div>
            <div className="from-chip">
              <div>
                <Chip
                  label={"Course: Course 1"}
                  style={{ marginRight: "5px" }}
                />
                <Chip label={"Topic : Topic 1"} />
              </div>
              <div className="logo-answer">
                <span
                  className="froum-logo-section"
                  id="logo"
                  style={{ marginRight: "5px" }}
                >
                  <img src={clock} alt="clock" style={{ marginRight: "5px" }} />
                  {time} days
                </span>
                <span className="check-icon">
                  <CheckCircleOutlineIcon style={{ marginRight: "0 10px" }} />
                  {answer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFoum;
