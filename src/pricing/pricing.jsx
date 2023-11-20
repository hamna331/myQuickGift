import React from "react";
import "../pricing/pricing.css";
import hero from "../Images/pricing-hero.png";
import Location from "../Home/Location";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <h1 className="page-title p-5 d-flex justify-content-center align-items-center text-light">
        PRICING & BUNDLES
      </h1>
      <div className="container">
        <div className="row padding-75px">
          <div className="col-lg-6 col-sm-12 col-md-12 center">
            <p className="text-center text-lg-start">
              We offer custom gift-wrapping services for all types of occasions.
              We are dedicated to elevating the experience of giving gifts to
              others. We provide an extensive selection of online gift-wrapping
              services, including unique gift wrapping, in-home gift wrapping,
              internet gift wrapping, retail gift-wrapping events, corporate
              gifting, and many more. We offer various services in New York, NY;
              the Bronx, NY; Valley Stream Long Island, NY; and Elmhurst, NY.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={hero} className="image" alt="pricing-image" />
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <ul className="page-navigator  d-flex justify-content-center flex-wrap flex-md-nowrap">
          <li className=" underline">
            <h3 className="fw-bold">
              <a href="itempricing">Item Pricing</a>
            </h3>
          </li>
          <li className="mr-0-sm">
            <h3 className="fw-bold">
              <div className="scrollto active" href="#at-home-packages">
                At-Home Packages
              </div>
            </h3>
          </li>

          <li className=" d-none d-lg-block">
            <h3 className="fw-bold">
              <a className="scrollto" href="vouchers">
                Vouchers
              </a>
            </h3>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-around ">
          {/* Gift Wrapping */}
          <div className=" col-lg-6 col-sm-12">
            <div className="pricing-box h-100 p-5">
              <p className="d-flex justify-content-center text-white  custom-size-heading">
                Gift Wrapping
              </p>
              <ul class="list-unstyled d-flex justify-content-between text-light">
                <li>
                  <p class="title mb-0 text-light">Mini</p>
                  <p className="text-light mt-0">0.75” to 3.5” or less</p>
                </li>
                <li>
                  <p class="title text-light">$2</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between text-light">
                <li>
                  <p class="title mb-0 text-light">Small</p>
                  <p className="text-light mt-0">0.75” to 3.5” or less</p>
                </li>
                <li>
                  <p class="title text-light">$4</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between text-light">
                <li>
                  <p class="title mb-0 text-light">Medium</p>
                  <p className="text-light mt-0">0.75” to 3.5” or less</p>
                </li>
                <li>
                  <p class="title text-light">$6</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between text-light">
                <li>
                  <p class="title mb-0 text-light">Large</p>
                  <p className="text-light mt-0">0.75” to 3.5” or less</p>
                </li>
                <li>
                  <p class="title text-light">$8</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between text-light">
                <li>
                  <p class="title mb-0 text-light">Surprised</p>
                  <p className="text-light mt-0">0.75” to 3.5” or less</p>
                </li>
                <li>
                  <p class="title text-light">$10</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Gift Bags */}
          <div className=" box col-lg-6 col-sm-12">
            <div className="pricing-box ">
              <p className="d-flex justify-content-center text-white custom-size-heading ">
                Gift Bags
              </p>
              <ul class="list-unstyled d-flex justify-content-between ">
                <li>
                  <p class="title mb-0 text-light">Small</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$3</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between ">
                <li>
                  <p class="title mb-0 text-light">Regular</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$4</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between">
                <li>
                  <p class="title mb-0 text-light">Large</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$5</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between ">
                <li>
                  <p class="title mb-0 text-light">Oversized</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$6</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between">
                <li>
                  <p class="title mb-0 text-light">Surprized</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$8</p>
                </li>
              </ul>
            </div>
            <div className="pricing-box gy-5">
              <p className="d-flex justify-content-center text-white custom-size-heading">
                Boxes
              </p>
              <ul class="list-unstyled d-flex justify-content-between ">
                <li>
                  <p class="title mb-0 text-light">Mini</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$2</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between">
                <li>
                  <p class="title mb-0 text-light">17 in Apparel Box</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$2</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between ">
                <li>
                  <p class="title mb-0 text-light">24 in Apparel Box</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$3</p>
                </li>
              </ul>
              <ul class="list-unstyled d-flex justify-content-between ">
                <li>
                  <p class="title mb-0 text-light">Jewelry Box</p>
                </li>
                <li>
                  <p class="title mb-0 text-light">$2</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="at-home-packages">
        <h3 className="d-flex justify-content-center mt-57 mb-61 mt-5 fw-bold">
          <span>At-Home Packages</span>
        </h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div>
              <p className="ful d-flex justify-content-center">
                Fulfilling a large wish list for your loved ones? We’ll come to
                your house and wrap them with these sweet deals.
              </p>
              <p className="ful">
                For oversized and supersized gifts, you <strong>must</strong>{" "}
                add these sizes separately. For example, if you select the
                $100.00 bundle and add a $20.00 supersized gift, you will have a
                $120.00 credit.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 text-size">
            <div class="bg-box">
              <h5 className="num p-1">$100</h5>
              <p className="para">20 gifts wrapped*</p>
            </div>
            <div class="bg-box">
              <h5 className="num p-1">$204</h5>
              <p className="para">40 gifts wrapped*</p>
            </div>
            <div class="bg-box">
              <h5 className="num p-1">$328</h5>
              <p className="para">60 gifts wrapped**</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <h3 className="d-flex justify-content-center mt-50">Vouchers</h3> */}
        {/* <p className="d-flex justify-content-center mt-16">Purchase your gift wrapping vouchers today for a discount on in-mall
          gift services.</p> */}
        <div className="row">
          <div class="container">
            <h3 class="d-flex justify-content-center mt-50 fw-bold mt-5">
              Vouchers
            </h3>
            <p class="d-flex justify-content-center mb-5">
              Purchase your gift wrapping vouchers today for a discount on
              in-mall gift services.
            </p>
            <div class="row ">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="card">
                  <div class="card-1 text-center">
                    <h4 className="fw-bold">$30.00 GIFT VOUCHER</h4>
                    <p className="text-center">
                      6 Small to Medium Sized Wrapped Gifts
                      <br /> 1 <b>FREE</b> Large Wrapped Gift
                    </p>
                  </div>
                  <div class="card-footer text-center  bg-white">
                    <button class="btn-primary-1">PURCHASE NOW</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="card">
                  <div class="card-1">
                    <h4 className="text-center fw-bold">$60.00 GIFT VOUCHER</h4>
                    <p className="text-center">
                      14 Small to Medium Sized Wrapped Gifts
                      <br /> 3 <b>FREE</b> Large Wrapped Gift
                    </p>
                  </div>
                  <div class="card-footer text-center  bg-white">
                    <button class=" btn-primary-1">PURCHASE NOW</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="card">
                  <div class="card-1">
                    <h4 className="text-center fw-bold">
                      $100.00 GIFT VOUCHER
                    </h4>
                    <p className="text-center">
                      20 Small to Medium Sized Wrapped Gifts
                      <br /> 5 <b>FREE</b> Large Wrapped Gift
                    </p>
                  </div>
                  <div class="card-footer text-center bg-white">
                    <button class=" btn-primary-1">PURCHASE NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid addresses mt-5 p-5 ">
          <div className="container text-white">
            <div className="d-flex justify-content-center img-fluid text-white">
              <h2 className="text-white text-center">
                Three Locations For All Your Gift-Wrapping Needs
              </h2>
            </div>
            <div className="text-white text-center">
              <p className="text-white">
                In the area and need presents wrapped quickly? From December
                15th to 24th, we’re offering gift-wrapping services at our three
                locations.
              </p>
            </div>
            <div className="row mt-4 align-items-center mt-5">
              <div className="col-lg-6">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1cEJxeYn2xh0NPdSnkR89cI8DxnWcx00&amp;ehbc=2E312F"
                      width="100%"
                      height="500"
                      title="locations-map"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mt-2 mt-lg-0 text-color ps-lg-5">
                <ul className="list-unstyled">
                  <li className="d-flex ">
                    <i className="fa fa-map-marker me-2"></i>
                    <p className="mb-0 ml-2 text-white">
                      Green Acres Mall
                      <br />
                      2034 Green Acres Mall, Sunrise Hwy, Valley Stream, NY
                      11581
                    </p>
                  </li>
                  <li className="d-flex ">
                    <i className="fa fa-map-marker me-2"></i>
                    <p className="mb-0 ml-2 text-white">
                      Queens Center Mall
                      <br />
                      90-15 Queens Blvd, Queens, NY 11373
                    </p>
                  </li>
                  <li className="d-flex">
                    <i className="fa fa-map-marker me-2"></i>
                    <p className="mb-0 ml-2 text-white">
                      The Mall at Bay Plaza
                      <br />
                      200 Baychester Ave, Bronx, NY 10475
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-banner">
        <h1>MAKE IT ELEGANT</h1>
        <button type="button" className="btn btn-dark">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Pricing;
