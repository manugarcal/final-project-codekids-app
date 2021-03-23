import CardPresetation from "../Components/CardPresetation";
import MediaText from "../Components/MediaText";
import NavbarIndex from "../Components/Navbar";

const About = () => {
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
            style={{ backgroundImage: `url('assets/kid02.jpg')` }}
          >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <h1 className="mb-3 font-weight-bold text-teal">
                    Quienes Somos
                  </h1>
                  <p>
                    <a href="/" className="text-white">
                      Inicio
                    </a>{" "}
                    <span className="mx-3">/</span>{" "}
                    <strong>Acerca de nosotros</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MediaText
          title="Acerca de Nosotros"
          subtitle="Diversion y aprendizaje para tus niños"
          text="En CodeKids sabemos que la mejor forma de aprender es jugando,
        por lo que nuestra propuesta para potenciar el aprendizaje
        esta orientada a sacarle partido a esta premisa"
          buttonText="Sigue descubriendo aún más"
          img="assets/spaceman01.png"
          url="/about"
        />

        <div className="site-section bg-teal">
          <div className="container">
            <div className="row justify-content-center text-center mb-5 section-2-title">
              <div className="col-md-6">
                <span className="text-cursive h5 text-red">El Equipo</span>
                <h3 className="text-white text-center">Conoce al Equipo</h3>
                <p className="mb-5">
                  Somos un grupo de desarrolladores apasionados por el codigo,
                  que quieren transmitir diha pasion a los mas pequeños
                </p>
              </div>
            </div>
            <div className="row align-items-stretch">
              <CardPresetation
                name="Andres Olivares"
                job="Full Stack Developer"
                ceo="Fundador"
                img="assets/andres.jpg"
              />

              <CardPresetation
                name="Manuel Garcia"
                job="Full Stack Developer"
                ceo="Fundador"
                img="assets/manuel.jpeg"
              />

              <CardPresetation
                name="Alejandro Belmar"
                job="Full Stack Developer"
                ceo="Fundador"
                img="assets/jano.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
