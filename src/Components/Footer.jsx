import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
            <form action="#" className="d-flex" className="subscribe">
              <input
                type="text"
                className="form-control mr-3"
                placeholder="Email"
              />
              <input type="submit" value="Enviar" className="btn btn-primary mt-2" />
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
                    <a href="#">Foro</a>
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
    </footer>
  );
};

export default Footer;
