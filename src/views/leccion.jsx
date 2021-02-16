import React from 'react';
import '../index.css'

import Navbar2 from '../Components/Navbar-login';
import Cardcomponent from '../Components/Card';


const Leccion = () => {
    return (
        <>


            <div className="container-fluid">
                <div className="row">
                    <div className="leccion media-playlist col-md-12">
                        test
                </div>
                </div>
                <div className="row">
                    <div className="leccion-instrucciones col-md-4">
                        test
                    </div>
                    <div className="leccion col-md-8 g-0">
                        <div className="leccion-code col-md-12">
                            test
                        </div>
                        <div className="leccion-code col-md-12">
                            test
                        </div>
                    </div>

            <Navbar2 />
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
                        <Cardcomponent 
                        image="https://via.placeholder.com/400x200"
                        title="Leccion 1" 
                        subtitle="comenzando el viaje" 
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aperiam quo rem temporibus nobis facilis illum officia praesentium deserunt,
                                    iure exercitationem rerum suscipit excepturi voluptate tempore numquam quam sunt, officiis placeat dolores, quis porro dicta labore reprehenderit?
                                    Unde veritatis odit minima facere temporibus necessitatibus earum reiciendis numquam voluptatibus quis nesciunt,
                                    voluptas inventore pariatur obcaecati architecto? Voluptates, eum facilis. Odio voluptatum esse quae natus, totam sed.
                                    Voluptates id perferendis, dolorem sed minus reprehenderit officia nobis recusandae voluptatum quae! Dolorum ullam,
                                    cumque animi aliquid ea obcaecati distinctio fugiat. Architecto sint culpa eum provident nesciunt corrupti deserunt praesentium,
                                    molestias molestiae, explicabo velit ipsum."
                        button="Ingresar"            
                                    />
                        {/* <div class="card" style={{ width: "100%" }}>
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
                        </div> */}
                    </div>
                    <div className="leccion-2 col-md-8">
                        <div className="row mx-0">
                            <div className="leccion-code col-md-12">
                                <iframe height="265" style={{ width: "100%" }} scrolling="no" title="oNYZRRO" src="https://codepen.io/anpile/embed/oNYZRRO?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                    See the Pen <a href='https://codepen.io/anpile/pen/oNYZRRO'>oNYZRRO</a> by Andres Jesus Olivares Arredondo
                                    (<a href='https://codepen.io/anpile'>@anpile</a>) on <a href='https://codepen.io'>CodePen</a>.
                                </iframe>
                            </div>
                        </div>
                        <div className="leccion-tips col-md-12 mt-2 ">

                            <div className="row mx-0">
                                <h4>Tips</h4>
                            </div>
                            <div className="row mx-0">

                                <iframe title="solucion" height="265" style={{ width: "100%" }} scrolling="no" src="https://stackblitz.com/edit/web-platform-kbiu5u?embed=1&file=index.html&theme=dark" ></iframe>
                                {/* <iframe height="265" style={{ width: "100%" }} scrolling="no" title="Solucion meteor" src="https://codepen.io/anpile/embed/preview/qBqRbZP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                    See the Pen <a href='https://codepen.io/anpile/pen/qBqRbZP'>Solucion meteor</a> by Andres Jesus Olivares Arredondo
                                    (<a href='https://codepen.io/anpile'>@anpile</a>) on <a href='https://codepen.io'>CodePen</a>.
                                </iframe> */}
                                <button type="button" class="btn btn-success mx-auto ">{"<< Atras"}</button>
                                <button type="button" class="btn btn-success mx-auto ">{"Siguente >>"}</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row mx-0">

                        <div className="col-md-2 align-buttons">
                        </div>
                    </div> */}



                </div>
            </div>
        </>
    );
}

export default Leccion;