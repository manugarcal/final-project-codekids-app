const ContactInfo = () => {
    return ( 
        <>
        <div className="col-lg-4 ml-auto">
                <div className="bg-white p-3 p-md-5">
                  <h3 className="text-black mb-4">Informacion de Contacto</h3>
                  <ul className="list-unstyled footer-link">
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Direccion:</span>
                      <span>Av. Pedro de valdivia #555, providencia, Santiago de Chile</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Telefono:</span>
                      <span>+56 2 4942 290</span>
                    </li>
                    <li className="d-block mb-3">
                      <span className="d-block text-black">Email:</span>
                      <span>info@CodeKids.com</span>
                    </li>
                  </ul>
                </div>
              </div>
        </>
     );
}
 
export default ContactInfo;