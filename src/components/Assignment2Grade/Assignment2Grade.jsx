import React from "react";
import AssignmentGrade from "../assignmentgrade/AssignmentGrade";

const Assignment2Grade = () => {
  return (
    <div>
      <div>
        <AssignmentGrade
          opc={0.1}
          message={""}
          heding={"Grading will be given after evaluation"}
          completed={"completed"}
          bcg={"#D7ECEC"}
          iconcolor={"#3AA2A0"}
        />
      </div>
    </div>
  );
};

export default Assignment2Grade;
