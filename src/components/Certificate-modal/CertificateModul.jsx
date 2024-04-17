import React from "react";
import "./certificate-modul.css";
import ClearIcon from "@mui/icons-material/Clear";
import DownloadIcon from "@mui/icons-material/Download";

function CertificateModul({ setOpen }) {
  return (
    <>
      <div>
        <div className="cetificate-section">
          <div className="cetificate-hader">
            <div className="heding-text">Certificate</div>
            <div>
              <button className="cetificate-btn">
                <DownloadIcon />
                Download
              </button>
              <ClearIcon
                onClick={() => {
                  setOpen(false);
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="cetificate-body">
            <div className="cetificate-background">
              <div className="cetificate-text">
                <h4 style={{ padding: "0 20px" }}>cetificate of</h4>
                <span className="cetificate-text-brack">compelition</span>
              </div>
            </div>
            <div className="name-text">
              <div style={{ textAlign: "center" }}>This is to certify that</div>
              <h1>janmenjaya biswal</h1>
            </div>
            <p className="dumy-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div className="footer-sec">
              <div
                style={{
                  borderTop: "1px solid #ccc",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                Date
              </div>
              <div
                style={{
                  borderTop: "1px solid #ccc",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                Signauter
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateModul;
