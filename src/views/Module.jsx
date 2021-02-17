import React from "react";
import CardNoButton from "../Components/CardNoButton";
import Navbar2 from "../Components/Navbar-login";

const Module = () => {
  return (
    <>
      <Navbar2 />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 leccion" style={{ minHeight: "800px" }}>
            <div className="row ">
              <div className="col-md-12 align-self-center text center mt-5">
                <h2 className="text-center">NOMBRE USUARIO</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-5 d-flex justify-content-center" >
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/400x400"
                  alt="avatar-image"
                  style={{ borderRadius: "100%"}}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 leccion" /* style={{ minHeight: "850px"}} */>
            <div className="row my-5">
              <img
                src="assets/space-map-01.png"
                alt="space-map"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Module;
