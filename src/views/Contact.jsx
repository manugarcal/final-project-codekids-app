import { event } from 'jquery';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ContactInfo from "../Components/ContactInfo"

const Contact = () => {

  const [inputData, setInputData] = useState([]);
  
  const { register, errors, handleSubmit, setError, clearError, watch} = useForm();

  const onSubmit = (data, event) => {
		event.preventDefault();		
		setInputData([
			...inputData,
			data
		])
		event.target.reset();
	}



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
            style={{ backgroundImage: `url('assets/kid03.jpg')` }} >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h5 text-red">Cantactanos</span>
                  <h1 className="mb-3 font-weight-bold text-teal">Ponerse en contacto</h1>
                  <p>
                    <a href="/" className="text-white">
                      Inicio
                    </a>{" "}
                    <span className="mx-3">/</span> <strong>Contactanos</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section bg-light" id="contact-section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-7 text-center mb-5">
                <h2>Pongase en contacto con nosotros usando este formulario</h2>
                <p>
                  Rellene los campos requeridos para ponerse en contacto con nostros y luego dele click en enviar, en poco tiempo nos pondremos en contacto con usted!
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 mb-5">
                <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                    <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ingresa tu nombre"
                        name="nombre"
                        id="nombre"
                      ref={
                        register(
                          {
                            required: { value: true, message: "Ingrese su Nombre" },
                            pattern: { value: /[a-zA-Z]+/, message: 'Ingrese su nombre correctamente' }
                          }
                        )

                      } />
                      <span className="text-danger text-small d-block mb-2">
															{errors?.nombre?.message}
														</span>

                    </div>
                    <div className="col-md-6">
                    <label htmlFor="apellido">Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ingresa tu apellido"
                        name="apellido"
                        id="apellido"
                      
                      ref={
                        register(
                          {
                            required: { value: true, message: "Ingrese su Apellido" },
                            pattern: { value: /[a-zA-Z]+/, message: 'Ingrese su apellido correctamente correctamente' }
                          }
                        )

                      }
                        />
                        <span className="text-danger text-small d-block mb-2">
															{errors?.apellido?.message}
														</span>

                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                    <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ingresa tu email"
                        name="email"
                        id="email"
                        ref={
                          register(
                            {
                              required: { value: true, message: "Ingrese su e-mail" },
                              pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Ingrese su email en el formato email@compañía.com' }
                              
                            }
                          )
                          }/>
                          <span className="text-danger text-small d-block mb-2">
															{errors?.email?.message}
														</span>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                    <label htmlFor="message">Mensaje</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="Escribe tu mensaje."
                        cols="30"
                        rows="10"
                        ref={
                          register(
                            {
                              required: { value: true, message: "Escriba su mensaje" },
                              pattern: { value: /[a-zA-Z0-9]/}
                            }
                          )
  
                        }
                          
                      ></textarea>
                      <span className="text-danger text-small d-block mb-2">
															{errors?.mensaje?.message}
														</span>

                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mr-auto">
                      
                      <input
                        type="submit"
                        className="btn btn-block btn-primary text-white py-3 px-5"
                        value="Enviar Mensaje"
                       />
                    </div>
                  </div>
                </form>
              </div>
              <ContactInfo />
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
