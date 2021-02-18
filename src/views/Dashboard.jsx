import Cardcomponent from "../Components/Card"
import "../style.css"



const Dashboard = () => {
    return (

        <>
            <h1> Dashboard</h1>
            <div className="div-padre-dash container">
                <div className="row">
                    <div className="b1 col-md-4">
                        <h2>Usuario</h2>
                        <Cardcomponent
                            title="Nivel:"
                            subtitle="Nombre:"
                            textButton="Actualizar Datos"
                            text=""
                            
                        />
                    </div>

                    <div className="b2 col-md-4  ">
                        <h2>Logros</h2>
                        
                        <div className="logros card d-flex justify-content-between" style={{backgroundColor: "rgb(88, 21, 107)"}}>
                            <div className="row d-flex d-flex justify-content-around">
                                <div className="col-12 d-flex justify-content-around">
                                    <img src="assets/logros/1.png" className="img-fluid w-25 " />
                                    <img src="assets/logros/2.png" className="img-fluid w-25" />
                                    <img src="assets/logros/3.png" className="img-fluid w-25"/>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-around">
                                <div className="col-12 d-flex justify-content-around">
                                    <img src="assets/logros/4.png" className="img-fluid w-25" />
                                    <img src="assets/logros/5.png" className="img-fluid w-25" />
                                    <img src="assets/logros/6.png" className="img-fluid w-25" />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-around">
                                <div className="col-12 d-flex justify-content-around">
                                    <img src="assets/logros/7.png" className="img-fluid w-25" />
                                    <img src="assets/logros/8.png" className="img-fluid w-25" />
                                    <img src="assets/logros/9.png" className="img-fluid w-25" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="b3 col-md-4">
                        
                        <h2>Mapa</h2>
                    <div className="mapa card" style={{backgroundColor: "rgb(88, 21, 107)"}} >
                        <h5>Seleccione Planeta</h5>
                        
                    <img src="assets/space-map-01.png" className="img-fluid w-100 mb-3" />
                    <h2>Misión</h2>
                    <h5>Seleccione Misión</h5>
                    <img src="assets/level-map.png" className="img-fluid w-100" />
                        

                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Dashboard;