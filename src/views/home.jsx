import React from "react";
import { useEffect } from "react";
import CardsColor from "../Components/CardsColor";
import MediaText from "../Components/MediaText";

const Home = () => {
  useEffect(() => {
    return () => {
      <Home />;
      console.log("recargado");
    };
  }, []);

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
          <div
            className="site-section-cover overlay"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: `url('images/img_7.png')` }}
          >
            <div className="container">
            <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h5 text-red">
                   <h3 className="text-cursive text-white">Bienvenidos a CodeKids</h3> 
                  </span>
                  <h1 className="mb-3 font-weight-bold text-teal">
                    Diversion y aprendizaje para tus niños
                  </h1>
                  <p>Increible plataforma para tus hijos</p>
                  <p className="mt-5">
                    <a href="/About" className="btn btn-primary py-4 btn-custom-1">
                      Saber mas!
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        

        <div className="site-section">
          <div className="container">
            <div className="row">

              <div className="col-lg-4">
                <CardsColor
                  subtitle="Sobre Nosotros"
                  text="CodeKids es una plataforma que desea contribuir y potenciar las habilidades de los mas pequeños."
                  icon="fas fa-user-astronaut"
                  color="red"
                />
              </div>

              <div className="col-lg-4">
              <CardsColor
                  subtitle="FAQs"
                  text="Disponemos de una seccion de preguntas frecuentes para que puedas aclarar algunas dudas."
                  icon="far fa-question-circle"
                  color="yellow"
                />
              </div>

              <div className="col-lg-4">
              <CardsColor
                  subtitle="Forum"
                  text=" En esta seccion encontraras nuestra comunidad, Sacale el
                  mayor provecho planteando tus temas."
                  icon="fas fa-users"
                  color="teal"
                />
              </div>
            </div>
          </div>
        </div>

        <MediaText 
        title="Acerca de Nosotros"
        subtitle="Diversion y aprendizaje para tus niños"
        text="En CodeKids sabemos que la mejor forma de aprender es jugando,
        por lo que nuestra propuesta para potenciar el aprendizaje
        esta orientada a sacarle partido a esta premisa"
        buttonText="Mas sobre Nosotros"
        img="assets/spacekids.jpg"
        url="/about"
        />

        <div className="site-section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <span className="text-cursive h5 text-red d-block">
                  Testimonial
                </span>
                <h2 className="text-black">
                  Lo que dicen nuestros clientes de nosotros
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="testimonial-3-wrap">
                  <div className="owl-carousel nonloop-block-13">
                    <div className="testimonial-3 d-flex">
                      <div className="vcard-wrap mr-5">
                        <img
                          src="assets/elon.jpg"
                          alt="Image"
                          className="vcard img-fluid"
                        />
                      </div>
                      <div className="text">
                        <h3>Elon Musk</h3>
                        <p className="position">Partner</p>
                        <p>
                          Gracias a CodeKids. mi hijo X AE A-XII Musk pudo mejorar notablemente su desarrollo logico y esta pronto a que lo pueda enviar al espacio.
                        </p>
                      </div>
                    </div>

                    <div className="testimonial-3 d-flex">
                      <div className="vcard-wrap mr-5">
                        <img
                          src="assets/bill.jpg"
                          alt="Image"
                          className="vcard img-fluid"
                        />
                      </div>
                      <div className="text">
                        <h3>Bill Gates</h3>
                        <p className="position">Partner</p>
                        <p>
                          Considero que mi hijo a podido mejorar su desarrollo en cuanto a programación y prontamente estrenara su propio SO llamado Door XP
                        </p>
                      </div>
                    </div>

                    <div className="testimonial-3 d-flex">
                      <div className="vcard-wrap mr-5">
                        <img
                          src="assets/jeff.jpg"
                          alt="Image"
                          className="vcard img-fluid"
                        />
                      </div>
                      <div className="text">
                        <h3>Jeff Bezos</h3>
                        <p className="position">Partner</p>
                        <p>
                          Me gusta mucho CodeKids. Asi que probablemente pronto lo compre y lo renombre AmazonKids.
                        </p>
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
                    <span className="text-teal h2 d-block">201</span>
                    <span>Clientes Felices</span>
                  </div>
                  <div className="col-lg-3 text-center">
                    <span className="text-yellow h2 d-block">3</span>
                    <span>Miembros del equipo</span>
                  </div>
                  <div className="col-lg-3 text-center">
                    <span className="text-success h2 d-block">1000</span>
                    <span>Primera meta de clientes</span>
                  </div>
                  <div className="col-lg-3 text-center">
                    <span className="text-danger h2 d-block">1500+</span>
                    <span>seguidores</span>
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
                <h2 className="text-white m-0">
                  Diversion y aprendizaje para tus niños
                </h2>
                <a
                  href="/GettingStarted"
                  className="btn btn-primary btn-custom-1  ml-auto"                  
                >
                  Comenzemos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
