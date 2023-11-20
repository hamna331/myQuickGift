import React from "react";
import "../Blogs/Blogs.css";
import pre from "../Images/Presentation.png";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row">
          <div className="col-lg-5 left-box">
            <div className="img-box mt-88">
              <img src={pre} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-7 right-box">
            <div className="text-box">
              <h1>FEATURED ARTICLE</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh pellentesque et
                vestibulum proin mauris sit feugiat eu. Amet libero sagittis sed
                ante pellentesque convallis ultricies neque. Ipsum urna sed
                commodo quis. Faucibus eget ultrices quisque sodales dictum
                vitae id feugiat. Sed.
                <br />
                <br />
                <Link to="/More" className="link ">
                  {" "}
                  Read more->{" "}
                </Link>
              </p>
              <div className="btn-row mt-27">
                <div className="btn-box text-center">
                  <button className="btn-primary r">GET GUIDE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
