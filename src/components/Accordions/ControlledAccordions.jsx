import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import logo2 from "../../assets/logo/asignmentlogo.png";
import clockLogo from "../../assets/logo/clock.svg";
import "./Accordion.css";

function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        sx={{
          marginBottom: "5px",
          borderRadius: "5px 5px 1px 1px",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Open Sans",
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "Open Sans",
              fontSize: "12px",
            }}
          >
            Topic 1<li style={{ fontSize: "14px" }}>Lorem ipsum</li>
          </Typography>
          <div className="accordionSideTypo">
            <ul className="accordionSideTypo-ul">
              <li className="accordionSideTypo-li">
                <img src={logo2} alt="Logo 2" />
                12 Assignments
              </li>
              <li className="accordionSideTypo-li">
                <img src={clockLogo} alt="Clock Logo" />
                <span>12 days</span>
              </li>
            </ul>
          </div>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            padding: "0px",
          }}
        >
          <div
            style={{
              border: "1px solid #D8D8D8",
              padding: "15px",
              fontFamily: "Open Sans",
            }}
          >
            A1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur repellat iure, temporibus ullam nam ad ab quis
            suscipit,
          </div>
          <div
            style={{
              border: "1px solid #D8D8D8",
              padding: "15px",
              fontFamily: "Open Sans",
            }}
          >
            A1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur repellat iure, temporibus ullam nam ad ab quis
            suscipit,
          </div>
          <div
            style={{
              border: "1px solid #D8D8D8",
              padding: "15px",
              borderRight: "10px solid blur",
              fontFamily: "Open Sans",
            }}
          >
            A1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur repellat iure, temporibus ullam nam ad ab quis
            suscipit,
          </div>
          <div
            style={{
              border: "1px solid #D8D8D8",
              padding: "15px",
              fontFamily: "Open Sans",
            }}
          >
            A1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur repellat iure, temporibus ullam nam ad ab quis
            suscipit,
          </div>
          <div
            style={{
              border: "1px solid #D8D8D8",
              padding: "15px",
              fontFamily: "Open Sans",
            }}
          >
            A1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur repellat iure, temporibus ullam nam ad ab quis
            suscipit,
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ControlledAccordions;
