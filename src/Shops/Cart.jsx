import React from "react";
import "../Shops/Shop.css";
import { NavLink } from "react-router-dom";

import co from "../Images/electronic/km-9013-shaver-412_1200x1200.webp";

const cart = [
  {
    imgsrc: co,
    title: "km-9013-shaver",
    // price : $16
  },
  {
    imgsrc: co,
    title: "km-9013-shaver",
  },
  {
    imgsrc: co,
    title: "km-9013-shaver",
  },
  {
    imgsrc: co,
    title: "km-9013-shaver",
  },
];

function Cart() {
  return (
    <div>
      <div className="container image-fluid-2  d-flex align-item-center">
        <h2 className="text-light ">man</h2>{" "}
      </div>
      <div className="container-fluid bg-light">
        <div className="container mb-5">
          <div className="row">
            {cart.map((val, ind) => (
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

export default Cart;
