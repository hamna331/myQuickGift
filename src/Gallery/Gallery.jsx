import React from "react";
import Sdata from "./Sdata";
import wra from "../Images/emoji _wrapped present_ (gift).svg"
import vec  from "../Images/Vector.png"
import './Gallery.css'

function Gallery() {
  return (
    <>
    <div class="container-fluid  page-title-2 main d-flex align-items-center justify-content-center">
    <div class="text-center text-light">
        <h1>GALLERY</h1>
        <p class="text-light">Our gift wrapping exudes love and creativity, carefully crafted to make yours the present that stands out among the crowd. Elevate your gift-giving experience with our touch of elegance!</p>
    </div>
</div>
      <div className="container-fluid p-3 card-body">
      <div className="container">
        <div className="row">
          {Sdata.map((val, ind) => (
            <div className="col-lg-4 " key={ind}>
              <img src={val.imgsrc} alt={val.title}  className="image-fluid"/>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="container mt-8 p-3 mt-5">
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
      <div className="hero d-flex align-items-start justify-content-center ">
    <div className="text-center">
        <h2 className=' text-white '>Transforming gifts one bow at a time.</h2>
        <button type="button" className=" btn-primary-1" routerLink="/book-services">
            BOOK NOW
        </button>
    </div>
</div>
    </>
  );
}

export default Gallery;
