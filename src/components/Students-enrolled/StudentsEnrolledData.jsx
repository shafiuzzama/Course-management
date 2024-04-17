import React from "react";
import "./Students-enrolled.scss";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import StudentsEnrolled from "./StudentsEnrolled";

function createData(name, calories, fat, carbs, protein, action) {
  return { name, calories, fat, carbs, protein, action };
}

const rows = [
  createData(
    "Sunil",
    "sunil@e2ehiring.com",
    "20 jan 2024",
    "90 %",
    "3 need to be reviewed",
    "View Profile"
  ),
  createData(
    "Shafi",
    "shafi@e2ehiring.com",
    "23 jan 2024",
    "70 %",
    "3 need to be reviewed",
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button className="btn-review">Review</button> <span>View Profile</span>
      </div>
    </>
  ),
  createData(
    "Janmenjaya",
    "janmenjaya@e2ehiring.com",
    "2 jan 2024",
    "Completed",
    "3 need to be reviewed",
    "View Profile"
  ),
  createData(
    "Shanker",
    "shanker@e2ehiring.com",
    "3 feb 2024",
    "70 %",
    "3 need to be reviewed",
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button className="btn-review">Review</button> <span>View Profile</span>
      </div>
    </>
  ),
  createData(
    "Nagraj",
    "nagraj@e2ehiring.com",
    "12 frb 2024",
    "Completed",
    "3 need to be reviewed",
    "View Profile"
  ),
];
function StudentsEnrolledData() {
  return (
    <>
      <StudentsEnrolled />
      <div id="StudentsEnrolledData">
        <div className="table-heder-section">
          <h5 style={{ margin: "15px 0" }}>2354 Students enrolled</h5>
          <div className="table-page-section">
            <div>
              <input
                type="text"
                placeholder="Search student by name, email ID"
                className="table-input"
              />
              <SearchIcon className="table-search-icon" />
            </div>
            <div className="table-count">
              <button className="table-content-btn">
                10 / page <KeyboardArrowDownIcon />
              </button>
              <Pagination count={4} variant="outlined" shape="rounded" />
            </div>
          </div>
        </div>
        <div>
          <div className="table-heding">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="table-header">STUDENT NAME</TableCell>
                    <TableCell className="table-header">EMAIL</TableCell>
                    <TableCell className="table-header">
                      ENROLLED DATE
                    </TableCell>
                    <TableCell className="table-header">PROGRESS</TableCell>
                    <TableCell className="table-header">
                      ASSIGNMENT GRADING
                    </TableCell>
                    <TableCell className="table-header">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>{row.protein}</TableCell>
                      <TableCell>{row.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentsEnrolledData;
