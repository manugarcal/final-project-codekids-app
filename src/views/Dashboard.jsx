import "../index.css"

const Dashboard = () => {
    return (
    
<>
            <h1> Dashboard</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="b1 col-md-4">
                        Usuario
                        <div className="usuario card" >
                            <img src= "https://via.placeholder.com/150" className="card-img-top rounded-circle" alt="..." />
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
                            
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/#" className="card-link"></a>
                                    <a href="/#" className="card-link"></a>
                                </div>
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