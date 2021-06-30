import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div className="NavBarDiv">
        <nav className="NavBar">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/post">Blog</NavLink>
          <NavLink to="/about">About Me!</NavLink>
          <p>☺︎</p>
        </nav>
      </div>
    </header>
  );
}
