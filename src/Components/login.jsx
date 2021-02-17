const Login = () => {
    return ( 
    
<div className="site-section bg-teal">
<div className="container" style={{"marginTop": "100px"}}>
<div id="main-wrapper" className="container">
    <div className="row justify-content-center">
        <div className="col-xl-10">
            <div className="card border-0">
                <div className="card-body p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="mb-5">
                                    <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                </div>

                                <h6 className="h5 mb-0">Bienvenido de Nuevo!</h6>
                                <p className="text-muted mt-2 mb-5">ingresa tu email y contraseña para acceder.</p>

                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"/>
                                    </div>
                                    <div className="form-group mb-5">
                                        <label for="exampleInputPassword1">Contraseña</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <button type="submit" className="btn btn-theme">Login</button>
                                    <a href="#l" className="forgot-link float-right text-primary">Olvidaste la contraseña?</a>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-inline-block">
                            <div className="account-block rounded-right">
                                <div className="overlay rounded-right"></div>
                                <div className="account-testimonial">
                                    <img src="assets/spaceman04.png" width="200px" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            

            <p className="text-muted text-center mt-3 mb-0">No tienes una cuenta? <a href="/" className="text-primary ml-1">registrate</a></p>

            

        </div>
        
    </div>
    
</div>
    
</div>
</div>

     );
}
 
export default Login;