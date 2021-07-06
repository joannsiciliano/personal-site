import React from "react";
import resume from "./JRSdevresume2021.png";

export default function Resume() {
  return (
    <div className="ResumeDiv">
      <a href="https://github.com/joannsiciliano/" target="_blank">
        <img src={resume} className="Resume" />
      </a>
    </div>
  );
}
