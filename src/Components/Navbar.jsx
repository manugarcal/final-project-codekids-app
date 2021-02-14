
const Navbar = () => {
    return (
        <header className="site-navbar site-navbar-target" role="banner">

                    <div className="container mb-3">
                        <div className="d-flex align-items-center">
                            <div className="site-logo mr-auto">
                                <a href="index.html">CodeKids<span className="text-primary">.</span></a>
                            </div>
                            <div className="site-quick-contact d-none d-lg-flex ml-auto ">
                                <a href="#"className="d-flex site-info align-items-center mr-5">
                                    <span className="block-icon mr-3"><i class="fas fa-sign-in-alt"></i></span>
                                    <span>Sign in</span>
                                </a>
                                <a href="#"className="d-flex site-info align-items-center">
                                    <span className="block-icon mr-3"><img src="http://localhost:3000/assets/spaceman01.png" width="50px" height="50px"></img></span>
                                    <span>Register</span>
                                </a>

                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="menu-wrap d-flex align-items-center">
                            <span className="d-inline-block d-lg-none"><a href="#" className="text-black site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-black"></span></a></span>



                            <nav className="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto ">
                                    <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                                    <li><a href="about.html" className="nav-link">Getting Started</a></li>
                                    <li><a href="packages.html" className="nav-link">About Us</a></li>
                                    <li><a href="gallery.html" className="nav-link">Forum</a></li>
                                    <li><a href="pricing.html" className="nav-link">FAQ</a></li>
                                    <li><a href="contact.html" className="nav-link">Contact Us</a></li>
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
    )
}
export default Navbar;