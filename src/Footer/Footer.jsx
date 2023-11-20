import React from "react";
import "../Footer/Footer.css";
import qwg from "../Images/qwg-gold.svg";
import you from "../Images/youtube.svg";
import tw from "../Images/twitter.svg";
import ti from "../Images/tiktok.svg";
import ins from "../Images/instagram.svg";
import li from "../Images/linkedin.svg";
import fb from "../Images/facebook.svg";
import pi from "../Images/pintrest-white.svg";

function Footer() {
  return (
    <div className="container-fluid footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
            <img src={qwg} alt="logo" className=" logo mt-0" />
            <p className="mt-0 mb-1 text-white">Queens, NY</p>
            <p className="mb-0 text-white mt-0">(929) 374-7424</p>
            <a
              href="mailto:contactus@quickwrapgifts.com"
              className=" mail mb-2 text-white"
            >
              contactus@quickwrapgifts.com
            </a>
            <div className="d-flex social-media-icons mb-2 text-white mt-0 pt-0">
              <a href="/">
                <img src={you} alt="logo" className="mt-0" />
              </a>
              <a href="/">
                <img src={ti} alt="logo" className="mt-0" />
              </a>
              <a href="/">
                <img src={ins} alt="logo" className="mt-0" />
              </a>
              <a href="/">
                <img src={tw} alt="logo" className="mt-0" />
              </a>
              <a href="/">
                <img src={fb} alt="logo" className="mt-0" />
              </a>
              <a href="/">
                <img src={li} alt="logo" className="mt-0" />
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 footer-links ">
            <ul className=" ms-auto list-unstyled d-flex justify-content-evenly   ">
              <li>
                <a href="/">About </a>
              </li>
              <li>
                <a href="/">Wrapping</a>
              </li>
              <li>
                <a href="/">Shop Gifts </a>
              </li>
              <li>
                <a href="/">Reviews</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Booking</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Affiliates</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="d-flex justify-content-center m-0">
        <p className="text-white mt-0">
          © 2023 Quick Wrap Gifts | All Rights are Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
