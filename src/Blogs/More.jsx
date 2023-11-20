import React from "react";
import "../Blogs/Blogs.css";
import img from "../Images/blog-guide.png";
import pre from "../Images/Presentation.png";
import you from "../Images/youtube.svg";
import tw from "../Images/twitter.svg";
import ti from "../Images/tiktok.svg";
import ins from "../Images/instagram.svg";
import li from "../Images/linkedin.svg";
import fb from "../Images/facebook.svg";

function More() {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center">
        <div className="col-lg-5 left-box">
          <div className="img-box">
            <img src={pre} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-7 right-box">
          <div className="text-box text-dark">
            <h1>FEATURED ARTICLE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nibh pellentesque et
              vestibulum proin mauris sit feugiat eu. Amet libero sagittis sed
              ante pellentesque convallis ultricies neque. Ipsum urna sed
              commodo quis. Faucibus eget ultrices quisque sodales dictum vitae
              id feugiat. Sed.
            </p>
            <div className="row btn-row mt-17 justify-content-between">
              <div className="btn-box text-center col-lg-4 col-sm-12 justify-content-start">
                <button className="btn-primary r ">GET GUIDE</button>
              </div>
              <div className="date col-lg-6 col-sm-12 justify-content-end mt-10">
                <p>Last Updated: 10/20/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid m-0">
        <div className="container">
          <div class="container">
            <div class="row mt-71">
              <div class="col-lg-8">
                <p>
                  .text-boxLorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Iste aut asperiores quis autem corporis. Amet delectus
                  dolore dignissimos tempora veniam laudantium culpa, voluptatum
                  reiciendis pariatur voluptate magnam vel similique cum.
                </p>
                <div class="tech">
                  <div class="row justify-content-start mt-51">
                    <h2 class="text-black">1. &nbsp;Tech Gadgets</h2>
                  </div>
                  <div class="paragraph mt-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam expedita suscipit saepe, veniam iste quae
                      perspiciatis unde modi laboriosam nisi corporis eius
                      tenetur necessitatibus enim! Veritatis error placeat harum
                      debitis!
                    </p>
                  </div>
                  <div class="img-container mt-19">
                    <img src={img} alt="" class="img-fluid" />
                  </div>
                  <div class="row  justify-content-between mt-25">
                    <div class="col-lg-8 col-sm-12">
                      <p>
                        Get it from <a href="/blog-services">Amazon </a>{" "}
                        &nbsp;for $64.95
                      </p>
                    </div>
                    <div class="d-flex col-lg-4 col-sm-12">
                      <a href="/">
                        <img src={you} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={ti} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={ins} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={tw} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={fb} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={li} alt="logo" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="tech">
                  <div class="row justify-content-start mt-51">
                    <h2 class="text-black">2. &nbsp;Tech Gadgets</h2>
                  </div>
                  <div class="paragraph mt-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam expedita suscipit saepe, veniam iste quae
                      perspiciatis unde modi laboriosam nisi corporis eius
                      tenetur necessitatibus enim! Veritatis error placeat harum
                      debitis!
                    </p>
                  </div>
                  <div class="img-container mt-19">
                    <img src={img} alt="" class="img-fluid" />
                  </div>
                  <div class="row  justify-content-between mt-25">
                    <div class="col-lg-8 col-sm-12">
                      <p>
                        Get it from <a href="/blog-services">Amazon </a>{" "}
                        &nbsp;for $64.95
                      </p>
                    </div>
                    <div class="d-flex col-lg-4 col-sm-12">
                      <a href="/">
                        <img src={you} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={ti} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={ins} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={tw} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={fb} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={li} alt="logo" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="tech">
                  <div class="row justify-content-start mt-51">
                    <h2 class="text-black">3. &nbsp;Tech Gadgets</h2>
                  </div>
                  <div class="paragraph mt-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam expedita suscipit saepe, veniam iste quae
                      perspiciatis unde modi laboriosam nisi corporis eius
                      tenetur necessitatibus enim! Veritatis error placeat harum
                      debitis!
                    </p>
                  </div>
                  <div class="img-container mt-19">
                    <img src={img} alt="" class="img-fluid" />
                  </div>
                  <div class="row  justify-content-between mt-25">
                    <div class="col-lg-8 col-sm-12">
                      <p>
                        Get it from <a href="/blog-services">Amazon </a>{" "}
                        &nbsp;for $64.95
                      </p>
                    </div>
                    <div class="d-flex col-lg-4 col-sm-12 mb-51">
                      <a href="/">
                        <img src={you} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={ti} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={ins} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={tw} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={fb} alt="logo" />
                      </a>
                      <a href="/">
                        <img src={li} alt="logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12 mt-15">
                <div class="card-2 bg-grey mt-5 text-center">
                  <div class="card-bod-1 bg-light">
                    <h4 class="mt-35 text-black mb-0 ">Related Guides</h4>
                    <ul class="list-unstyled">
                      <li>
                        <a class="social-media-links">Top 10 Unique Gifts</a>
                      </li>
                      <li>
                        <a class="social-media-links">The Best Amazon Finds</a>
                      </li>
                      <li>
                        <a class="social-media-links">Inexpensive Gift Ideas</a>
                      </li>
                      <li class="mb-61">
                        <a class="social-media-links">
                          Perfect Remote Office Gifts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="mt-19 text-center">Share Article</p>
                <div class="d-flex col-lg-4 col-sm-12 mt-11 mb-52 items-center">
                  <a href="/">
                    <img src={you} alt="logo" />
                  </a>
                  <a href="/">
                    <img src={ti} alt="logo" />
                  </a>
                  <a href="/">
                    <img src={ins} alt="logo" />
                  </a>
                  <a href="/">
                    <img src={tw} alt="logo" />
                  </a>
                  <a href="/">
                    <img src={fb} alt="logo" />
                  </a>
                  <a href="/">
                    <img src={li} alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;
