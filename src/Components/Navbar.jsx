import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header className="site-navbar site-navbar-target" role="banner">

                    <div className="container mb-3">
                        <div className="d-flex align-items-center">
                            <div className="site-logo mr-auto">
                                <a href="/">CodeKids<span className="text-primary">.</span></a>
                            </div>
                            <div className="site-quick-contact d-none d-lg-flex ml-auto ">
                                <a href="/Login"className="d-flex site-info align-items-center mr-5">
                                    <span className="block-icon mr-3"><i className="fas fa-sign-in-alt"></i></span>
                                    <span>Entrar</span>
                                </a>
                                <a href="/GettingStarted"className="d-flex site-info align-items-center">
                                    <span className="block-icon mr-3"><img src="assets/spaceman01.png" width="50px" height="50px"></img></span>
                                    <span>Registrarme</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="menu-wrap d-flex align-items-center">
                            <span className="d-inline-block d-lg-none"><a href="#" className="text-black site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-black"></span></a></span>



                            <nav className="site-navigation text-left mr-auto d-none d-lg-block" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto ">
                                    <li className="active"><Link  to="/" className="nav-link">Inicio</Link></li>
                                    <li><Link to="GettingStarted" className="nav-link">Comenzar Ahora</Link></li>
                                    <li><Link to="/About" className="nav-link">Acerca de Nosotros</Link></li>
                                    <li><Link to="/Foro" className="nav-link">Foros</Link></li>
                                    <li><Link to="/Faq" className="nav-link">FAQ</Link></li>
                                    <li><Link to="/Contact" className="nav-link">Contactanos</Link></li>
                                    
    
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