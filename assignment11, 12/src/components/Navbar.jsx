import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for additional styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/home"
                end
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                Blogs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                Product Catalog
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-outline-success" type="submit">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
