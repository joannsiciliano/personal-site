import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div className="NavBarDiv">
        <nav className="NavBar">
          <NavLink to="/" exact className="HomeButton">
            ☺︎
          </NavLink>
          <NavLink to="/project">Code</NavLink>
          <NavLink to="/post">Art</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <p></p>
        </nav>
      </div>
    </header>
  );
}
