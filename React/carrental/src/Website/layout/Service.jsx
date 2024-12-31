import React from 'react'
import Header from '../Coaman/Header'
import Footer from '../Coaman/Footer'

function Service() {
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
                    <h1 className="display-3 text-uppercase text-white mb-3">Service</h1>
                    <div className="d-inline-flex text-white">
                        <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
                        <h6 className="text-body m-0 px-3">/</h6>
                        <h6 className="text-uppercase text-body m-0">Service</h6>
                    </div>
                </div>
                {/* Page Header Start */}
                {/* Services Start */}
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Our Services</h1>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                            <i className="fa fa-2x fa-taxi text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">01</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Car Rental</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                            <i className="fa fa-2x fa-money-check-alt text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">02</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Car Financing</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                            <i className="fa fa-2x fa-car text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">03</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Car Inspection</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                            <i className="fa fa-2x fa-cogs text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">04</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Auto Repairing</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                            <i className="fa fa-2x fa-spray-can text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">05</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Auto Painting</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-2">
                                <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: 80, height: 80 }}>
                                            <i className="fa fa-2x fa-pump-soap text-secondary" />
                                        </div>
                                        <h1 className="display-2 text-white mt-n2 m-0">06</h1>
                                    </div>
                                    <h4 className="text-uppercase mb-3">Auto Cleaning</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Banner Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="bg-banner py-5 px-4 text-center">
                            <div className="py-5">
                                <h1 className="display-1 text-uppercase text-primary mb-4">50% OFF</h1>
                                <h1 className="text-uppercase text-light mb-4">Special Offer For New Members</h1>
                                <p className="mb-4">Only for Sunday from 1st Jan to 30th Jan 2045</p>
                                <a className="btn btn-primary mt-2 py-3 px-5" href>Register Now</a>
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

export default Service
