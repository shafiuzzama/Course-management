import React, { useState } from "react";
import CardFoum from "./CardFoum";
import search from "../../assets/serch-icon/search-24px.svg";
import Modals from "../Certificate-modal/Modal";
import AskModel from "../ask/AskModel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewQuestion from "../viewQustion/ViewQuestion";

function CardFroumSec() {
  const [open, setOpen] = useState(false);
  const [openQus, setOpenQus] = useState(false);
  const handleOpenEnroll = () => setOpen(true);
  const handleOpenQus = () => setOpenQus(true);

  const topics = [
    { id: "201", time: 8, course: 1, topic: 1, answer: "Not answered" },
    { id: "203", time: 5, course: 2, topic: 2, answer: "Answered" },
    { id: "204", time: 6, course: 3, topic: 3, answer: "Answered" },
    { id: "205", time: 7, course: 4, topic: 4, answer: "Answered" },
    { id: "206", time: 6, course: 5, topic: 5, answer: "Answered" },
  ];

  return (
    <>
      <Modals
        open={open}
        setOpen={setOpen}
        ModalsContent={<AskModel setOpen={setOpen} />}
      />
      <Modals
        open={openQus}
        setOpenQus={setOpenQus}
        ModalsContent={<ViewQuestion setOpenQus={setOpenQus} />}
      />
      <div id="froum-contener">
        <div className="froum-input">
          <div className="serch-inputs">
            <span className="input-search">
              <input type="text" className="inputs" placeholder="Search" />
              <img src={search} alt="search" className="serch-icon" />
            </span>
            <button className="btn-course">
              All course
              <KeyboardArrowDownIcon />
            </button>
            <button className="btn-course">
              All Topics
              <KeyboardArrowDownIcon />
            </button>
          </div>
          <div>
            <button className="btn-asked" onClick={handleOpenEnroll}>
              Ask
            </button>
          </div>
        </div>
        {topics.map((item) => (
          <div key={item.id} onClick={handleOpenQus}>
            <CardFoum
              answer={item.answer}
              time={item.time}
              course={item.course}
              topic={item.topic}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardFroumSec;
