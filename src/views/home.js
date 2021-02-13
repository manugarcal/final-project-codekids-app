import React from 'react';

const Home = () => {
    return (
        <>
            <div className="site-wrap" id="home-section">

                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>



                <header className="site-navbar site-navbar-target" role="banner">

                    <div className="container mb-3">
                        <div className="d-flex align-items-center">
                            <div className="site-logo mr-auto">
                                <a href="index.html">Kiddy<span className="text-primary">.</span></a>
                            </div>
                            <div className="site-quick-contact d-none d-lg-flex ml-auto ">
                                <div className="d-flex site-info align-items-center mr-5">
                                    <span className="block-icon mr-3"><span className="icon-map-marker text-yellow"></span></span>
                                    <span>34 Street Name, City Name Here, <br /> United States</span>
                                </div>
                                <div className="d-flex site-info align-items-center">
                                    <span className="block-icon mr-3"><span className="icon-clock-o"></span></span>
                                    <span>Sunday - Friday 8:00AM - 4:00PM <br /> Saturday CLOSED</span>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="menu-wrap d-flex align-items-center">
                            <span className="d-inline-block d-lg-none"><a href="#" className="text-black site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-black"></span></a></span>



                            <nav className="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto ">
                                    <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                                    <li><a href="about.html" className="nav-link">About</a></li>
                                    <li><a href="packages.html" className="nav-link">Packages</a></li>
                                    <li><a href="gallery.html" className="nav-link">Gallery</a></li>
                                    <li><a href="pricing.html" className="nav-link">Pricing</a></li>
                                    <li><a href="contact.html" className="nav-link">Contact</a></li>
                                </ul>
                            </nav>

                            <div className="top-social ml-auto">
                                <a href="#"><span className="icon-facebook text-teal"></span></a>
                                <a href="#"><span className="icon-twitter text-success"></span></a>
                                <a href="#"><span className="icon-linkedin text-yellow"></span></a>
                            </div>
                        </div>
                    </div>



                </header>

                <div className="ftco-blocks-cover-1">

                    <div className="site-section-cover overlay">
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-md-5 mt-5 pt-5">
                                    <span className="text-cursive h5 text-red">Welcome To Our Website</span>
                                    <h1 className="mb-3 font-weight-bold text-teal">Bring Fun Life To Your Kids</h1>
                                    <p>Amazing Playground for your kids</p>
                                    <p className="mt-5"><a href="#" className="btn btn-primary py-4 btn-custom-1">Learn More</a></p>
                                </div>
                                <div className="col-md-6 ml-auto align-self-end">
                                    <img src="images/kid_transparent.png" alt="Image" className="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="block-2 red">
                                    <span className="wrap-icon">
                                        <span className="icon-home"></span>
                                    </span>
                                    <h2>Indoor Games</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="block-2 yellow">
                                    <span className="wrap-icon">
                                        <span className="icon-person"></span>
                                    </span>
                                    <h2>Outdoor Game And Event</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="block-2 teal">
                                    <span className="wrap-icon">
                                        <span className="icon-cog"></span>
                                    </span>
                                    <h2>Camping for Kids</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-5 mb-md-0">
                                <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-md-5 ml-auto pl-md-5">
                                <span className="text-cursive h5 text-red">About Us</span>
                                <h3 className="text-black">Bring Fun Life To Your Kids</h3>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.</span><span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span></p>

                                <p className="mt-5"><a href="#" className="btn btn-warning py-4 btn-custom-1">More About Us</a></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section bg-info">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <span className="text-cursive h5 text-red d-block">Packages You Like</span>
                                <h2 className="text-white">Our Packages</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="package text-center bg-white">
                                    <span className="img-wrap"><img src="images/flaticon/svg/001-jigsaw.svg" alt="Image" className="img-fluid" /></span>
                                    <h3 className="text-teal">Indoor Games</h3>
                                    <p>Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?</p>
                                    <p><a href="#" className="btn btn-primary btn-custom-1 mt-4">Learn More</a></p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="package text-center bg-white">
                                    <span className="img-wrap"><img src="images/flaticon/svg/002-target.svg" alt="Image" className="img-fluid" /></span>
                                    <h3 className="text-success">Outdoor Game and Event</h3>
                                    <p>Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?</p>
                                    <p><a href="#" className="btn btn-warning btn-custom-1 mt-4">Learn More</a></p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="package text-center bg-white">
                                    <span className="img-wrap"><img src="images/flaticon/svg/003-mission.svg" alt="Image" className="img-fluid" /></span>
                                    <h3 className="text-danger">Camping for Kids</h3>
                                    <p>Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?</p>
                                    <p><a href="#" className="btn btn-success btn-custom-1 mt-4">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="text-cursive h5 text-red d-block">Pricing Plan</span>
                                <h2 className="text-black">Our Pricing</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis cupiditate fugit, voluptatibus ullam, non laboriosam alias veniam, ex inventore iure sed?</p>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing teal">
                                    <span className="price">
                                        <span>$30</span>
                                    </span>
                                    <h3>Silver Pack</h3>
                                    <ul className="ul-check list-unstyled teal">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipisicing elit</li>
                                        <li>Nemo quis cupiditate</li>
                                    </ul>
                                    <p><a href="#" className="btn btn-teal btn-custom-1 mt-4">Buy Now</a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing danger">
                                    <span className="price">
                                        <span>$70</span>
                                    </span>
                                    <h3>Golden Pack</h3>
                                    <ul className="ul-check list-unstyled danger">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipisicing elit</li>
                                        <li>Nemo quis cupiditate</li>
                                    </ul>
                                    <p><a href="#" className="btn btn-danger btn-custom-1 mt-4">Buy Now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <span className="text-cursive h5 text-red d-block">Testimonial</span>
                                <h2 className="text-black">What Our Client Says About Us</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="testimonial-3-wrap">


                                    <div className="owl-carousel nonloop-block-13">
                                        <div className="testimonial-3 d-flex">
                                            <div className="vcard-wrap mr-5">
                                                <img src="images/person_1.jpg" alt="Image" className="vcard img-fluid" />
                                            </div>
                                            <div className="text">
                                                <h3>Jeff Woodland</h3>
                                                <p className="position">Partner</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                                            </div>
                                        </div>

                                        <div className="testimonial-3 d-flex">
                                            <div className="vcard-wrap mr-5">
                                                <img src="images/person_3.jpg" alt="Image" className="vcard img-fluid" />
                                            </div>
                                            <div className="text">
                                                <h3>Jeff Woodland</h3>
                                                <p className="position">Partner</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                                            </div>
                                        </div>

                                        <div className="testimonial-3 d-flex">
                                            <div className="vcard-wrap mr-5">
                                                <img src="images/person_2.jpg" alt="Image" className="vcard img-fluid" />
                                            </div>
                                            <div className="text">
                                                <h3>Jeff Woodland</h3>
                                                <p className="position">Partner</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-center">

                            <div className="col-md-8">


                                <div className="row">
                                    <div className="col-lg-3 text-center">
                                        <span className="text-teal h2 d-block">3423</span>
                                        <span>Happy Client</span>
                                    </div>
                                    <div className="col-lg-3 text-center">
                                        <span className="text-yellow h2 d-block">4398</span>
                                        <span>Members</span>
                                    </div>
                                    <div className="col-lg-3 text-center">
                                        <span className="text-success h2 d-block">50+</span>
                                        <span>Staffs</span>
                                    </div>
                                    <div className="col-lg-3 text-center">
                                        <span className="text-danger h2 d-block">2000+</span>
                                        <span>Our Followers</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section py-5 bg-warning">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 d-flex">
                                <h2 className="text-white m-0">Bring Fun Life To Your Kids</h2>
                                <a href="#" className="btn btn-primary btn-custom-1 py-3 px-5 ml-auto">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>



                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h2 className="footer-heading mb-3">About Us</h2>
                                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>

                                <h2 className="footer-heading mb-4">Newsletter</h2>
                                <form action="#" className="d-flex" className="subscribe">
                                    <input type="text" className="form-control mr-3" placeholder="Email" />
                                    <input type="submit" value="Send" className="btn btn-primary" />
                                </form>
                            </div>
                            <div className="col-lg-8 ml-auto">
                                <div className="row">
                                    <div className="col-lg-4 ml-auto">
                                        <h2 className="footer-heading mb-4">Navigation</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Terms of Service</a></li>
                                            <li><a href="#">Privacy</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <h2 className="footer-heading mb-4">Navigation</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Terms of Service</a></li>
                                            <li><a href="#">Privacy</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>

                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <div className="border-top pt-5">
                                    <p>
                                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                                        {/*  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default Home;