import React from 'react'
import Web from '../Images/testimonial1.png'
import Test from '../Images/testimonial2.png'
import img from '../Images/testimonial3.png'

function Testimonials() {
  return (

        <div className="container-fluid home-sections testimonial p-5">
  <div className="container">
    <div className="row  justify-content-evenly">
      <div className="col-lg-4 mt-4 mb-4">
        <div className="card px-4 h-100">
          <div>
            <div className="image mt-2 d-flex justify-content-center  ">
              <img src={Web} alt="Testimonial Image" />
            </div>
            <p className="heading mt-3 text-black d-flex justify-content-center ">They never disappoint!</p>
            <p className="mt-2 text-black d-flex justify-content-center ">
              I’ve known about QUICK WRAP since they started gift wrapping and they
              never disappoint. I needed a gift for my mom so I went on their site
              and found great gift options I knew she would love! I highly
              recommend them!
            </p>
          </div>
          <p className="mt-auto text-black d-flex justify-content-center ">- Jasmine</p>
        </div>
      </div>

      <div className="col-lg-4 mt-4 mb-4">
        <div className="card px-4 h-100">
          <div>
            <div className="image mt-2 d-flex justify-content-center ">
              <img src={Test} alt="Testimonial Image" />
            </div>
            <p className="heading mt-3 text-black d-flex justify-content-center ">Highly Recommended!</p>
            <p className="mt-2 text-black d-flex justify-content-center ">
              I always had problems deciding what gift to get until this website.
              Nice selections with a lot of unique gift choices made things so
              simple, I had to recommend all my friends!!!
            </p>
          </div>
          <p className="mt-auto text-black d-flex justify-content-center ">-Sean C.</p>
        </div>
      </div>

      <div className="col-lg-4 mt-4 mb-4">
        <div className="card px-4 h-100 ">
          <div>
            <div className="image mt-2 d-flex justify-content-center ">
              <img src={img} alt="Testimonial Image" />
            </div>
            <p className="heading mt-3 text-black d-flex justify-content-center ">I LOVE QUICK WRAP!</p>
            <p className="mt-2 text-black d-flex justify-content-center ">
              It had exactly what I was looking for…I ordered a couple of things
              and all are perfect! With decent prices and great choices, I was
              blown away!
            </p>
          </div>
          <p className="mt-auto text-black d-flex justify-content-center ">-A.C.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Testimonials
