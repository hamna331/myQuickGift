import React from "react";
import '../Home/Home.css';

function Hero() {
  return (
    <div className="container-fluid p-0">
      <div className="hero-image">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1 className="fw-700">ELEVATE YOUR GIFT GIVING</h1>
          <p className="text-white">Experience professional Gift-giving & Wrapping. Delivering exceptional moments of valued customers. 20,000+ Gift wrapped in 3 years. Curated collection for all occasions.</p>
          <button className="d-flex btn" routerLink="/book-services">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
