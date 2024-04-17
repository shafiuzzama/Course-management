import "./App.css";
import Router from "./Router/Router";
import Assignment2Grade from "./components/Assignment2Grade/Assignment2Grade";
import Assement from "./components/assesment/Assement";
import Assignment16 from "./components/assignment16/Assignment16";
import AssignmentGrade from "./components/assignmentgrade/AssignmentGrade";
import ContinueLearning from "./components/continuelearning/ContinueLearning";
import InstractorMyCourse from "./components/instractor-sections/InstractorMyCourse";
import SubmitAssignment from "./components/submitAssignment/SubmitAssignment";
function App() {
  return (
    <>
      <Router /> 
      {/* <ContinueLearning /> */}
     {/* <Assignment16  text="upcoming" bcg="#858585"  iconColor="white" /> */}
     {/* <AssignmentGrade message="A+ Grade" bcg="#D7ECEC" completed="completed" iconcolor="#3AA2A0" /> */}
     {/* <Assignment2Grade/> */}
  

    </>
  );
}
export default App;
