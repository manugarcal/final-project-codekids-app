import { event } from "jquery";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

const GettingStarted = () => {
  const [inputData, setInputData] = useState([]);

  const {
    register,
    errors,
    handleSubmit,
    setError,
    clearError,
    watch,
  } = useForm();

  const onSubmit = (data, e) => {
    event.preventDefault();

    setInputData([...inputData, data]);
    e.target.reset();
  };

  const password = useRef({});
  password.current = watch("password", "");

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
                <p>
                  rellene los campos necesarios para completar el registro, una
                  vez que haya hecho esto dele click a enviar y listo!
                </p>
              </div>
            </div>

            <div className="container">
              <form className="row gutters" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mb-2 text-primary">
                            Detalles Personales
                          </h6>
                        </div>

                        {/* desde aquí están los inputs*/}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="fullName">Nombre Completo</label>
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              name="fullname"
                              placeholder="Ingrese Nombre Completo"
                              ref={register({
                                required: {
                                  value: true,
                                  message: "Ingrese su Nombre Completo",
                                },
                                pattern: {
                                  value: /[a-zA-Z]+/,
                                  message: "Ingrese un Nombre válido",
                                },
                              })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                              {errors?.fullname?.message}
                            </span>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label for="userName">Nombre de Usuario</label>
                            <input
                              type="text"
                              className="form-control"
                              id="userName"
                              name="username"
                              placeholder="Ingrese Nombre de Usuraio"
                              /* onChange={handleInputChange} */ ref={register({
                                required: {
                                  value: true,
                                  message: "Ingrese un Nombre de usuario",
                                },
                                pattern: {
                                  value: /[a-zA-Z0-9]/,
                                  message:
                                    "Ingrese un Nombre de usuario válido",
                                },
                              })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                              {errors?.username?.message}
                            </span>
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
                              placeholder="Ingrese Contraseña" /* onChange={handleInputChange} */
                              ref={register({
                                required: {
                                  value: true,
                                  message: "debe elegir una contraseña",
                                },
                                pattern: {
                                  value: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                                  message:
                                    "Ingrese una contraseña válida de entre 8 y 12 caracteres",
                                },
                              })}
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
                              ref={register({
                                required: {
                                  value: true,
                                  message: "repita su constraseña",
                                },
                                pattern: {
                                  value: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                                  message: "Ingrese una contraseña válida",
                                },
                                validate: (value) =>
                                  value === password.current ||
                                  "Las contraseñas no coinciden",
                              })}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
