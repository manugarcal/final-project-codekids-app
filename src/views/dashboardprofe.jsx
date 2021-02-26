import Cardcomponent from "../Components/Card";
import Navbar2 from "../Components/Navbar-login";
import Table1 from "../Components/Table";
import "../style.css";
import CardNoButton from "../Components/CardNoButton";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Store/appContext";

const DashboardProfe = () => {

    const { store, actions } = useContext(Context);
    const [img, setImage] = useState(null);
    const [user, setUser] = useState(null);
    
  
    useEffect(() => {
      if (store.currentUser !== null) {
        let img = store.currentUser["user"]["avatar"];
        img = store.baseURL + "/api/user/" + img;
        setImage(img);
        let usuario = store.currentUser.user.username;
        setUser(usuario);
      }
      actions.planets()
      actions.mision()
      console.log(store.misiones)
      console.log(store.nombre_planeta)
    },[]);
    

  return (
    <>
      <Navbar2 />
      
      <div
        className="container-fluid "
        style={{
          backgroundImage: "url(https://i.ibb.co/VvkVhD0/space.jpg",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="row">
          <div className="col-md-3 sm-3">
            <h2 className="text-white">Profesor Guía</h2>
            <CardNoButton
              image={img !== "" ? img : null}
              title="Bienvenido"
              subtitle="Nuevamente a una nueva aventura"
              text={user}
            />
          </div>

          <div className=" col-md-9 sm-3">
            <h3 className="text-white text-center">Usuarios Registrados</h3>
            <Table1 />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardProfe;
