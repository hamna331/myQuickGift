import React from 'react';
import '../pricing/pricing.css';
import hero from '../Images/pricing-hero.png';
import Location from '../Home/Location';

function Pricing() {
  return (
    <div>
      <h1 className="page-title p-5 d-flex justify-content-center align-items-center text-light">
        PRICING & BUNDLES
      </h1>
      <div className="container">
        <div className="row padding-75px">
          <div className="col-lg-6 col-sm-12 col-md-12 center">
            <p className="text-center text-lg-start">
              We offer custom gift-wrapping services for all types of occasions. We are
              dedicated to elevating the experience of giving gifts to others. We provide
              an extensive selection of online gift-wrapping services, including unique
              gift wrapping, in-home gift wrapping, internet gift wrapping, retail
              gift-wrapping events, corporate gifting, and many more. We offer various
              services in New York, NY; the Bronx, NY; Valley Stream Long Island, NY; and
              Elmhurst, NY.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={hero} className="image" alt="pricing-image" />
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <ul className="page-navigator  d-flex justify-content-center flex-wrap flex-md-nowrap">
          <li className=" underline">
            <h3><a href="itempricing">Item Pricing</a></h3>
          </li>
          <li className=" mr-0-sm">
            <h3><a className='scrollto active' href="packages">At-Home Packages</a></h3>
          </li>
          <li className=" d-none d-lg-block">
            <h3><a className='scrollto' href="vouchers">Vouchers</a></h3>
          </li>
        </ul>
      </div>

      <div className='container'>
        <div className="row d-flex justify-content-around ">
          {/* Gift Wrapping */}
          <div className=" col-lg-6 col-sm-12">
            <div className="pricing-box h-50 p-5">
              <p className="d-flex justify-content-center text-white  custom-size-heading">
                Gift Wrapping
              </p>
            </div>
          </div>

          {/* Gift Bags */}
          <div className=" box col-lg-6 col-sm-12 ">
            <div className="pricing-box">
              <p className="d-flex justify-content-center text-white custom-size-heading ">
                Gift Bags
              </p>
            </div>
            <div className="pricing-box gy-5">
              <p className="d-flex justify-content-center text-white custom-size-heading">Boxes</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="d-flex justify-content-center mt-57 mb-61"><span>At-Home Packages</span></h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div>
              <p className='ful d-flex justify-content-center'>
                Fulfilling a large wish list for your loved ones?
                We’ll come to your house and wrap them with these sweet deals.
              </p>
              <p className='ful'>
                For oversized and supersized gifts, you <strong>must</strong> add these sizes
                separately. For example, if you select the $100.00 bundle and add a $20.00
                supersized gift, you will have a $120.00 credit.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 text-size">
            {/* You may need to add content here */}
          </div>
        </div>
      </div>

      <div className="container">
        {/* <h3 className="d-flex justify-content-center mt-50">Vouchers</h3> */}
        {/* <p className="d-flex justify-content-center mt-16">Purchase your gift wrapping vouchers today for a discount on in-mall
          gift services.</p> */}
        <div className="row mb-76 mt-48">
        <div class="container">
    <h3 class="d-flex justify-content-center mt-50">Vouchers</h3>
    <p class="d-flex justify-content-center mt-16">Purchase your gift wrapping vouchers today for a discount on in-mall
        gift services.</p>
    <div class="row mb-76 mt-48">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="card">
                <div class="card-body">
                    <h4>$30.00 GIFT VOUCHER</h4>
                    <p>6 Small to Medium Sized Wrapped Gifts<br/> 1 <b>FREE</b> Large Wrapped Gift</p>
                </div>
                <div class="card-footer text-center">
                    <button class="btn-primary-1">PURCHASE NOW</button>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="card">
                <div class="card-body">
                    <h4>$60.00 GIFT VOUCHER</h4>
                    <p>14 Small to Medium Sized Wrapped Gifts<br/> 3 <b>FREE</b> Large Wrapped Gift</p>
                </div>
                <div class="card-footer text-center">
                    <button class=" btn-primary-1">PURCHASE NOW</button>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="card">
                <div class="card-body">
                    <h4>$100.00 GIFT VOUCHER</h4>
                    <p>20 Small to Medium Sized Wrapped Gifts<br/> 5 <b>FREE</b> Large Wrapped Gift</p>
                </div>
                <div class="card-footer text-center">
                    <button class=" btn-primary-1">PURCHASE NOW</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
      </div>

      <div>
        <Location />
      </div>

      <div className="bottom-banner">
        <h1>MAKE IT ELEGANT</h1>
        <button type="button" className="btn btn-dark">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Pricing;
