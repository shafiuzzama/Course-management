import React from "react";
import "./BootstrapDrop.css";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
const BootstrapDrop = () => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="dropdown-toggle drop-section "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select time duration (in days)
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BootstrapDrop;
