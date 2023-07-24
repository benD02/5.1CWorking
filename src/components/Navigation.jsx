import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css"; // Import the external CSS file

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="./images/logo Devlink resized heading.jpg"
              alt="DevLink Logo"
              className="logo"
            />
            DevLink
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{ color: "black" }}>
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/findDev"
                  style={{ color: "black" }}
                >
                  Find Dev
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/findJob"
                  style={{ color: "black" }}
                >
                  Find job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/blog"
                  style={{ color: "black" }}
                >
                  Create Account/Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
