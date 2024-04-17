import React, { useState } from "react";
import "./navbar.css";
import Divider from "@mui/material/Divider";
import logo from "../../assets/logo/Group.svg";
import "./navbar.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import instractor from "../../assets/logo/iNSTRUCTOR.svg";

function Navbar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(
      newValue === 0
        ? "/courses"
        : newValue === 1
        ? "/dashboard"
        : newValue === 2
        ? "/foum"
        : newValue === 3
        ? "/faq"
        : null
    );
  };
  const { pathname } = useLocation();

  return (
    <>
      <div className="navbar-sections">
        <Link to="/">
          <img src={logo} alt="somlog" height="40px" width="118px" />
          {pathname.startsWith("/instructor") ? (
            <img src={instractor} alt="instractor" />
          ) : null}
        </Link>
        {pathname === "/courses" ||
        pathname === "/faq" ||
        pathname === "/foum" ||
        pathname === "/dashboard" ||
        pathname.startsWith("/courses") ? (
          <>
            <div className="liest-section">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Courses" className="tab-liest" />
                <Tab label="Dashboard" className="tab-liest" />
                <Tab label="Form" className="tab-liest" />
                <Tab label="FAQs" className="tab-liest" />
              </Tabs>
              <li value={value} index={0}></li>
              <li value={value} index={1}></li>
              <li value={value} index={2}></li>
              <li value={value} index={3}></li>
            </div>
            <div className="btn-section">
              <Link to="/instructor/register" className="trach-text">
                Teach on e2eHiring
              </Link>
              <Divider
                orientation="vertical"
                style={{ color: "#000", borderWidth: "1px", height: "40px" }}
              />
              <button className="btn-login" onClick={() => navigate("./login")}>
                Login
              </button>
              <button
                onClick={() => navigate("./register")}
                className="btn-register"
              >
                Register now
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
