import React, { useContext, useEffect } from "react";
import Navbar2 from "../Components/Navbar-login";
import Cardcomponent from "../Components/Card";
import CollapseFaq from "../Components/CollapseFaq";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../Store/appContext";
import CardNoButton from "../Components/CardNoButton";
import "../style.css";

const Leccion = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.mision();
  }, []);

  return (
    <>
      <Navbar2 />
      <div
        className="container-fluid fondo-leccion"
        style={{ 
            backgroundImage: "url(https://i.ibb.co/VvkVhD0/space.jpg", 
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            height: "auto",
        }}
      >
        <div className="row">
          <div className="col-md-12 leccion media-playlist pr-5 align-middle">
            <div className="row">
              <div className="col-md-12 leccion media-playlist pr-5 align-middle">
                <div className="row">
                  <p className="pr-4 my-4 text-white">Media Playlist</p>
                  <div
                    class="btn-group my-auto"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-success">
                      <i class="fas fa-play-circle"></i>
                    </button>
                    <button type="button" class="btn btn-success">
                      <i class="fas fa-pause-circle"></i>
                    </button>
                    <button type="button" class="btn btn-success">
                      <i class="fas fa-chevron-circle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 leccion-instrucciones">
            <CardNoButton
              image="https://i.ibb.co/KxBJTJ0/Free-Space-Vector-Icons.jpg"
              title="Leccion 1"
              subtitle="comenzando el viaje"
              text={
                <>
                  <div>
                    <p>
                      Bienvenido capitán a esta nueva aventura que vamos a
                      comenzar, entiendo que pasaste tu curso de aprendizaje y
                      estamos listos para salvar el universo de los distintos
                      peligros que acechan en el espacio y los diferentes
                      planetas que vamos a recorrer. Para esto tenemos
                      herramientas que se llamarán “código”.{" "}
                    </p>
                    <br></br>
                    <p>
                      ¿Qué es el código?, esta es la magia de nuestro poder.
                      Simplemente permite que todo lo que tu creas que puedes
                      hacer, el código te permite poder realizarlo siempre y
                      cuando sepas cómo usar este poder llamado código. No te
                      preocupes yo te enseñare a usar este poder. ¡Vamos allá!
                    </p>
                    <br></br>
                    <p>
                      Misión 1: Salvar el planeta Glise de los Meteoritos.
                      Capitán se acerca un meteorito de un gran tamaño directo
                      al planeta Glise, necesitamos de tu ayuda para que el
                      meteorito se haga lo más pequeño posible, para que al
                      entrar al planeta se destruya fácilmente. Para esto debes
                      ordenar el “código” que aparece y hacer que el meteorito
                      se haga pequeño.
                    </p>
                    <br></br>
                    <p>
                      ¿como hacer esto? debemos entender como lo hacer el
                      meteorito mas pequeño en este caso debes ordenar de mayor
                      a menor el tamaño:
                    </p>
                    <br></br>
                    <p>
                      LG : Grande | MD: Mediano | SM: Pequeño | XS: Muy pequeño
                    </p>
                    <hr></hr>
                    <hr></hr>
                    <p>
                      ¿según lo que visualizas en el código como lo harías? abre
                      tu editor de texto y copia el código escrito y debes
                      ordenar el código, para que el planeta Glise pueda
                      salvarse.
                    </p>
                  </div>
                </>
              }
            />
          </div>
          <div className="leccion-2 col-md-8">
            <div className="row mx-0">
              <div className="leccion-code col-md-12">
                {/* <iframe height="265" style={{ width: "100%" }} scrolling="no" title="oNYZRRO" src="https://codepen.io/anpile/embed/oNYZRRO?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                    See the Pen <a href='https://codepen.io/anpile/pen/oNYZRRO'>oNYZRRO</a> by Andres Jesus Olivares Arredondo
                                    (<a href='https://codepen.io/anpile'>@anpile</a>) on <a href='https://codepen.io'>CodePen</a>.
                                </iframe> */}
                {/* AQUI SOLICITAR AL BACK QUE DEVUELVA */}
                <img
                  src={store.miss[0]?.codigo}
                  alt="leccion01"
                  border="0"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="leccion-tips col-md-12 mt-2 ">
              <div className="row mx-0">
                <h4 className="text-white my-4">Tips</h4>
              </div>
              <div className="row mx-0">
                <div className="col-md-12">
                  <CollapseFaq
                    title="Desbloquear solución"
                    text={
                      <>
                        <p className="text-center">
                          Favor dar click en el siguiente enlace para revelar la
                          solución
                        </p>
                        <div className="row">
                          <button
                            type="button"
                            className="btn btn-success mx-auto"
                          >
                            <a
                            target="_blank"
                              className="text-white"
                              href={store.miss[0]?.soluciones}
                            >
                              Click
                            </a>
                          </button>
                        </div>
                      </>
                    }
                    /* {[<iframe height="265" style={{ width: "100%" }} scrolling="no" title="Solucion meteor" src="https://codepen.io/anpile/embed/preview/qBqRbZP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                            See the Pen <a href='https://codepen.io/anpile/pen/qBqRbZP'>Solucion meteor</a> by Andres Jesus Olivares Arredondo
                                         (<a href='https://codepen.io/anpile'>@anpile</a>) on <a href='https://codepen.io'>CodePen</a>.
                                        </iframe>]} */
                  ></CollapseFaq>
                </div>
              </div>
              <div className="row mx-0">
                <button type="button" class="btn btn-success mx-auto my-3">
                  {"<< Atras"}
                </button>
                <Link to="/leccion/2">
                  <button type="button" class="btn btn-success mx-auto my-3">
                    {"Siguente >>"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leccion;
