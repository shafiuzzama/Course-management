import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "20px",
  // backgroundColor: "#fff",
};

export default function Modals({ open, setOpen, ModalsContent }) {
  return (
    <>
      <Modal open={open} setOpen={setOpen} onClose={() => setOpen(false)}>
        <Box sx={style}>{ModalsContent}</Box>
      </Modal>
    </>
  );
}
