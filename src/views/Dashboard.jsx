import { useContext, useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import CardNoButton from "../Components/CardNoButton";
import CollapseFaq from "../Components/CollapseFaq";
import Navbar2 from "../Components/Navbar-login";
import { Context } from "../Store/appContext";
import "../style.css";

const Dashboard = () => {
  const [img, setImage] = useState(null);
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    if (store.currentUser !== null) {
      let img = store.currentUser["user"]["avatar"];
      img = store.baseURL + "/api/user/" + img;
      setImage(img);
      let usuario = store.currentUser.user.username;
      setUser(usuario);
    }
    actions.mision()
    console.log(store.misiones)
    actions.planets()
    console.log(store.nombre_planeta)
  },[]);
  
  return (
    <>
      <Navbar2 />
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(assets/space.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="b1 col-md-4">
              <h2>Usuario</h2>
              <CardNoButton
                image={img !== "" ? img : null}
                title="Bienvenido"
                subtitle="Nuevamente a una nueva aventura"
                text={user}
              />
            </div>

            <div className="b2 col-md-4  ">
              <h2>Logros</h2>

              <div
                className="logros card d-flex justify-content-between"
                style={{ backgroundColor: "rgb(88, 21, 107)" }}
              >
                <div className="row d-flex d-flex justify-content-around">
                  <div className="col-12 d-flex justify-content-around">
                    <img
                      src="assets/logros/1.png"
                      className="img-fluid w-25 "
                    />
                    <img src="assets/logros/2.png" className="img-fluid w-25" />
                    <img src="assets/logros/3.png" className="img-fluid w-25" />
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
              <div
                className="mapa card"
                style={{ backgroundColor: "rgb(88, 21, 107)" }}
              >
                <h5>Seleccione Planeta</h5>

                <img
                  src="assets/space-map-01.png"
                  className="img-fluid w-100 mb-3"
                />
                <CollapseFaq 
                title="selecciona tu planeta" 
                text = {!!store.nombre_planeta && store.nombre_planeta.map((planeta, index) =>{
                  return (
                    <h4 className="text-center">
                        <Link key={index} to="/Leccion/1">{planeta.nombre}</Link><br/>
                    </h4>

                  )
                })
                }
                />
                <h2>Misión</h2>
                <h5>Seleccione Misión</h5>
                <img src="assets/level-map.png" className="img-fluid w-100" />
                <CollapseFaq title="Selecciona una mision"  text={!!store.miss && store.miss.map((mision, index) =>{
                     return (
                       <>
                       <div className="col-12 d-flex justify-content-center">
                       <Link key={index} to={"/leccion/" + mision.id}><button type="button" className="btn btn-primary btn-lg btn-block my-2" style={{width: "300px"}}>{mision.id}</button> </Link> 
                       <br/>
                       </div>
                       </>
                     )
                   })} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
