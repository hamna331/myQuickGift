import React from 'react';
import "./Book.css";
import Location from '../Home/Location';
import right from "../Images/star-right.png";
import left from "../Images/star-left.png";
import relax from "../Images/relax.png";
import wra from "../Images/emoji _wrapped present_ (gift).svg";
import vec from "../Images/Vector.png";

function Book() {
  return (
    <div>
      {/* <h1 className="page-title d-flex justify-content-center align-items-center d-md-none">GIFT WRAPPING SERVICES</h1> */}
      <h1 className="page-title justify-content-center align-items-center d-none d-md-flex">BOOK GIFT WRAPPING TODAY</h1>
      <div className="container">
        <p className="text-center mt-83 mb-38">
          We are dedicated to elevating the experience of giving gifts to others. We provide in-home gift wrapping for orders
          greater than $100. We are available in New York, NY; the Bronx, NY; Valley Stream Long Island, NY; and Elmhurst, NY.
        </p>

        <h2 className="text-center d-none d-lg-block mb-8 text-dark">Private Gift Wrapping Service <span className="text-grey">(2 Hours)</span></h2>
        <h2 className="text-center d-lg-none mb-8">In-Home Gift Wrapping Service <span className="grey">(2 Hours)</span></h2>

        <p className="text-center">
          Minimum of 20 gifts required. Check our price listings and available in-home
          packages here.
        </p>

        <iframe className="h-100 w-100" src="https://www.example.com" title="iframe-example"></iframe>
      </div>

      {/* Additional content */}
      <div className="container-fluid  bg-color p-5 d-block d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-center img-fluid">
            <img src={right} alt="star-right" />
            <h2 className="text-light">Gift Wrapping In-Store</h2>
            <img src={left} alt="star-left" />
          </div>

          <div className="text-light  mt-11 text-center">
            <p className="pb-3 text-light">
              In the area and need presents wrapped quickly? From December 15th to 24th, we’re offering gift-wrapping services at our three locations.
            </p>
            <div className="row text-white">
              <div className="col-lg-6">
                {/* Adjust the height of the map iframe */}
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1cEJxeYn2xh0NPdSnkR89cI8DxnWcx00&ehbc=2E312F"
                      width="100%"
                      height="500"
                      title="map-iframe"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <ul className="list-unstyled">
                  <li className="d-flex mb-30">
                    <i className="fa fa-map-marker me-2"></i>
                    <p className="mb-0 ml-2 text-light">
                      Location 1 <br />
                      Address Line 1, City, State, Zip Code<br />
                      Available Mondays, Tuesdays | 9 AM - 5 PM<br />
                      <a href="#" className="link">View Map</a>
                    </p>
                  </li>
                  <li className="d-flex mb-30">
                    <i className="fa fa-map-marker me-2"></i>
                    <p className="mb-0 ml-2 text-light">
                      Location 2 <br />
                      Address Line 1, City, State, Zip Code<br />
                      Available Mondays, Tuesdays | 9 AM - 5 PM<br />
                      <a href="#" className="link">View Map</a>
                    </p>
                  </li>
                  <li className="d-flex mb-30">
                    <i className="fa fa-map-marker me-2"></i>
                    <p className="mb-0 ml-2 text-light">
                      Location 1 <br />
                      Address Line 3, City, State, Zip Code<br />
                      Available Mondays, Tuesdays | 9 AM - 5 PM<br />
                      <a href="#" className="link">View Map</a>
                    </p>
                  </li>
                  {/* Add other locations */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional content */}
      <div className="container d-flex justify-content-center mt-80 mb-80">
        <div className="row">
          <div className="card-text col-md-12 col-lg-6 text-center text-md-start pb-lg-0 text-dark">
            <h2 className='text-dark'>Drop off and relax, knowing we’ll handle it all!</h2>
            <p className="text">
              No more staying up until 3 AM surrounded by a mess of wrapping paper and tangled ribbons. Let Quick Wrap Gifts
              save the day with our drop-off gift wrapping services!
            </p>
            <p className="text">
              <strong>From December 15, 2023 until December 24, 2023</strong>, you can drop your gifts off during mall hours.
            </p>
            <p className="text">
              Photo ID is required for pickup. Wait time varies. Call (929) 374-7424 for estimated turnaround time for your
              order.
            </p>
          </div>
          <div className="col-md-12 col-lg-6">
            <img src={relax} alt="" className="w-100 img-fluid" />
          </div>
        </div>
      </div>
      <div className="container mt-8 pb-0">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center mb-3 mb-lg-0">
            <div className="box d-flex w-100 align-items-center">
              <img src={wra} alt="" />
              <div className="pl-38">
                <h3 className="mt-5">40,000+ Gifts Wrapped</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <div className="box d-flex w-100 align-items-center">
              <img src={vec} alt="" />
              <div className="pl-38">
                <h3 className="mt-5">30,000+ Happy Customers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
