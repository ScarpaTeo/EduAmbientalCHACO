import React from 'react';
import { MDBIcon, MDBCard, MDBCol } from 'mdbreact';

const Tarjeta =({imagen}) =>{
    const { Title,Descripcion,Imagen,Categoria }=imagen
    return (
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half mb-4 #0091ea light-blue accent-4">
            <div className="view zoom rounded mb-1">
              <img
                src={Imagen}
                className="img-fluid"
                alt=""
              />
              <h6 className="pt-3 white-text">{Title}</h6>
              
            </div>
          </MDBCard>
        </MDBCol>

    )
}
export default Tarjeta
