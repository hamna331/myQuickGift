import React from "react";
import "../Navbar/Nav.css";
import Logo from "../Images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Bootstrap" width="80" height="70" />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/gallery">
                Gallery
              </NavLink>
            </li>
          </ul>
          <form className="d-flex " role="search">
            <NavLink className="btn custom-btn text-black d-flex align-item-center " type="submit" to="/book">
              Book
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
