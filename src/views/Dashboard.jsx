import Cardcomponent from "../Components/Card"
import "../style.css"

const Dashboard = () => {
    return (

        <>
            <h1> Dashboard</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="b1 col-md-4">
                        Usuario
                        <Cardcomponent
                            text="ajskdlaljsdjlkasjdlkaslkjdlaskdjlasjkldasljdjkasldljkasjldkasljkdjalksdjasldkasoidaudoiuaoidusaoiduasioduaoisdalcnasljncikjdhaiohdaoiudsaljlkalkajsdlkajdklajdlkauopidualjcam,nfklajhjdklajdklasjljaksdlkasjdklaslkjdasjkldjklasjdaslkdjasjkldjasdjasjlkdjalsdljaslkdasjdlaskjlasdjaslkncm,ankjahds" />

                    </div>

                    <div className="b2 col-md-4">Logros
                    <div className="logros card">  </div>
                    </div>


                    <div className="b3 col-md-4">
                       
                            <div className="mapa card" >


                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Dashboard;