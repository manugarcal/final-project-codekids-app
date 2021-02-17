import Cardcomponent from "../Components/Card";
import Table1 from "../Components/Table";
import "../style.css"


const DashboardProfe = () => {
    return (
   <>
            <h1> Dashboard Profe</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="b4 col-md-3 sm-3">
                    Guía
                         <Cardcomponent />
                    </div>

                        <div className="b5 col-md-9 sm-3">
                        Estudiantes/
                         <Table1 />
                        </div>

                    
                </div> 
            </div>
            </>
            
 
 )
}
export default DashboardProfe;