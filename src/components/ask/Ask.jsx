import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AskModel from "./AskModel";
import ViewQuestion from "../viewQustion/ViewQuestion";
import SubmitAssignment from "../submitAssignment/SubmitAssignment";

const Ask = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="ask-outersection">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AskModel handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default Ask;
