import Forum from "../Components/Forum"

const Foro = () => {
  return (
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
          style={{ backgroundImage: `url('assets/index04.png')` }}
        >
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-5 mt-5 pt-5">
                {/* <span className="text-cursive h5 text-red">
                  Bienvenidos a nuestro sitio
                </span> */}
                <h1 className="mb-3 font-weight-bold text-teal">Foro</h1>
                <p>
                  <a href="/" className="text-white">
                    Inicio
                  </a>{" "}
                  <span className="mx-3">/</span> <strong>Foro</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section bg-teal">
        <div className="container"></div>
        <Forum />
      </div>
    </div>
  );
};

export default Foro;
