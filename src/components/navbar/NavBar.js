import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import cf from "../../assets/images/cf.jpg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <NavLink exact="true" to="/" className="nav-logo">
          Codeforces Helper
          <img src={cf} alt="CF" className="nav-image" />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/UpcomingContest"
              className="nav-links"
              onClick={handleClick}
            >
              Upcoming Contest
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/UpSolve"
              className="nav-links"
              onClick={handleClick}
            >
              UpSolve
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/Problems"
              className="nav-links"
              onClick={handleClick}
            >
              Problems
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/Friends"
              className="nav-links"
              onClick={handleClick}
            >
              Friends
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
