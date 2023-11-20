import React from "react";
import "../About/About.css";
import img from "../Images/about-walcome.png";
import web from "../Images/about-expertly.png";
import li from "../Images/about-light.png";
import vi from "../Images/about-vision.png";
import th from "../Images/about-thriftiness.png";
import ea from "../Images/about-ease.png";

function About() {
  return (
    <div className="yellow ">
      <div className="container-fluid  page-title-4  align-itens-center justify-content-center text-center h-50 p-5">
        <h1 className="d-flex justify-content-center ">
          EVOLUTION OF QUICK WRAP
        </h1>
        <p className="mt-0 d-flex justify-content-center">
          Discover the fantastic story of how our simple gift wrapping company
          expanded into gift finding services!
        </p>
      </div>

      <div className="container  sm-margin-top">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 col-md-12 center sm-margin-bottom pe-5 pe-lg-0">
            <p>
              Welcome to Quick Wrap Gifts – Your Ultimate Gift Wrapping and
              Unique Gift Discovery Destination!
              <br />
              <br />
              Our journey began as a humble small business nestled in Long
              Island and Queens, NY, dedicated to offering exceptional gift
              wrapping services during the holiday Christmas shopping rush.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={img} alt="Welcome image" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container sm-margin-top">
        <div className="row align-items-center md-reverse">
          <div className="col-lg-6 col-md-12 col-sm-12 sm-margin-bottom">
            <img src={web} alt="Welcome image" className="w-100" />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 sm-margin-bottom-20 ps-lg-5 ps-0">
            <p>
              After three years of expertly wrapping thousands of gifts, we've
              cultivated an unparalleled expertise in the world of gifts. We've
              keenly observed the struggles people face when trying to find that
              perfect gift – the frustration, the time consumption, and the
              endless decision-making.
            </p>
          </div>
        </div>
      </div>
      <div className="container sm-margin-top sm-margin-bottom">
        <p>
          During this time, we noticed a recurring theme: most of the gifts we
          encountered lacked uniqueness and creativity. They were repetitive,
          lacking that special touch that makes a gift truly memorable.
          <br />
          <br />
          Gifts are more than just objects; they're a heartfelt way to connect
          with loved ones, expressing our emotions and gratitude.
        </p>
      </div>
      <div className="container sm-margin-top ">
        <div className="row align-items-center md-reverse">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={li} alt="Welcome image" className="w-100" />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 ps-lg-5 ps-0">
            <p>
              That's when the light bulb moment struck us, leading to the birth
              of Quick Wrap Gifts – a haven for those seeking extraordinary and
              imaginative gifts.
            </p>
          </div>
        </div>
      </div>
      <div className="container sm-margin-top">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 col-md-12 sm-margin-bottom pe-lg-5 pe-0">
            <p>
              To transform this vision into a reality, we've made an unwavering
              commitment. Our dedicated team of researchers now invests over 120
              hours every week scouring the marketplace for the most
              extraordinary gifts.
              <br />
              Rest assured, we maintain an impartial stance. We don't sell
              products directly; instead, we curate a selection of
              recommendations from trusted brands you already love, such as
              Amazon, Bloomingdales, and other renowned retailers.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={vi} alt="Welcome image" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container sm-margin">
        <div className="row align-items-center md-reverse">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <img src={th} alt="Welcome image" className="w-100" />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 ps-lg-5 ps-0">
            <p>
              Our meticulous approach goes beyond the surface, delving into
              product histories, quality assessments, trending items, likability
              factors, customer reviews, and, of course, unbeatable deals. We
              understand that special occasions like birthdays and holidays can
              strain the wallet, so we tirelessly hunt for the best prices,
              ensuring our customers enjoy maximum savings each time they shop
              with us.
            </p>
          </div>
        </div>
      </div>
      <div className="container  sm-margin">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-sm-12 col-md-12 center-1 pe-lg-5 pe-0">
            <p>
              At Quick Wrap Gifts, we believe that finding the perfect gift
              should be as easy as a single click! Our aim is to exceed your
              expectations and make your gift-giving experiences truly
              exceptional. We sincerely thank you for choosing Quick Wrap Gifts
              as your gift destination.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <img src={ea} alt="Welcome image" className="w-100" />
          </div>
        </div>
      </div>
      <div className="page-title-1 p-5 pt-0 d-flex align-items-center justify-content-center ">
        <div className="text-center">
          <h2 className="text-light">
            Make your gifts a memorable experience for your loved ones.
          </h2>
          <button type="button" className=" btn-primary-2 mt-3">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
