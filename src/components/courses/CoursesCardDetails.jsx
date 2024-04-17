import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import MyTabs from "./MyTabs";
import "./CoursesCardDetails.css";
import Divider from "@mui/material/Divider";
import SizesChips from "./SizesChips";
import Modals from "../Certificate-modal/Modal";
import { useState } from "react";
import Register from "../register-login/Register";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";

function CoursesCardDetails() {
  const [open, setOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const navigate = useNavigate();

  const handleOpenEnroll = () => {
    if (!isEnrolled) {
      setOpen(true);
      setIsEnrolled(true);
    } else navigate("/dashboard-card-details/card-status");
  };
  return (
    <>
      <Modals
        open={open}
        setOpen={setOpen}
        ModalsContent={<Register setOpen={setOpen} title="Register Now" />}
      />
      <div id="course-details">
        <div className="primaryDiv1">
          <div>
            <div className="breadCrumbsClass">
              <div className="course-text">
                Allcourses
                <NavigateNextIcon fontSize="small" color="" />
                Java
                <NavigateNextIcon fontSize="small" />
                Python
              </div>
            </div>
            <div>
              <SizesChips />
            </div>
            <div className="headingClassmain">
              <p className="headingClass">
                <b>Learn java programming : for absolute beginners</b>
              </p>
            </div>
            <div className="paraCourse">
              <p className="paraCourse1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </p>
            </div>
            <div className="list-item">
              <li>By Dev Kanda</li>
              <li>12 Assignments</li>
              <li>12 days</li>
              <li>Added 2 days ago</li>
            </div>
            <div className="btn-completed">
              <button className="btn-enroll" onClick={handleOpenEnroll}>
                {isEnrolled ? "Start Learning Now" : "Enroll Now"}
                {!isEnrolled
                  ? navigate("/dashboard-card-details/card-status")
                  : null}
              </button>
              {isEnrolled ? (
                <div className="btn-inprogress">
                  <div className="btn-outer-section">
                    <div className="in-progress-text">
                      <CircleIcon fontSize="string" color="warning" />
                      In progress
                    </div>
                    <Divider orientation="vertical" className=" divider-sec" />
                    <div className="completed-text">50% completed</div>
                  </div>
                  <div>
                    <span className="date-progess">
                      last activity on 09/04/24
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="primaryDiv2">
            <img src={javaImg} alt="img" />
          </div>
        </div>
        <div className="tabNav">
          <MyTabs isEnrolled={isEnrolled} />
        </div>
      </div>
    </>
  );
}

export default CoursesCardDetails;
