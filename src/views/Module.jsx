import React from "react";
import Navbar2 from "../Components/Navbar-login";
import CollapseFaq from "../Components/CollapseFaq";

const Module = () => {
  return (
    <>
      <Navbar2 />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-4 "
            style={{
              minHeight: "800px",
              backgroundColor: "black",
              backgroundImage: "url(assets/space.jpg)",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
            }}
          >
            <div className="row ">
              <div className="col-md-12 align-self-center text center mt-5">
                <h2 className="text-center text-white">NOMBRE USUARIO</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/400x400"
                  alt="avatar"
                  style={{ borderRadius: "100%" }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-8 "
            style={{
              backgroundImage: "url(assets/space.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              width: "100%",
              height: "auto",
            }}
          >
            <div className="row my-5">
              <img
                src="assets/space-map-01.png"
                alt="space-map"
                className="img-fluid"
                style={{ borderRadius: "10%" }}
              />
              {/* agregar nombres de los modulos y linkearlos */}
              <CollapseFaq
                title="Selecciona tu planeta"
                text="Para registrarse en CodeKids, vaya a la seccion Registrarme y rellene los campos del formulario de forma correcta, luego haga click en enviar y listo, es asi de facil"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Module;
