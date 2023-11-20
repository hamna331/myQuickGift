import React from "react";
import "../Shops/Shop.css";
import Sho from "../Images/shop-banner.png";
import wom from "../Images/jodie-comer-most-beautiful-woman-p.png";
import man from "../Images/image-happy-brunette-man-wearing-260nw-1489874846.webp";
import kids from "../Images/2336-FF-kids-Carousel-hero-1920x1080.jpeg";
import babies from "../Images/shutterstock_189429203.jpg";
import { NavLink } from "react-router-dom";

function Shop() {
  return (
    <>
      <div className="container-fluid navbar-bg">
        <nav className="row navbar navbar-light justify-content-between">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <ul className="list-unstyled">
              <li>
                <h2 className="navbar-brand p-0 m-0">QUICK WRAP</h2>
              </li>
              <li>
                <p className="p-0 m-0  ">Shop</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center ">
            <form className="form-inline ">
              <div className="input-groups  ">
                <input className="form-control-sm " placeholder="Search" />
                <button className="btn-1" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div className="container mt-73">
        <div className="img-box">
          <img src={Sho} alt="shop-banner" className="w-100" />
        </div>
      </div>

      <div className="container mt-60">
        <h2 className="justify-content-center text-dark">Shop by Category</h2>
      </div>

      <div className="container mb-5">
        <div className="row d-flex">
          <div className="col-md-12 col-lg-3">
            <NavLink className="navlink images-fluid" to="/card">
              <img src={wom} className="rounded-circle" alt="" />
              <h2>Woman</h2>
            </NavLink>
          </div>

          <div className="col-lg-3">
            <NavLink className="navlink images-fluid" to="/Cart">
              <img src={man} className="rounded-circle" alt="" />
              <h2>Man</h2>
            </NavLink>
          </div>

          <div className="col-lg-3">
            <NavLink className="navlink images-fluid" to="/Kids">
              <img src={kids} className="rounded-circle" alt="" />
              <h2>Kids</h2>
            </NavLink>
          </div>

          <div className="col-lg-3">
            <NavLink className="navlink images-fluid" to="/Babies">
              <img src={babies} className="rounded-circle" alt="" />
              <h2>Babies</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
