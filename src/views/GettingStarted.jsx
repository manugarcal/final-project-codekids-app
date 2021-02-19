const GettingStarted = () => {
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
                    Comenzemos
                  </span>
                  <h1 className="mb-3 font-weight-bold text-teal">
                    Registrarme
                  </h1>
                  <p>
                    <a href="/" className="text-white">
                      Inicio
                    </a>{" "}
                    <span className="mx-3">/</span>{" "}
                    <strong>Comenzemos</strong>
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
                <h2>Registrese mediante este formulario</h2>
                <p>
                  rellene los campos necesarios para completar el registro, una vez que haya hecho esto dele click a enviar y listo!
                </p>
              </div>
            </div>
            
            <div className="container">
<div className="row gutters">

<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-primary">Detalles Personales</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="fullName">Nombre Completo</label>
					<input type="text" className="form-control" id="fullName" placeholder="Ingrese Nombre Completo"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="userName">Nombre de Usuario</label>
					<input type="text" className="form-control" id="userName" placeholder="Ingrese Nombre de Usuraio"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="phone">Telefono</label>
					<input type="text" className="form-control" id="phone" placeholder="Enter phone number"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" placeholder="Email"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="password">Contraseña</label>
					<input type="password" className="form-control" id="password" placeholder="Ingrese Contraseña"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="password">Repetir Contraseña</label>
					<input type="password" className="form-control" id="password" placeholder="Repetir Contraseña"/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-primary">Direccion</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="Street">Calle</label>
					<input type="name" className="form-control" id="Street" placeholder="Ingrese calle"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="ciTy">Ciudad</label>
					<input type="name" className="form-control" id="ciTy" placeholder="Ingrese Ciudad"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="sTate">Estado</label>
					<input type="text" className="form-control" id="sTate" placeholder="Ingrese Estado"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="zIp">Codigo Postal</label>
					<input type="text" className="form-control" id="zIp" placeholder="Codigo Postal"/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right ">
					<button type="button" id="submit" name="submit" className="btn btn-secondary mx-1">Cancelar</button>
					<button type="button" id="submit" name="submit" className="btn btn-primary mx-1">Enviar</button>
				</div>
			</div>
		</div>
	</div>
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

export default GettingStarted;
