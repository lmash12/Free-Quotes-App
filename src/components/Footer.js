import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul className="unordered-list">
          <li>
            <NavLink
              aria-label="Home page"
              style={({ isActive }) =>
                isActive ? { color: "rgb(249, 105, 14)" } : { color: "white" }
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="About page"
              style={({ isActive }) =>
                isActive ? { color: "rgb(249, 105, 14)" } : { color: "white" }
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="Contact page"
              style={({ isActive }) =>
                isActive ? { color: "rgb(249, 105, 14)" } : { color: "white" }
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>Lesley Mashaya © 2023</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
