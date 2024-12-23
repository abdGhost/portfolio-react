import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          MyPortfolio
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="search-container ms-3">
            <input
              className="search-input"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            className="btn btn-outline-secondary ms-3"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>

          {/* CTA */}
          <Link to="/contact" className="btn btn-primary ms-3">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
