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
            style={{ backgroundImage: `url('images/hero_1.jpg')` }}
          >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h5 text-red">
                    Welcome To Our Website
                  </span>
                  <h1 className="mb-3 font-weight-bold text-teal">About Us</h1>
                  <p>
                    <a href="/" className="text-white">
                      Home
                    </a>{" "}
                    <span className="mx-3">/</span> <strong>About</strong>
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
                <span className="text-cursive h5 text-red">About Us</span>
                <h3 className="text-black">Bring Fun Life To Your Kids</h3>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    harum, magni sequi nostrum maxime enim.
                  </span>
                  <span>
                    Magnam id atque dicta deleniti, ipsam ipsum distinctio.
                    Facilis praesentium voluptatem accusamus, earum veritatis,
                    laudantium.
                  </span>
                </p>

                <p className="mt-5">
                  <a href="#" className="btn btn-warning py-4 btn-custom-1">
                    More About Us
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
                <span className="text-cursive h5 text-red">The Team</span>
                <h3 className="text-white text-center">Meet The Team</h3>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  nesciunt nemo vel earum maxime neque!
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, sapiente.
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, sapiente.
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, sapiente.
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
