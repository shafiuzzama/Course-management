import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./customseparator.css";
// import { styled } from '@mui/system';
// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function CustomSeparator() {
  const breadcrumbs = [
    <Typography
      key="1"
      sx={{ color: "1D366F", fontFamily: "Open Sans", fontSize: "15px" }}
    >
      My Courses
    </Typography>,
    <Typography
      key="2"
      sx={{
        color: "1D366F",
        fontFamily: "Open Sans",
        fontSize: "15px",
      }}
    >
      Computer science
    </Typography>,
    <Typography
      key="3"
      sx={{
        color: "1D366F",
        fontFamily: "Open Sans",
        fontSize: "15px",
      }}
    >
      Learn java programming : for absolute beginners
    </Typography>,
    <Typography
      key="4"
      sx={{
        color: "1D366F",
        fontFamily: "Open Sans",
        fontSize: "15px",
      }}
    >
      Topic 1
    </Typography>,
    <Typography
      key="5"
      sx={{
        color: "1D366F",
        fontFamily: "Open Sans",
        fontSize: "15px",
      }}
    >
      Assignment 1
    </Typography>,
  ];

  return (
    <Stack>
      <Breadcrumbs
        sx={{ display: "flex", alignItems: "center" }}
        separator="›"
        aria-label="breadcrumb"
        className="custom-separator"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
