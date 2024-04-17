import React from "react";
import error from "../assets/error/404-page-design-animation.gif";

function Error() {
  return (
    <>
      <div style={{ textAlign: "center", objectFit: "contain" }}>
        <img src={error} alt="error" width={"100%"} height={"700px"} />
      </div>
    </>
  );
}

export default Error;
