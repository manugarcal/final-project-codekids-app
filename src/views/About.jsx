const About = () => {
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
            style={{ backgroundImage: `url('assets/index02.png')` }}
          >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h5 text-red">
                    Bienvenidos a nuestro sitio
                  </span>
                  <h1 className="mb-3 font-weight-bold text-teal">Quienes Somos</h1>
                  <p>
                    <a href="/" className="text-white">
                      Inicio
                    </a>{" "}
                    <span className="mx-3">/</span> <strong>Acerca de nosotros</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="col-md-5 ml-auto pl-md-5">
                <span className="text-cursive h5 text-red">Acerca de Nosotros</span>
                <h3 className="text-black">Diversion y aprendizaje para tus niños</h3>
                <p>
                En CodeKids sabemos que la mejor forma de aprender es jugando, por lo que nuestra propuesta para potenciar el aprendizaje esta orientada a sacarle partido a esta premisa
                </p>

                <p className="mt-5">
                  <a href="#" className="btn btn-warning py-4 btn-custom-1">
                    MAS SOBRE NOSOTROS
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section bg-teal">
          <div className="container">
            <div className="row justify-content-center text-center mb-5 section-2-title">
              <div className="col-md-6">
                <span className="text-cursive h5 text-red">El Equipo</span>
                <h3 className="text-white text-center">Conoce al Equipo</h3>
                <p className="mb-5">
                  Somos un grupo de desarrolladores apasionados por el codigo, que quieren transmitir diha pasion a los mas pequeños
                </p>
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="post-entry-1 h-100 person-1 teal">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />

                  <div className="post-entry-1-contents">
                    <span className="meta">Founder</span>
                    <h2>Andres Olivares</h2>
                    <p>
                      Full Stack Software Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="post-entry-1 h-100 person-1 yellow">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />

                  <div className="post-entry-1-contents">
                    <span className="meta">Founder</span>
                    <h2>Manuel Garcia</h2>
                    <p>
                    Full Stack Software Developer
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-5">
                <div className="post-entry-1 h-100 person-1 red">
                  <img
                    src="images/person_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />

                  <div className="post-entry-1-contents">
                    <span className="meta">Founder</span>
                    <h2>Alejandro Belmar</h2>
                    <p>
                    Full Stack Software Developer
                    </p>
                  </div>
                </div>
              </div>

              

              

          
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default About;
