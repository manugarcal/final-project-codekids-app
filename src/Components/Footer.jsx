import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../Store/appContext";

const Footer = () => {
  const { actions } = useContext(Context);
  const { register } = useForm();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="footer-heading mb-3">Acerca de Nosotros</h2>
            <p className="mb-5">
              CodeKids es una aplicacion desarollada con mucho &#128150; por
              Andres, Alejandro y Manuel{" "}
            </p>

            <h2 className="footer-heading mb-4">Boletin informativo</h2>
            <form
              onSubmit={(e) => actions.handleSubmitNews(e)}
              className="d-flex subscribe"
            >
              <input
                type="text"
                className="form-control mr-3"
                placeholder="Email"
                name="email"
                onChange={(e) => actions.handleChange(e)}
                ref={register({
                  required: {
                    value: true,
                    message: "Ingrese su email",
                  },
                })}
              />
              {/* <!-- Button trigger modal --> */}
              <button
                type="submit"
                className="btn btn-primary btn-md mt-2"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Enviar
              </button>
            </form>
          </div>
          <div className="col-lg-8 ml-auto">
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <h2 className="footer-heading mb-4">Navegacion</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="/About">Acerca de Nosotros</a>
                  </li>
                  <li>
                    <a href="/foro">Foro</a>
                  </li>
                  <li>
                    <a href="/Faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/Contact">Contactanos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>Copyright © All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-danger "
                id="exampleModalLongTitle"
              >
                &#x1F973;Felicidades&#x1F973;
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              Te enviaremos informacion sobre nuestros cursos, actualizaciones y
              muchas otras cosas para que sigas aprendiendo mucho más!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
