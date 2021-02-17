import Cardcomponent from "../Components/Card"
import "../style.css"



const Dashboard = () => {
    return (

        <>
            <h1> Dashboard</h1>
            <div className="container">
                <div className="row">
                    <div className="b1 col-md-4">
                        Usuario
                        <Cardcomponent
                            title="Nivel:"
                            subtitle="Nombre:"
                            textButton="Actualizar Datos"
                            text=""

                        />
                    </div>

                    <div className="b2 col-md-4  ">
                        <h2>Logros</h2>
                        
                        <div className="logros card d-flex justify-content-between">
                            <div className="row d-flex justify-content-between">
                                <div className="col-12">
                                    <img src="assets/logros/1.png" className="img-fluid w-25 " />
                                    <img src="assets/logros/2.png" className="img-fluid w-25" />
                                    <img src="assets/logros/3.png" className="img-fluid w-25" />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-12">
                                    <img src="assets/logros/4.png" className="img-fluid w-25" />
                                    <img src="assets/logros/5.png" className="img-fluid w-25" />
                                    <img src="assets/logros/6.png" className="img-fluid w-25" />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-12">
                                    <img src="assets/logros/7.png" className="img-fluid w-25" />
                                    <img src="assets/logros/8.png" className="img-fluid w-25" />
                                    <img src="assets/logros/9.png" className="img-fluid w-25" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="b3 col-md-4">
                        Mapa
                    <div className="mapa card" >


                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Dashboard;