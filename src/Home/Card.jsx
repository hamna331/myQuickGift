import React from "react";
import "../Home/Home.css";
import gold from "../Images/golden-gift.png";
import pres from "../Images/Presentation.png";
import uni from "../Images/unique-gift.png";
import { NavLink } from "react-router-dom";

function Card() {
  return (
    <div className="container-fluid home-sections-p">
      <div className="container mb-5">
        {/* card 1 */}
        <div className="row md-reverse w-100">
          <div className="col-sm-12 col-md-12 col-lg-4 text-center mt-5">
            <img src={pres} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8  ">
            <div className="content ">
              <h2 className=" text-light mb-5">
                The Art of Presentation with Professional Wrapping
              </h2>
              <p className=" text-white ">
                Our experienced gift-wrappers turn ordinary presents into
                dazzling gift-giving experiences! We offer custom gift-wrapping
                services for all types of occasions.
              </p>
              <button type="button" className="btn-primary-1 mt-0">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="row  h-100 ">
          <div className="col-sm-12 col-lg-8 col-md-8">
            <div className="content">
              <h2 className=" text-light">Golden Gift Program</h2>
              <p className="text-white">
                Eliminate the process of finding and presenting gifts for
                companies employees and clients.
              </p>
              <NavLink
                type="button "
                className="  btn-primary-1  d-flex align-items-center"
                to="/form"
              >
                LEARN MORE
              </NavLink>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <img src={gold} alt="" className="img-fluid mt-5" />
          </div>
        </div>
        {/* card 3 */}
        <div className="row md-reverse  ">
          <div className="col-sm-12 col-lg-4 text-center ">
            <img src={uni} alt="" className="img-fluid mt-5 mb-5" />
          </div>
          <div className="col-sm-12 col-lg-8 ">
            <div className="content mb-5 ml-5 ">
              <h2 className=" text-light ">
                Unique Gift Finds Surprise and Delight
              </h2>
              <p className=" text-white">
                Struggling to find the perfect gift? Our team of gift curators
                will help you uncover rare and unique gifts that will leave your
                recipients speechless.
              </p>
              <button type="button" className=" btn-primary-1 mt-0">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
