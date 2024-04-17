import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "../card/card";
import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { data } from "../card/CardSection";

const Dashboard = () => {
  const navigat = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data[0].name);
  const handleClick = () => {
    console.log("working");
    navigat(`/dashboard-card-details`);
  };
  return (
    <>
      <div id="main-dasbord-section">
        <div className="main-card">
          <h4>my course</h4>
          <div className="nav-sec">
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All" />
                <Tab label="Inprogress" />
                <Tab label="Completed" />
              </Tabs>
            </Box>
          </div>
          <div className="dashboard-Card">
            <Card
              image={javaImg}
              name={data[0].name}
              day={data[0].day}
              Assignments={data[0].assignments}
              time={data[0].time}
              chip={data[0].chip}
              key={data[0].id}
              heding={data[0].heding}
              onClick={handleClick}
            />
            <Card
              image={data[1].image}
              name={data[1].name}
              day={data[1].day}
              Assignments={data[1].assignments}
              time={data[1].time}
              chip={data[1].chip}
              key={data[1].id}
              heding={data[1].heding}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
