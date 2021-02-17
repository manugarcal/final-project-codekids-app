import Cardcomponent from "../Components/Card";
import Table1 from "../Components/Table";
import "../style.css"


const DashboardProfe = () => {
    return (
   <>
            <h1> Dashboard Profe</h1>
            <div className="container-fluid ">
                <div className="row">
                    <div className="columna-profe col-md-3 sm-3">
                   <h2>Guía</h2> 
                         <Cardcomponent />
                    </div>

                        <div className="columna-table col-md-9 sm-3">
                        Estudiantes/
                         <Table1 />
                        </div>

                    
                </div> 
            </div>
            </>
            
 
 )
}
export default DashboardProfe;