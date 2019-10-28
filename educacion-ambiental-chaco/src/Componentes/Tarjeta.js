import React from 'react';
import { MDBIcon, MDBCard, MDBCol } from 'mdbreact';

const Tarjeta =({imagen}) =>{
    const { name,patas,picture }=imagen
    
    
    //aca tranformo la imagen de la base a un formato para mostrar

    const newimage =`data:image/png;base64,${picture}`

    return (
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half mb-4 #0091ea light-blue accent-4">
            <div className="view zoom rounded mb-1">
              <img
                src={newimage}
                className="img-fluid"
                alt=""
              />
              <h6 className="pt-3 white-text">{name}</h6>
              <h6 className="pt-3 white-text">{patas}</h6>
              
            </div>
          </MDBCard>
        </MDBCol>

    )
}
export default Tarjeta
