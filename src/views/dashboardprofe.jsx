import "../index.css"

const DashboardProfe = () => {
    return (
    <>
<div className="container-fluid">
<div className="row">
    <div className="b1 col-lg-4">
        Guía  
        <div className="card" style={{width: "18rem"}}>
            <img src="https://via.placeholder.com/160x160" className="card-img-top rounded-circle" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Nombre</h5>
                    <p className="card-text">Datos </p>
                </div>
                
                <div className="card-body">
                    <a href="/#" className="card-link">Card link</a>
                    <a href="/#" className="card-link">Another link</a>
                </div>
            </div>                      
        </div>
         
        <div className="b2 col-lg-8">
            Estudiantes/
            <table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">First</th>
<th scope="col">Last</th>
<th scope="col">Handle</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Larry</td>
<td>the Bird</td>
<td>@twitter</td>
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