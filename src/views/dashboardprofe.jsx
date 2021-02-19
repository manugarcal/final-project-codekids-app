import "../style.css"

const DashboardProfe = () => {
    return (
    <>
    <h1> Dashboard Profe</h1>
<div className="container-fluid">
<div className="row">
    <div className="b4 col-md-3 sm-3">
        Guía  
        <div className="profe card">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Nombre</h5>
                    <p className="card-text">Datos </p>
                </div>
                
                <div className="tablealumnos card-body">
                    <a href="/#" className="card-link">Card link</a>
                    <a href="/#" className="card-link">Another link</a>
                </div>
            </div>                      
        </div>
         
        <div className="b5 col-md-9 sm-3">
            Estudiantes/
            <table class="table">
<thead>
<tr>
<th scope="col">X</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">E-mail</th>
<th scope="col">Estado</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td> activo</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
<td> activo</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Larry</td>
<td>the Bird</td>
<td>@twitter</td>
<td> activo</td>
</tr>
</tbody>
</table>
        </div>
    </div>
</div> 
 </>
 )
}
export default DashboardProfe;