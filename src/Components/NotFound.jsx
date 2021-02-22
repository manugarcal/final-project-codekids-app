const NotFound = () => {
  return (
    <div className="site-section bg-dark">
      <div className="container">
      <div className="container error-container">
        <div className="row  d-flex align-items-center justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="big-text">Oops!</h1>
            <h2 className="small-text">404 - PAGINA NO ENCONTRADA</h2>
          </div>
          <div className="col-md-6  text-center">
            <p className="text-light">
			&#x1F921;...Algo malió sal...&#x1F921;
            </p>
            <a
              href="/"
              className="button button-dark-blue iq-mt-15 text-center"
            >
              IR AL INICIO
            </a>
          </div>
        </div>
      </div>
    </div>
	</div>
  );
};

export default NotFound;
