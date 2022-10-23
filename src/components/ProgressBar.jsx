import React from "react";
import "./progessBar.css";

const ProgressBar = (props) => {
  return (
    <div
      className="pBar"
      style={{ height: "7px", width: "700px", backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <div
        style={{
          height: "100%",
          width: props.progress,
          backgroundColor: "rgb(251, 211, 31)",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
