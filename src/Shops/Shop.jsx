import React from 'react';
import "../Shops/Shop.css"
import Sho from '../Images/shop-banner.png';
import gol1 from '../Images/golden1.png'
import gol2 from '../Images/golden2.png'

function Shop() {
  return (
    <div>
      <div className="container-fluid navbar-bg">
        <nav className="row navbar navbar-light justify-content-between">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <ul className="list-unstyled">
              <li>
                <h2 className="navbar-brand p-0 m-0">QUICK WRAP</h2>
              </li>
              <li>
                <p className="p-0 m-0 d-flex justify-content-center">Shop</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
            <form className="form-inline">
           <div className='input-groups '>
  <input
    className="form-control-sm"
    placeholder="Search"
  />
  <button
    className="btn-1"
    type="button"
  >
    <i className="fa fa-search"></i>
  </button>
</div>


            </form>
          </div>
        </nav>
      </div>
      <div className="container mt-73">
        <div className="img-box">
          <img src={Sho} alt="shop-banner" className="w-100" />
        </div>
      </div>
      <div className="container mt-60">
        <h2 className="text-center text-dark">
          Shop by Category
        </h2>
        {/* <div className="row mt-50">
          <div className="col-lg-3 col-sm-12 col-md-6 d-flex justify-content-center">
            <div className="card mb-10">
              <div className="circle">
                
                <img src="category.image" alt="category" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container-fluid slider h-100">
    <div className="container mb-87">
        <div className="row d-flex justify-content-center align-items-center mt-60 mb-38">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <h2 className="text-black text-center">Featured Gifts</h2>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
                <h2 className="text-black text-center">Newly Added Gifts</h2>
            </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex justify-content-center">
                        <div id="carousel1 mt-28" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                            <div className="carousel-item">
    <img src={gol2} className="d-block w-100" />
</div>

                            </div>
                            <div className="carousel-dots">
                                <ol className="carousel-indicators">
                                    <li data-bs-target="#carousel1" data-bs-slide-to="0" className="active"></li>
                                    <li data-bs-target="#carousel1" data-bs-slide-to="1"></li>
                                    <li data-bs-target="#carousel1" data-bs-slide-to="2"></li>
                                </ol>
                                <a className="carousel-control-prev" href="#carousel1" role="button" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </a>
                                <a className="carousel-control-next" href="#carousel1" role="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="title text-center">
                        <p>LED Reversible Umbrella</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex justify-content-center">
                        <div id="carousel2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src={gol1} className="d-block w-100" />
                                </div>
                            </div>
                            <div className="carousel-dots">
                                <ol className="carousel-indicators">
                                    <li data-bs-target="#carousel2"/>
                                </ol>
                                <a className="carousel-control-prev" href="#carousel2" role="button" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"
                                        ></span>
                                </a>
                                <a className="carousel-control-next" href="#carousel2" role="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"
                                        ></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="title text-center">
                        <p>LED Reversible Umbrella</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
    
  );
}

export default Shop;
