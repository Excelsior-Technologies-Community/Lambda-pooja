import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Logo Section */}
        <div className="footer-column">
        <div className="logo-row">
            <img
                src="https://lambda-demo-01.redpithemes.com/pluginfile.php/272/block_html/content/logo-site-01-sm-footer.png"
                alt="Lambda Logo"
                className="footer-logo"
            />
            <h5>LAMBDA</h5>
            </div>
     

          <p className="footer-text">PREMIUM MOODLE THEME</p>

          <a href="/" className="buy-link">
            <i className="fa fa-caret-right"></i> BUY THEME LAMBDA NOW!
          </a>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><i className="fa fa-caret-right"></i> Features</li>
            <li><i className="fa fa-caret-right"></i> Components</li>
            <li><i className="fa fa-caret-right"></i> H5P</li>
            <li><i className="fa fa-caret-right"></i> Support</li>
            <li><i className="fa fa-caret-right"></i> Documentation</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Popular Categories</h3>
          <ul>
            <li><i className="fa fa-caret-right"></i> Society and Environment</li>
            <li><i className="fa fa-caret-right"></i> Art and Media</li>
            <li><i className="fa fa-caret-right"></i> Literacy</li>
            <li><i className="fa fa-caret-right"></i> Physical Education</li>
            <li><i className="fa fa-caret-right"></i> Science and Mathematics</li>
          </ul>
        </div>

        {/* Announcements */}
        <div className="footer-column">
          <h3>Latest announcements</h3>

          <div className="announcement">
            <span>30 Dec, 12:43</span>
            <span>Admin User</span>
            <p>Suggestions for course design</p>
          </div>

          <div className="announcement">
            <span>30 Dec, 12:39</span>
            <span>Admin User</span>
            <p>Mobile hybrid teaching sets</p>
          </div>

          <div className="announcement">
            <span>30 Dec, 12:38</span>
            <span>Admin User</span>
            <p>The importance of digital skills</p>
          </div>

          <a href="/" className="older-link">
            Older topics ...
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="bottom-left">
          <p>
            <i className="fa fa-external-link-square"></i> Lambda Premium
            Moodle Theme
          </p>

          <p>(c) Copyright 2025 redPiThemes. All rights reserved.</p>

          <a href="/">Data retention summary</a>
        </div>

        <div className="social-icons">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
            <a href="/"><i className="fab fa-x-twitter"></i></a>
        </div>

      </div>
     </footer>
  );
};

export default Footer;