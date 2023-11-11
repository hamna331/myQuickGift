import React from 'react';
import '../Home/Home.css';
import "font-awesome/css/font-awesome.min.css";

function Location() {
  return (
    <div className="container-fluid mt-5 p-5">
      <div className="container home-sections-p bg-white">
        <h2 className="text-center mt-0 justify-content-center text-black">Three locations for all gift-wrapping needs</h2>
        <div className="row md-reverse mt-5">
          <div className="col-lg-6">
            <div className="mapouter h-100">
              <div className="gmap_canvas h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1cEJxeYn2xh0NPdSnkR89cI8DxnWcx00&ehbc=2E312F" width="100%" height="500"></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-0">
            <ul className="list-unstyled Add">
              <li>
                <i className="fa fa-map-marker fa-3x  mt-2"></i> 
                <p className="mb-0 ml-2 mt-0 text-black">
                  Location 1 <br />
                  Address Line 1, City, State, Zip Code<br />
                  Available Mondays, Tuesdays | 9 AM - 5 PM<br />
                  <a href="#">View Map</a>
                </p>
              </li>
              <li>
                <i className="fa fa-map-marker fa-3x  mt-2"></i> 
                <p className="mb-0 ml-2 text-black">
                  Location 2 <br />
                  Address Line 1, City, State, Zip Code<br />
                  Available Mondays, Tuesdays | 9 AM - 5 PM<br />
                  <a href="#">View Map</a>
                </p>
              </li>
              <li>
                <i className="fa fa-map-marker fa-3x  mt-2"></i> 
                <p className="mb-0 ml-2 text-black">
                  Location 3 <br />
                  Address Line 1, City, State, Zip Code<br />
                  Available Mondays, Tuesdays | 9 AM - 5 PM<br />
                  <a href="#">View Map</a>
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
