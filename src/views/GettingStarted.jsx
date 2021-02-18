
import { event } from 'jquery';
import React, {  useState } from 'react';
import {useForm} from 'react-hook-form';

const GettingStarted = () => {

	const [inputData, setInputData] = useState ({
		fullname:"",
		username:"",
		phone:"",
		email:"",
		password:"",
		passwordrepeat:"",
		street:"",
		city:"",
		state:"",
		zip:""	

	})
	
	 const handleInputChange = (event) =>{
		/* console.log(event.target.value) */
		setInputData({
			...inputData,
			[event.target.name] : event.target.value
			  
		})
	} 

	const enviarDatos = (event) => 	{
		event.preventDefault();  
		console.log(inputData.fullname )
	} 
	const {register, errors, handleSubmit} = useForm();
	
	const onSubmit = (data) =>{
		console.log(data)
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


				{/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DE AQUÍ HACIA ABAJO ESTÁ EL FORMULARIO>>>>>>>>>>>>*/}


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

							<div className="container" >
								<form className="row gutters" onSubmit={handleSubmit(onSubmit)} >
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="card h-100">
											<div className="card-body">
												<div className="row gutters">
													<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
														<h6 className="mb-2 text-primary">Detalles Personales</h6>
													</div>

													{/* desde aquí están los inputs*/}
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="fullName">Nombre Completo</label>
															<input type="text" className="form-control" id="fullName" name="fullname" placeholder="Ingrese Nombre Completo"
															 ref={
																 register(
																	 {
																		 required: {value: true, message: "Ingrese su Nombre Completo"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.fullname?.message}
														 </span>
															 
														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="userName">Nombre de Usuario</label>
															<input type="text" className="form-control" id="userName" name="username" placeholder="Ingrese Nombre de Usuraio" onChange={handleInputChange} ref={
																 register(
																	 {
																		 required: {value: true, message: "Ingrese un Nombre de usuario valido"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.username?.message}
														 </span>

														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="phone">Telefono</label>
															<input type="tel" className="form-control" id="phone" name="phone" placeholder="Ingrese numero de telefono" onChange={handleInputChange} 
															ref={
																 register(
																	 {
																		 required: {value: true, message: "Ingrese un telefono válido"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.phone?.message}
														 </span>

														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="eMail">Email</label>
															<input type="email" className="form-control" id="eMail" name="email" placeholder="Ingrese un e-mail valido" onChange={handleInputChange}
															ref={
																 register(
																	 {
																		 required: {value: true, message: "Ingrese un e-mail valido"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.email?.message}
														 </span>

														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="password">Contraseña</label>
															<input type="password" className="form-control" id="password" name="password" placeholder="Ingrese Contraseña" onChange={handleInputChange}
															ref={
																 register(
																	 {
																		 required: {value: true, message: "debe elegir una password"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.password?.message}
														 </span>

														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="password">Repetir Contraseña</label>
															
															<input type="password" className="form-control" id="passwordRepeat" name="passwordrepeat" placeholder="Repetir Contraseña"onChange={handleInputChange} 
															ref={
																 register(
																	 {
																		 required: {value: true, message: "repita su pasword"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.passwordrepeat?.message}
														 </span>
														
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
															
															<input type="name" className="form-control" id="street" name="street" placeholder="Ingrese calle" onChange={handleInputChange}
															ref={
																 register(
																	 {
																		 required: {value: true, message: "ingrese nombre de su calle"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.street?.message}
														 </span>

														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="ciTy">Ciudad</label>
															
															<input type="name" className="form-control" id="city" name="city" placeholder="Ingrese Ciudad" onChange={handleInputChange} 
															ref={
																 register(
																	 {
																		 required: {value: true, message: "Ingrese su ciudad"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.city?.message}
														 </span>
														
														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="sTate">Estado</label>
															
															<input type="text" className="form-control" id="state" name="state" placeholder="Ingrese Estado" onChange={handleInputChange} 
															ref={
																 register(
																	 {
																		 required: {value: true, message: "Ingrese su Estado/Región"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.state?.message}
														 </span>

														</div>
													</div>
													<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
														<div className="form-group">
															<label for="zIp">Codigo Postal</label>
															
															<input type="text" className="form-control" id="zip" name="zip"  placeholder="Codigo Postal" onChange={handleInputChange} 
															ref={
																 register(
																	 {
																		 required: {value: true, message: "Ingrese un codigo postal Valido"}
																	 }
																 )
															 } /> 
														<span className="text-danger text-small d-block mb-2">
															 { errors?.zip?.message}
														 </span>

														</div>
													</div>	
												</div>
												<div className="row gutters" >
													<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
														<div className="text-right">
															<button type="button" id="cancel" name="cancel?" className="btn btn-secondary">Cancelar</button>
															<button type="sumbmit" id="submit" name="button" className="btn btn-primary"  >Enviar</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							


						</div>
					</div>
				
			</div>
		</>
	);
};

export default GettingStarted;
