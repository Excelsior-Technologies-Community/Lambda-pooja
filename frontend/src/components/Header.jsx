import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaUser,
  FaLock,
  FaAngleRight,
  FaHome,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

function Header() {

const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <header className="header-top">
        <div className="logo-section">
          <img
            src="https://lambda-demo-01.redpithemes.com/pluginfile.php/1/core_admin/logo/0x200/1758302184/logo-site-01.png"
            alt="Lambda"
          />
        </div>

        <div className="login-wrapper">
          <div className="login-row">
            <div className="field">
              <span className="field-icon">
                <FaUser />
              </span>
              <input type="text" placeholder="Username" />
            </div>

            <div className="field">
              <span className="field-icon">
                <FaLock />
              </span>
              <input type="password" placeholder="Password" />
            </div>

            <button className="login-btn">
              <FaAngleRight />
            </button>
          </div>

          <a href="/" className="forgot-password">
            Forgotten your username or password?
          </a>
        </div>
      </header>

      <nav className="navbar">
        <ul className="menu">
          <li className="home-item active">
            <a href="/">
              <FaHome />
            </a>
          </li>

          <li className="dropdown">
              <a href="/">
                Courses <FaChevronDown className="arrow" />
              </a>

              <ul className="dropdown-menu">
                <li><Link to="/all_Courses">All Courses</Link></li>
                <li><Link to="/course_details">Sample Course</Link></li>
                <li><a href="/tiles-course">Tiles Course Format</a></li>
                <li><a href="/buttons-course">Buttons Course Format</a></li>
                <li><Link to="/course_details">Course Details</Link></li>
              </ul>
            </li>

         <li className="dropdown">
            <a href="/">
              Features <FaChevronDown className="arrow" />
            </a>

            <ul className="dropdown-menu">
              <li><Link to="/typography">Typography</Link></li>
              <li><Link to="/theme_core">Theme Core Features</Link></li>
              <li><Link to="/flexible_layout">Flexible Layout</Link></li>
              <li><Link to="/responsive">Responsive Design</Link></li>
              <li><Link to="/multilanguage">Multilanguage</Link></li>
              <li><Link to="/built-in-components">Built-in Components</Link></li>
            </ul>
          </li>

          <li className="dropdown">
              <a href="/">
                Pages <FaChevronDown className="arrow" />
              </a>

              <ul className="dropdown-menu">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/gallery">Image Gallery</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><a href="/login">Login Page</a></li>
              </ul>
            </li>

          <li>
            <a href="/">Documentation</a>
          </li>
        </ul>

        <div className="search-container">
  {showSearch && (
    <input
      id="navbarsearchbox"
      type="text"
      name="q"
      autoComplete="off"
      aria-label="Search courses"
      placeholder="Search courses"
      className="search-input"
    />
  )}

        <div
            className="search-btn"
            onClick={() => setShowSearch(!showSearch)}
        >
            <FaSearch />
        </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

