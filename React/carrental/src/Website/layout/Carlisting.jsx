import React from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'

function Carlisting() {
    return (
        <div>
            <Header />
            <div>
                {/* Search Start */}
                <div className="container-fluid bg-white pt-3 px-lg-5">
                    <div className="row mx-n2">
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                <option selected>Pickup Location</option>
                                <option value={1}>Location 1</option>
                                <option value={2}>Location 2</option>
                                <option value={3}>Location 3</option>
                            </select>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                <option selected>Drop Location</option>
                                <option value={1}>Location 1</option>
                                <option value={2}>Location 2</option>
                                <option value={3}>Location 3</option>
                            </select>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <div className="date mb-3" id="date" data-target-input="nearest">
                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Date" data-target="#date" data-toggle="datetimepicker" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <div className="time mb-3" id="time" data-target-input="nearest">
                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Time" data-target="#time" data-toggle="datetimepicker" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <select className="custom-select px-4 mb-3" style={{ height: 50 }}>
                                <option selected>Select A Car</option>
                                <option value={1}>Car 1</option>
                                <option value={2}>Car 1</option>
                                <option value={3}>Car 1</option>
                            </select>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                            <button className="btn btn-primary btn-block mb-3" type="submit" style={{ height: 50 }}>Search</button>
                        </div>
                    </div>
                </div>
                {/* Search End */}
                {/* Page Header Start */}
                <div className="container-fluid page-header">
                    <h1 className="display-3 text-uppercase text-white mb-3">Car Listing</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Car Listing</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Rent A Car Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src="img/car-rent-1.png" alt />
                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>AUTO</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href>$99.00/Day</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item active mb-4">
                                    <img className="img-fluid mb-4" src="img/car-rent-2.png" alt />
                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>AUTO</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href>$99.00/Day</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src="img/car-rent-3.png" alt />
                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>AUTO</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href>$99.00/Day</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src="img/car-rent-4.png" alt />
                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>AUTO</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href>$99.00/Day</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src="img/car-rent-5.png" alt />
                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>AUTO</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href>$99.00/Day</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="rent-item mb-4">
                                    <img className="img-fluid mb-4" src="img/car-rent-6.png" alt />
                                    <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="px-2">
                                            <i className="fa fa-car text-primary mr-1" />
                                            <span>2015</span>
                                        </div>
                                        <div className="px-2 border-left border-right">
                                            <i className="fa fa-cogs text-primary mr-1" />
                                            <span>AUTO</span>
                                        </div>
                                        <div className="px-2">
                                            <i className="fa fa-road text-primary mr-1" />
                                            <span>25K</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary px-3" href>$99.00/Day</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Rent A Car End */}
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mx-0">
                            <div className="col-lg-6 px-0">
                                <div className="px-5 bg-secondary d-flex align-items-center justify-content-between" style={{ height: 350 }}>
                                    <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4" src="img/banner-left.png" alt />
                                    <div className="text-right">
                                        <h3 className="text-uppercase text-light mb-3">Want to be driver?</h3>
                                        <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                                        <a className="btn btn-primary py-2 px-4" href>Start Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 px-0">
                                <div className="px-5 bg-dark d-flex align-items-center justify-content-between" style={{ height: 350 }}>
                                    <div className="text-left">
                                        <h3 className="text-uppercase text-light mb-3">Looking for a car?</h3>
                                        <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                                        <a className="btn btn-primary py-2 px-4" href>Start Now</a>
                                    </div>
                                    <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src="img/banner-right.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Vendor Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="owl-carousel vendor-carousel">
                            <div className="bg-light p-4">
                                <img src="img/vendor-1.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-2.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-3.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-4.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-5.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-6.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-7.png" alt />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-8.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Vendor End */}
            </div>
            <Footer />

        </div>
    )
}

export default Carlisting
