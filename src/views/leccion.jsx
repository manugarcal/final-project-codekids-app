import React, { useContext, useEffect } from 'react';
import '../style.css'
import Navbar2 from '../Components/Navbar-login';
import Cardcomponent from '../Components/Card';
import CollapseFaq from '../Components/CollapseFaq';
import { Link } from 'react-router-dom';
import { Context } from '../Store/appContext';
import CardNoButton from '../Components/CardNoButton';


const Leccion = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.mision()
        console.log(store.misiones)
        
    }, [])
    return (
        <>
            <Navbar2 />
            <div className="container-fluid"style={{
            backgroundImage:"url(assets/space.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "100% 100%",
            width:"100%",
            height:"auto"
            }}>
                <div className="row">
                    <div className="col-md-12 leccion media-playlist pr-5 align-middle">
                        <div className="row">
                            <div className="col-md-12 leccion media-playlist pr-5 align-middle">
                                <div className="row">
                                    <p className="pr-4 my-4 text-white">Media Playlist</p>
                                    <div class="btn-group my-auto" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-success"><i class="fas fa-play-circle"></i></button>
                                        <button type="button" class="btn btn-success"><i class="fas fa-pause-circle"></i></button>
                                        <button type="button" class="btn btn-success"><i class="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 leccion-instrucciones">
                        
                        <CardNoButton
                            image="https://via.placeholder.com/400x200"
                            title="Leccion 1"
                            subtitle="comenzando el viaje"
                            text={store.miss[0].instrucciones}
                            
                        />
                    </div>
                    <div className="leccion-2 col-md-8">
                        <div className="row mx-0">
                            <div className="leccion-code col-md-12">
                                {/* <iframe height="265" style={{ width: "100%" }} scrolling="no" title="oNYZRRO" src="https://codepen.io/anpile/embed/oNYZRRO?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                    See the Pen <a href='https://codepen.io/anpile/pen/oNYZRRO'>oNYZRRO</a> by Andres Jesus Olivares Arredondo
                                    (<a href='https://codepen.io/anpile'>@anpile</a>) on <a href='https://codepen.io'>CodePen</a>.
                                </iframe> */}
                                {/* AQUI SOLICITAR AL BACK QUE DEVUELVA */}
                               <img src={store.miss[0].codigo} alt="leccion01" border="0" style={{width:"100%"}}/>
                                    </div>
                                </div>
                                <div className="leccion-tips col-md-12 mt-2 ">

                            <div className="row mx-0">
                                <h4 className="text-white my-4">Tips</h4>
                            </div>
                            <div className="row mx-0">
                                <div className="col-md-12">
                                    <CollapseFaq
                                        title="Desbloquear solución"
                                        text= {
                                            <>
                                            <p className="text-center">Favor dar click en el siguiente enlace para revelar la solución</p>
                                            <div className="row">
                                            <button type="button" className="btn btn-success mx-auto"><a className="text-white" href={store.miss[0].soluciones}>Click</a></button>    
                                            </div>
                                            
                                            </>
                                        }
                                        /* {[<iframe height="265" style={{ width: "100%" }} scrolling="no" title="Solucion meteor" src="https://codepen.io/anpile/embed/preview/qBqRbZP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                            See the Pen <a href='https://codepen.io/anpile/pen/qBqRbZP'>Solucion meteor</a> by Andres Jesus Olivares Arredondo
                                         (<a href='https://codepen.io/anpile'>@anpile</a>) on <a href='https://codepen.io'>CodePen</a>.
                                        </iframe>]} */
                                    >
                                    </CollapseFaq>
                                </div>

                            </div>
                            <div className="row mx-0">
                                <button type="button" class="btn btn-success mx-auto my-3">{"<< Atras"}</button>
                                <Link to="/leccion/2"><button type="button" class="btn btn-success mx-auto my-3">{"Siguente >>"}</button></Link>
                                
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