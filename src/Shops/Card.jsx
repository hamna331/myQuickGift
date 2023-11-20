import React from "react";
import Common from "./Common";
import "../Shops/Shop.css";
import { NavLink } from "react-router-dom";

function Card() {
  return (
    <div>
      <div className="container-fluid navbar-bg">
        <nav className="row navbar navbar-light justify-content-between">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <ul className="list-unstyled">
              <li>
                <h2 className="navbar-brand p-0 m-0">QUICK WRAP</h2>
              </li>
              <li>
                <p className="p-0 m-0 d-flex justify-content-center">Shop</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
            <form className="form-inline">
              <div className="input-groups ">
                <input className="form-control-sm" placeholder="Search" />
                <button className="btn-1" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div className="container image-fluid-2  d-flex align-item-center">
        <h2 className="text-light ">Woman</h2>{" "}
      </div>
      <div className="container-fluid bg-light">
        <div className="container mb-5 ">
          <div className="row">
            {Common.map((val, ind) => (
              <div key={ind} className="col-lg-3">
                <NavLink
                  className="card-body position-relative bg-light"
                  to="/Shopitem"
                >
                  <img src={val.imgsrc} className="card-img-top" alt="..." />
                  <a
                    href="#"
                    className="btn-primary-1 quick-view-button w-50 d-flex align-items center"
                  >
                    Quick view
                  </a>
                  <div className="card-body">
                    <h5 className="card-title bg-light">{val.title}</h5>
                    {/* <p className="card-text">{val.price}</p> */}
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
