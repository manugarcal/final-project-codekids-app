import React from 'react';
import '../style.css'

import Navbar2 from '../Components/Navbar-login';
import Cardcomponent from '../Components/Card';
import CollapseFaq from '../Components/CollapseFaq';


const Leccion = () => {
    return (
        <>
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
                            textButton="Ingresar"
                        />
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
                                <div className="col-md-12">
                                    <CollapseFaq
                                        title="Desbloquear solución"
                                        text={[<iframe height="265" style={{ width: "100%" }} scrolling="no" title="Solucion meteor" src="https://codepen.io/anpile/embed/preview/qBqRbZP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                            See the Pen <a href='https://codepen.io/anpile/pen/qBqRbZP'>Solucion meteor</a> by Andres Jesus Olivares Arredondo
                                         (<a href='https://codepen.io/anpile'>@anpile</a>) on <a href='https://codepen.io'>CodePen</a>.
                                        </iframe>]}
                                    >
                                    </CollapseFaq>
                                </div>

                            </div>
                            <div className="row mx-0">
                                <button type="button" class="btn btn-success mx-auto my-3">{"<< Atras"}</button>
                                <button type="button" class="btn btn-success mx-auto my-3">{"Siguente >>"}</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row mx-0">

                        <div className="col-md-2 align-buttons">
                        </div>
                    </div> */}





        </>
    );
}

export default Leccion;