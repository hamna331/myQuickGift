import React from "react";
import img from "../Images/hero1.png";
import ima from "../Images/Vector.png";
import img9 from "../Images/image9.png";
import img10 from "../Images/image10.png";
import img11 from "../Images/image11.png";
import img12 from "../Images/image12.png";

function Shopitem() {
  return (
    <>
      <div className="container-fluid navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <ul className="list-unstyled">
              <li>
                <h2 className="navbar-brand p-0 m-0">QUICK WRAP</h2>
              </li>
              <li>
                <p className="p-0 m-0">Shop</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
            <form className="form-inline">
              <div className="input-group">
                <input
                  className="form-control form-control-sm border-right-0 customBorder"
                  placeholder="Search"
                />
                <span className="input-group-append">
                  <button
                    className="btn-1 border-left-0 customBorder"
                    type="button"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </nav>
      </div>
      {/* <div className="container mt-37">
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Shop</a></li>
                      <li className="breadcrumb-item"><a href="#">Corporate</a></li>
                      <li className="breadcrumb-item"><a href="#">Gifts</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Self-Stirring Mug</li>
                  </ol>
              </nav>
          </div> */}
      <div className="container product-detail">
        <div className="row d-flex flex-column flex-sm-row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>Self-Stirring Mug</h2>
            <h3 className="mb-3">$17.99</h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-start">
            <i className="fa fa-star fa-2x me-2"></i>
            <i className="fa fa-star fa-2x me-2"></i>
            <i className="fa fa-star fa-2x me-2"></i>
            <i className="fa fa-star fa-2x me-2"></i>
            <i className="fa fa-star-half fa-2x me-2"></i>
            <p className="mb-0">23 Reviews</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex flex-column flex-sm-row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={img} alt="Product Image" className="img-fluid" />
            <div className="row">
              <div className="text-center">
                <div id="carouselExampleControls" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="crousel-card">
                        <div className="img-wrapper">
                          <img src={img} className="h-100" alt="Carousel Item" />
                        </div>
                      </div>
                    </div>
                    {/* < />!-- Add more carousel items here --> */}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul className="list-group">
              <li className="d-flex">
                <p className="fw-25 w-25">Brand</p>
                <p className="fw-75 w-75">Generic</p>
              </li>
              <li className="mt-1 d-flex justify-content-between">
                <p className="fw-25 w-25">Color</p>
                <p className="fw-75 w-75">White</p>
              </li>
              <li className="mt-1 d-flex justify-content-between">
                <p className="fw-25 w-25">Details</p>
                <p className="fw-75 w-75">
                  Rotating, magnetic, leak-proof, self-stirring, 150
                </p>
              </li>
              <li className="mt-1 d-flex justify-content-between">
                <p className="fw-25 w-25">Package Details</p>
                <p className="fw-75 w-75">
                  Rotating, magnetic, leak-proof, self-stirring, 150
                </p>
              </li>
            </ul>
            <button type="button" className=" btn-sm btn-primary-1">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid box">
        <div className="container">
          <h2 className="text-center text-dark ">You May Also Like</h2>
          <div className="row">
            <div className="col-6 col-md-3 col-lg-3 mb-12">
              <div className="card">
                <img src={img9} className="card-img-top" alt="..." />
                <div className="card-body bg-light">
                  <p className="card-title">LED Reversible Umbrella</p>
                  <p className="card-title">$17.99</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="card">
                <img src={img10} className="card-img-top" alt="..." />
                <div className="card-body bg-light">
                  <p className="card-title">LED Reversible Umbrella</p>
                  <p className="card-title">$17.99</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 ">
              <div className="card">
                <img src={img11} className="card-img-top" alt="..." />
                <div className="card-body bg-light">
                  <p className="card-title">Tracker</p>
                  <p className="card-title">$17.99</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="card">
                <img src={img12} className="card-img-top" alt="..." />
                <div className="card-body bg-light">
                  <p className="card-title">JBL Waterproof Mini Speaker</p>
                  <p className="card-title">$17.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopitem;
