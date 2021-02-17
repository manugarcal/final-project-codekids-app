import "../style.css"

const Dashboard = () => {
    return (

        <>
            <h1> Dashboard</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="b1 col-md-4">
                        Usuario
                        <div className="usuario card" >
                            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> Nivel</h5>
                                <p className="card-text">Datos usuario</p>
                            </div>

                            <div className="card-body">
                                <a href="/#" className="card-link">Card link</a>
                                <button href="/#" className="btn-primary">Actualizar Datos</button>
                            </div>
                        </div>
                    </div>

                    <div className="b2 col-md-4">
                        Logros
                            <div className="logros card" >                           
                                                          
                                   
                                        <div className="card border-info mx-sm-1 p-3">
                                            <div className="card border-info shadow text-info p-3 my-card" ><span class="fa fa-car" aria-hidden="true"></span></div>
                                            <div className="logro1 row ">
                                            <div className="text-info text-center mt-3 mr-3 ml-3"><h4>Planetas Conquistados</h4></div>
                                            <div className="text-info text-center mt-2 "><h1>15</h1></div>
                                            </div>
                                        </div>  
                                        <div className="card border-success mx-sm-1 p-3">
                                            <div className="card border-success shadow text-success p-3 my-card"><span class="fa fa-eye" aria-hidden="true"></span></div>
                                            <div className="logro1 row">
                                            <div className="text-success text-center mt-3 mr-3 ml-3"><h4>Herramientas Obtenidas</h4></div>
                                            <div clclassName="text-success text-center mt-2"><h1>27</h1></div>
                                            </div>
                                        </div>   
                                        <div className="card border-danger mx-sm-1 p-3">
                                            <div className="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-heart " aria-hidden="true"></span></div>
                                            <div className="logro1 row ">
                                            <div className="text-danger text-center mt-3 mr-3 ml-3"><h4>Viajes Completados</h4></div>
                                            <div className="text-danger text-center mt-2"><h1>13</h1></div>
                                            </div>
                                        </div>        
                                        <div className="card border-warning mx-sm-1 p-3 ">
                                            <div className="card border-warning shadow text-warning p-3 my-card" ><span class="fa fa-inbox" aria-hidden="true"></span></div>
                                            <div className="logro1 row">
                                            <div className="text-warning text-center mt-3 mr-3 ml-3"><h4>algo mas logrado</h4></div>
                                            <div clclassName="text-warning text-center mt-2"><h1>23</h1></div>
                                            </div>
                                        </div>     
                                        <div className="card border-warning mx-sm-1 p-3 ">
                                            <div className="card border-warning shadow text-warning p-3 my-card" ><span class="fa fa-inbox" aria-hidden="true"></span></div>
                                            <div className="logro1 row">
                                            <div className="text-warning text-center mt-3 mr-3 ml-3"><h4>algun otro logro</h4></div>
                                            <div clclassName="text-warning text-center mt-2"><h1>66</h1></div>
                                            </div>
                                        </div>            
                                    
                                
                            
                                _____________________________
                           
                    </div>
                </div>


                <div className="b3 col-md-4">
                    Mapa
                            <div className="mapa card" >
                        <img src="..." className="card-img-top rounded-circle" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> </h5>
                            <p className="card-text"></p>
                        </div>

                        <div className="card-body">
                            <a href="/#" className="card-link"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>

    )
}

export default Dashboard;