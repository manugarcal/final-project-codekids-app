const Contact = () => {
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
            style={{ backgroundImage: `url('assets/index03.png')` }}
          >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h5 text-red">Cantactanos</span>
                  <h1 className="mb-3 font-weight-bold text-teal">Ponerse en contacto</h1>
                  <p>
                    <a href="/" className="text-white">
                      Inicio
                    </a>{" "}
                    <span className="mx-3">/</span> <strong>Cantactanos</strong>
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
                <form action="#" method="post">
                  <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escribe tu mensaje."
                        cols="30"
                        rows="10"
                      ></textarea>
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
              <div className="col-lg-4 ml-auto">
                <div className="bg-white p-3 p-md-5">
                  <h3 className="text-black mb-4">Informacion de Contacto</h3>
                  <ul className="list-unstyled footer-link">
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Direccion:</span>
                      <span>Av. Pedro de valdivia #555, providencia, Santiago de Chile</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Telefono:</span>
                      <span>+56 2 4942 290</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Email:</span>
                      <span>info@CodeKids.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
