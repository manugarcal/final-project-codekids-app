import React, { useContext, useEffect } from "react";
import Navbar2 from "../Components/Navbar-login";
import CollapseFaq from "../Components/CollapseFaq";
import { Link } from "react-router-dom";
import "../style.css";
import { Context } from "../Store/appContext";
import CardAudio from "../Components/CardMultimedia";
import Slider2 from "../Components/carousel2";

const Leccion2 = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.mision();
  }, [actions]);

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
            <CardAudio
              image="https://image.freepik.com/free-photo/hooded-computer-hacker-stealing-information-with-laptop_155003-1918.jpg"
              title="Leccion 2"
              subtitle="Apreta el boton Play para escuchar la misión y poder salvar al planeta Glise"
            />
          </div>
          <div className="leccion-2 col-md-8">
            <div className="row mx-0">
              <div className="leccion-code col-md-12">
                <Slider2 />
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
                              rel="noreferrer"
                              className="text-white"
                              href={store.miss[1]?.soluciones}
                            >
                              Click
                            </a>
                          </button>
                        </div>
                      </>
                    }
                  ></CollapseFaq>
                </div>
              </div>
              <div className="row mx-0 d-flex justify-content-center">
                <Link to="/leccion/1">
                  <button type="button" class="btn btn-success mx-5 my-3">
                    {"<< Atras"}
                  </button>
                </Link>
                <button type="button" class="btn btn-success mx-5 my-3">
                  {"Siguente >>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leccion2;
