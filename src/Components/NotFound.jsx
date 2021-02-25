import NavbarIndex from "./Navbar";


const NotFound = () => {
  return (
    <>
      <NavbarIndex />
      <div className="ftco-blocks-cover-1">
          <div
            className="site-section-cover overlay"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: `url('assets/spaceman01.png')` }}
          >
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <h1 className="font-weight-bold text-teal">
                    404 Pagina no encontrada
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
   </>
  );
};

export default NotFound;
