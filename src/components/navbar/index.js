import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <NavLink exact="true" to="/" className="navbarLogo">
          Codeforces Helper
          <img src="/images/cf.jpg" alt="CF" className="navbarImage" />
        </NavLink>

        <ul className={click ? "navbarMenu active" : "navbarMenu"}>
          <li className="navbarItem">
            <NavLink
              exact="true"
              to="/"
              className="navbarLinks"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="navbarItem">
            <NavLink
              exact="true"
              to="/UpcomingContest"
              className="navbarLinks"
              onClick={handleClick}
            >
              Upcoming Contest
            </NavLink>
          </li>
          <li className="navbarItem">
            <NavLink
              exact="true"
              to="/UpSolve"
              className="navbarLinks"
              onClick={handleClick}
            >
              UpSolve
            </NavLink>
          </li>
          <li className="navbarItem">
            <NavLink
              exact="true"
              to="/Problems"
              className="navbarLinks"
              onClick={handleClick}
            >
              Problems
            </NavLink>
          </li>
        </ul>
        <div className="navbarIcon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
