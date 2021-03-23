import React from "react";
import CollapseFaq from "../Components/CollapseFaq";
import NavbarIndex from "../Components/Navbar";

const Faq = () => {
  return (
    <>
      <NavbarIndex />
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
            style={{ backgroundImage: `url('assets/index05.png')` }}
          >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  {/*  <span className="text-cursive h5 text-red">
                    Bienvenidos a nuestro sitio
                  </span> */}
                  <h1 className="mb-3 font-weight-bold text-teal">
                    Preguntas frecuentes
                  </h1>
                  <p>
                    <a href="/" className="text-white">
                      Inicio
                    </a>{" "}
                    <span className="mx-3">/</span> <strong>FAQ</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section bg-teal">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-white">
                <h2 className="text-white">¿Tienes dudas?</h2>
                <br />
                <p>
                  Aqui encontras un listado de preguntas freguentes que te
                  ayudaran a encontrar la solucion que necesitas
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center my-5">
                <img
                  src="assets/spacemanFaq.png"
                  alt="spaceFaQ"
                  className="img-fluid"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
            <CollapseFaq
              title="¿Como registrarme en CodeKids?"
              text="Para registrarse en CodeKids, vaya a la seccion Registrarme y rellene los campos del formulario de forma correcta, luego haga click en enviar y listo, es asi de facil"
            />
            <CollapseFaq
              title="¿Es necesario que un adulto haga el registro o puede hacerlo cualquier persona?"
              text="Recomendamos que el registro de un nuevo usuario sea realizado por un adulto responsable"
            />
            <CollapseFaq
              title="¿CodeKids tiene algun costo?"
              text="CodeKids esta en una version BETA y de momento no tiene ningun costo asociado a su uso, aprovecha y registrate ahora"
            />
            <CollapseFaq
              title="Puedo hacer sugerencias para mejorar CodeKids"
              text="Porsupuesto! para ello hemos dispuesto la seccion de contacto, estamos abiertos a cualquier sugerencia que ayude a mejorar tu experiencia como usuario"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
