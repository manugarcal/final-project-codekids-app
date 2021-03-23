/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import NavbarIndex from "../Components/Navbar";
import { Context } from "../Store/appContext";

const GettingStarted = (props) => {
  const { store, actions } = useContext(Context);
  const [inputData, setInputData] = useState([]);

  const { register, errors } = useForm();
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
            style={{ backgroundImage: `url('images/hero_1.jpg')` }}
          >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h5 text-red">Comenzemos</span>
                  <h1 className="mb-3 font-weight-bold text-teal">
                    Registrarme
                  </h1>
                  <p>
                    <a href="/" className="text-white">
                      Inicio
                    </a>{" "}
                    <span className="mx-3">/</span> <strong>Comenzemos</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DE AQUÍ HACIA ABAJO ESTÁ EL FORMULARIO>>>>>>>>>>>>*/}

        <div className="site-section bg-light" id="contact-section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-7 text-center mb-5">
                <h2>Registrese mediante este formulario</h2>
                <h5 className="text-muted">
                  rellene los campos necesarios para completar el registro, una
                  vez los datos esten correctos favor de hacer click al botón
                  enviar y listo!
                </h5>
              </div>
            </div>

            <div className="container">
              <form
                className="row gutters"
                onSubmit={
                  /* handleSubmit(onSubmit),  */ (e) =>
                    actions.handleSubmitRegister(e, props.history)
                }
              >
                {!!store.errors && (
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <strong>Error: </strong>
                        {store.errors.msg}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mb-2 text-primary">
                            Detalles Personales
                          </h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="eMail">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="eMail"
                              name="username"
                              onChange={(e) => actions.handleChange(e)}
                              placeholder="Ingrese un e-mail valido" /* onChange={handleInputChange} */
                              ref={register({
                                required: {
                                  value: true,
                                  message: "Ingrese un e-mail válido",
                                },
                                pattern: {
                                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                  message: "El e-mail no es valido",
                                },
                              })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                              {errors?.email?.message}
                            </span>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="file">Inserta una foto</label>
                            <input
                              type="file"
                              name="avatar"
                              onChange={(e) => actions.handleChangeFile(e)}
                              id="file"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="password">Contraseña</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              onChange={(e) => actions.handleChange(e)}
                              placeholder="Ingrese Contraseña"
                            />
                            <span className="text-danger text-small d-block mb-2">
                              {errors?.password?.message}
                              {errors.password_repeat && (
                                <p>{errors.password_repeat.message}</p>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="passwordrepeat">
                              Repetir Contraseña
                            </label>

                            <input
                              type="password"
                              className="form-control"
                              id="passwordrepeat"
                              name="passwordrepeat"
                              placeholder="Repetir Contraseña" /* onChange={handleInputChange} */
                              onChange={(e) => actions.handleChange(e)}
                            />
                            <span className="text-danger text-small d-block mb-2">
                              {errors?.passwordrepeat?.message}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="text-right">
                            <button
                              type="sumbmit"
                              id="submit"
                              name="button"
                              className="btn btn-primary mx-1"
                            >
                              Enviar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* fin del formulario */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
