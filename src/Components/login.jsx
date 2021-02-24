import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { Context } from "../Store/appContext";
import NavbarIndex from "./Navbar";

const Login = (props) => {
  const { store, actions } = useContext(Context);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    e.target.reset();
  };
  return (
    <>
      <NavbarIndex />
      <div className="site-section bg-teal">
        <div className="container" style={{ marginTop: "100px" }}>
          <div id="main-wrapper" className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <div className="row no-gutters">
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="mb-5">
                            <h3 className="h4 font-weight-bold text-theme">
                              Login
                            </h3>
                          </div>

                          <h6 className="h5 mb-0">Bienvenido de Nuevo!</h6>
                          <p className="text-muted mt-2 mb-5">
                            ingresa tu email y contraseña para acceder.
                          </p>

                          <form
                            onSubmit={(e) =>
                              actions.handleSubmit(e, props.history)
                            }
                          >
                            {!!store.errors && (
                              <div className="row">
                                <div className="col-12">
                                  <div
                                    className="alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                  >
                                    <strong>Error: </strong>{store.errors.msg}
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
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                                placeholder="ingresa tu email"
                                name="username"
                                /*aqui estoy insertando el metodo en flux */
                                onChange={(e) => actions.handleChange(e)}
                                ref={register({
                                  required: {
                                    value: true,
                                    message: "Ingrese su email",
                                  },
                                })}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                              />
                              <span className="text-danger text-small d-block mb-2">
                                {errors?.email?.message}
                              </span>
                            </div>
                            <div className="form-group mb-5">
                              <label htmlFor="password">Contraseña</label>
                              <input
                                placeholder="ingresa tu contraseña"
                                /*aqui estoy insertando el metodo en flux */
                                onChange={(e) => actions.handleChange(e)}
                                name="password"
                                ref={register({
                                  required: {
                                    value: true,
                                    message: "Ingrese una contraseña corecta",
                                  },
                                })}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                              />
                              <span className="text-danger text-small d-block mb-2">
                                {errors?.password?.message}
                              </span>
                            </div>
                            <button type="submit" className="btn bg-success">
                              Login
                            </button>
                            <a
                              href="#l"
                              className="forgot-link float-right text-primary"
                            >
                              Olvidaste la contraseña?
                            </a>
                          </form>
                        </div>
                      </div>

                      <div className="col-lg-6 d-none d-lg-inline-block">
                        <div className="account-block rounded-right">
                          <div className="overlay rounded-right"></div>
                          <div className="account-testimonial">
                            <img
                              src="assets/spaceman04.png"
                              width="200px"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted text-center mt-3 mb-0">
                  No tienes una cuenta?{" "}
                  <a href="/" className="text-primary ml-1">
                    registrate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
