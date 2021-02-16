import React from 'react';
import '../index.css'
import NavbarLogin from '../components/Navbar-login'

const Leccion = () => {
    return (
        <>
            <NavbarLogin />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 leccion media-playlist pr-5 align-middle">
                        <div className="row">
                            <p className="pr-4 my-auto">Media Playlist</p>
                            <div class="btn-group my-auto" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-success"><i class="fas fa-play-circle"></i></button>
                                <button type="button" class="btn btn-success"><i class="fas fa-pause-circle"></i></button>
                                <button type="button" class="btn btn-success"><i class="fas fa-chevron-circle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="leccion-instrucciones col-md-4">
                        <div class="card" style={{ width: "100%" }}>
                            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="instrucciones" />
                            <div class="card-body">
                                <h5 class="card-title">Leccion 1</h5>
                                <p class="card-text">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aperiam quo rem temporibus nobis facilis illum officia praesentium deserunt,
                                    iure exercitationem rerum suscipit excepturi voluptate tempore numquam quam sunt, officiis placeat dolores, quis porro dicta labore reprehenderit?
                                    Unde veritatis odit minima facere temporibus necessitatibus earum reiciendis numquam voluptatibus quis nesciunt,
                                    voluptas inventore pariatur obcaecati architecto? Voluptates, eum facilis. Odio voluptatum esse quae natus, totam sed.
                                    Voluptates id perferendis, dolorem sed minus reprehenderit officia nobis recusandae voluptatum quae! Dolorum ullam,
                                    cumque animi aliquid ea obcaecati distinctio fugiat. Architecto sint culpa eum provident nesciunt corrupti deserunt praesentium,
                                    molestias molestiae, explicabo velit ipsum.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="leccion-2 col-md-8 ">
                        <div className="row mx-0">
                            <div className="leccion-code col-md-12">
                                INSERTAR EL CODIGOOOOOO DIOS AYUDA!!!
                            </div>
                        </div>
                        <div className="leccion-tips col-md-12 mt-2 ">
                            <div className="row mx-0">
                                <div className="col-md-10 ">
                                    <h4>Tips</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis magni laborum tempore ea, reprehenderit enim.
                                        Eveniet sint, incidunt necessitatibus a cum qui corporis natus voluptate similique sed voluptates harum maxime minima est molestiae?
                                        Aut reiciendis delectus, ipsam modi similique hic ad eaque! Praesentium odit pariatur quae ab nisi optio placeat expedita laborum consectetur,
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis magni laborum tempore ea, reprehenderit enim.
                                        Eveniet sint, incidunt necessitatibus a cum qui corporis natus voluptate similique sed voluptates harum maxime minima est molestiae?
                                        Aut reiciendis delectus, ipsam modi similique hic ad eaque! Praesentium odit pariatur quae ab nisi optio placeat expedita laborum consectetur
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 align-buttons">
                                <button type="button" class="btn btn-success">{">>"}</button>
                                <button type="button" class="btn btn-success">{"<<"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leccion;