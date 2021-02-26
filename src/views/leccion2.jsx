import React, { useContext, useEffect } from "react";
import Navbar2 from "../Components/Navbar-login";
import Cardcomponent from "../Components/Card";
import CollapseFaq from "../Components/CollapseFaq";
import { Link } from "react-router-dom";
import "../style.css";
import CardNoButton from "../Components/CardNoButton";
import { Context } from "../Store/appContext";

const Leccion2 = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
      actions.mision();
    }, []);
  
  return (
    <>
      <Navbar2 />
      <div
        className="container-fluid"
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
              image="https://i.ibb.co/f24KHnn/leccion2.jpg" 
              title="Leccion 2"
              subtitle="comenzando el viaje"
              text={
                <>
                  <div>
                    <p>
                      Capitán nuevamente nos solicitan desde el planeta Glise,
                      esta vez han sufrido un ataque en sus instalaciones de
                      defensa. Los enemigos han desactivado todas sus armas y
                      están perdiendo la batalla.
                    </p>
                    <br></br>
                    <p>
                      El personal de defensa ha enviado un mensaje pero no lo
                      puedo entender completamente necesito que limpie el código
                      y quede completamente sin errores.{" "}
                    </p>
                    <br></br>
                    <p>¿Cómo hacer esto?</p>
                    <br></br>
                    <p>
                      debes borrar los errores de los mensajes para que pueda
                      restablecer los campos de fuerza del planeta… RAPIDO!
                    </p>
                   
                  </div>
                </>
              }
              textButton="Ingresar"
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
                  src={store.miss[1]?.codigo}
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
                              href={store.miss[1]?.soluciones}
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
                <Link to="/leccion/1">
                  <button type="button" class="btn btn-success mx-auto my-3">
                    {"<< Atras"}
                  </button>
                </Link>
                <button type="button" class="btn btn-success mx-auto my-3">
                  {"Siguente >>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row mx-0">

                        <div className="col-md-2 align-buttons">
                        </div>
                    </div> */}
    </>
  );
};

export default Leccion2;
