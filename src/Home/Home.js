import React from "react";
import Hero from "./Hero";
import Card from "./Card";
import Location from "./Location";
import Testimonials from "./Testimonials";
import Transform from "./Transform";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Card />
        <Location />
        <Testimonials />
        <Transform />
      </div>
    </>
  );
}

export default Home;
