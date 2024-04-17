import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Modals from "../Certificate-modal/Modal";
import Assement from "../assesment/Assement";

function AddSyllabus() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modals
        open={open}
        setOpen={setOpen}
        ModalsContent={<Assement setOpen={setOpen} />}
      />
      <div className="syllabus-main">
        <div className="syllabus-heding">
          <div className="text-heding">0 Topics</div>
          <button className="add-Syllabus-btn">Add Topic</button>
        </div>
        <div className="syllabus-input-main">
          <input
            type="text"
            className="syllabus-input"
            placeholder="Topic name"
          />
          <DeleteIcon style={{ margin: "0 10px", color: "#999" }} />
        </div>
        <div className="add-assessment" onClick={() => setOpen(true)}>
          <AddIcon /> Add Assessment
        </div>
      </div>
    </>
  );
}

export default AddSyllabus;
