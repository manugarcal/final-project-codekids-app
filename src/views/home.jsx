import React from 'react';
import {useEffect} from 'react'

const Home = () => {

    useEffect(() => {
        
        return () => {
            <Home />
            console.log("recargado")
        }
    }, [])

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

                <div className="ftco-blocks-cover-1">

                    <div className="site-section-cover overlay">
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-md-5 mt-5 pt-5">
                                    <span className="text-cursive h5 text-red">Bienvenidos a nuestro sitio</span>
                                    <h1 className="mb-3 font-weight-bold text-teal">Diversion y aprendizaje para tus niños</h1>
                                    <p>Increible plataforma para tus hijos</p>
                                    <p className="mt-5"><a href="#" className="btn btn-primary py-4 btn-custom-1">Saber mas!</a></p>
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
                                        <span ><i className="fas fa-user-astronaut"></i></span>
                                    </span>
                                    <h2>Sobre Nosotros</h2>
                                    <p>CodeKids es una plataforma que desea contribuir y potenciar las habilidades de los mas pequeños.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="block-2 yellow">
                                    <span className="wrap-icon">
                                        <span ><i className="far fa-question-circle"></i></span>
                                    </span>
                                    <h2>FAQs</h2>
                                    <p>Disponemos de una seccion de preguntas frecuentes para que puedas aclarar algunas dudas.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="block-2 teal">
                                    <span className="wrap-icon">
                                        <span ><i class="fas fa-users"></i></span>
                                    </span>
                                    <h2>Forum</h2>
                                    <p>En esta seccion encontraras nuestra comunidad, Sacale el mayor provecho planteando tus temas.</p>
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
                                <span className="text-cursive h5 text-red">Acerca de Nosotros</span>
                                <h3 className="text-black">Diversion y aprendizaje para tus niños</h3>
                                <p>En CodeKids sabemos que la mejor forma de aprender es jugando, por lo que nuestra propuesta para potenciar el aprendizaje esta orientada a sacarle partido a esta premisa</p>

                                <p className="mt-5"><a href="#" className="btn btn-warning py-4 btn-custom-1">Mas sobre Nosotros</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <span className="text-cursive h5 text-red d-block">Testimonial</span>
                                <h2 className="text-black">Lo que dicen nuestros clientes de nosotros</h2>
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
                                <h2 className="text-white m-0">Diversion y aprendizaje para tus niños</h2>
                                <a href="#" className="btn btn-primary btn-custom-1 py-3 px-5 ml-auto">Comenzemos</a>
                            </div>
                        </div>
                    </div>
                </div>



               

            </div>
        </>
    );
}
export default Home;