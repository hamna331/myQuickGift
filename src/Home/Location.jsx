import React from "react";
import "../Home/Home.css";
import "font-awesome/css/font-awesome.min.css";

function Location() {
  return (
    <div className="container-fluid addresses mt-5 p-5 bg-light ">
      <div className="container text-dark">
        <div className="d-flex justify-content-center img-fluid text-dark">
          <h2 className="text-dark text-center">
            Three Locations For All Your Gift-Wrapping Needs
          </h2>
        </div>
        <div className="text-dark text-center">
          <p className="text-dark">
            In the area and need presents wrapped quickly? From December 15th to
            24th, we’re offering gift-wrapping services at our three locations.
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
                <i className="fa fa-map-marker me-2 "></i>
                <p className="mb-0 ml-2 text-dark">
                  Green Acres Mall
                  <br />
                  2034 Green Acres Mall, Sunrise Hwy, Valley Stream, NY 11581
                </p>
              </li>
              <li className="d-flex ">
                <i className="fa fa-map-marker me-2"></i>
                <p className="mb-0 ml-2 text-dark">
                  Queens Center Mall
                  <br />
                  90-15 Queens Blvd, Queens, NY 11373
                </p>
              </li>
              <li className="d-flex">
                <i className="fa fa-map-marker me-2"></i>
                <p className="mb-0 ml-2 text-dark">
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
  );
}

export default Location;
