import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPages from "../components/LandingPage/LandingPages";
import CardSection from "../components/card/CardSection";
import Error from "./Error";
import Register from "../components/register-login/Register";
import Login from "../components/register-login/Login ";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import InstructorRegister from "../components/instructor/InstructorRegister";
import InstructorLogin from "../components/instructor/InstructorLogin";
import InstractorMyCourse from "../components/instractor-sections/InstractorMyCourse";
import TopNavbar from "../components/Add-course-froms/TopNavbar";
import CoursesCardDetails from "../components/courses/CoursesCardDetails";
import CardFroumSec from "../components/card-foum/CardFroumSec";
import FaqSection from "../components/courses/FaqSection";
import Dashboard from "../components/dashboard/Dashboard";
import DashboardCard from "../components/dashboard/DashboardCard";
import AddCources from "../components/Add-cources/AddCources";
import StudentsEnrolledData from "../components/Students-enrolled/StudentsEnrolledData";
import ContinueLearning from "../components/continuelearning/ContinueLearning";
import Assignment2Grade from "../components/Assignment2Grade/Assignment2Grade";
function Router({ id }) {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/courses" element={<CardSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/foum" element={<CardFroumSec />} />
        <Route path="/faq" element={<FaqSection />} />
        {/* <Route path="/Overview" element={<Overview />} /> */}
        <Route
          path={`/courses/courses-card-details/${id}`}
          element={<CoursesCardDetails />}
        />
        <Route
          path={`/dashboard-card-details/card-status`}
          element={<ContinueLearning />}
        />
        <Route path={`/dashboard-card-details`} element={<DashboardCard />} />
        <Route
          path="/register"
          element={<Register heading="Start learning" title="Register Now" />}
        />
        <Route
          path="/login"
          element={<Login heading="Welcome back" title="Login" />}
        />
        <Route
          path="/register/login"
          element={<Login heading="Welcome back" title="Login" />}
        />
        <Route
          path="/student/register"
          element={<Register heading="Start learning" title="Register Now" />}
        />
        <Route
          path="/student/login"
          element={<Login heading="Welcome back" title="Login" />}
        />
        <Route
          path="/card/login"
          element={<Login heading="Welcome back" title="Login" />}
        />
        <Route
          path="/card/register"
          element={<Register heading="Start learning" title="Register Now" />}
        />

        <Route
          path="/instructor/register"
          element={<InstructorRegister title="Register as Instructor" />}
        />
        <Route
          path="/instructor/login"
          element={
            <InstructorLogin heding="Welcome back" title="Instructor Login" />
          }
        />

        <Route path="/instructor/myCourse" element={<InstractorMyCourse />} />
        <Route path="/instructor/myCourse/addCourses" element={<TopNavbar />} />
        <Route
          path="/instructor/myCourse/addCourses/course-progress"
          element={<AddCources />}
        />
        <Route
          path="/instructor/myCourse/addCourses/course-progress/student-data"
          element={<StudentsEnrolledData />}
        />
        <Route
          path="/dashboard-card-details/card-status/assignment-status"
          element={<Assignment2Grade />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Router;
