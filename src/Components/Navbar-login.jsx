import React from 'react';
import '../index.css'


const NavbarLogin = () => {
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <a href="#" className="navbar-brand"><i className="fa fa-cube"></i>Code<b>Kids</b></a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*   <!-- Collection of nav links, forms, and other content for toggling --> */}
                <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                    <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link active">Inicio</a>
                        <a href="#" className="nav-item nav-link">Acerca de</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Servicios</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Web Design</a>
                                <a href="#" className="dropdown-item">Web Development</a>
                                <a href="#" className="dropdown-item">Graphic Design</a>
                                <a href="#" className="dropdown-item">Digital Marketing</a>
                            </div>
                        </div>
                        <a href="#" className="nav-item nav-link">Blog</a>
                        <a href="#" className="nav-item nav-link">Contacto</a>
                    </div>                    
                    <div className="navbar-nav ml-auto">
                        <a href="#" className="nav-item nav-link notifications"><i class="far fa-bell"></i><span className="badge">1</span></a>
                        <a href="#" className="nav-item nav-link messages"><i class="far fa-envelope"></i><span className="badge">10</span></a>
                        <div className="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src="https://via.placeholder.com/36x36" className="avatar" alt="Avatar" /> Paula Wilson <b className="caret"></b></a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item"><i class="fas fa-user"></i> Perfil</a>
                                <a href="#" className="dropdown-item"><i class="fas fa-calendar-alt"></i> Calendario</a>
                                <a href="#" className="dropdown-item"><i class="fas fa-sliders-h"></i>Ajustes</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item"><i class="fas fa-power-off"></i> Salir</a>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
        </>
    );
}

export default NavbarLogin;