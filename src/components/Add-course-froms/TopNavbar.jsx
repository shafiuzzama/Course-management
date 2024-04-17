import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddBasicDetails from "./AddBasicDetais";
import AddSyllabus from "./AddSyllabus";
import DescribeCourse from "./DescribeCourse";
import { useNavigate } from "react-router-dom";

const steps = ["Add basic detais", "Describe course", "Add Syllabus"];

function TopNavbar() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [add, setAdd] = useState(100 / 3);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1D366F" : "#308fe8",
    },
  }));
  const navigedate = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setAdd((val) => val + 33.33);
  };
  const handelClick = () => {
    !(activeStep === steps.length - 1)
      ? navigedate()
      : navigate("/instructor/myCourse/addCourses/course-progress");
  };
  const handelBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setAdd((val) => val - 100 / 3);
  };
  return (
    <>
      <div className="top-navsec">
        <div className="course-nav-content">
          <div className="heding-add-course">Add Course</div>
          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
          </div>
          <div>
            <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handelBack}
            >
              Back
            </Button>
            <Button
              onClick={handelClick}
              variant="contained"
              style={{ margin: "0 10px" }}
              disabled={activeStep === 3}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
        <BorderLinearProgress variant="determinate" value={add} />
      </div>
      {activeStep === 0 ? (
        <AddBasicDetails />
      ) : activeStep === 1 ? (
        <DescribeCourse />
      ) : activeStep === 2 ? (
        <AddSyllabus />
      ) : null}
    </>
  );
}

export default TopNavbar;
