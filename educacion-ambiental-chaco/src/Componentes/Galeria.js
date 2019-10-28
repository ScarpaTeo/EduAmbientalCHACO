import React from 'react'
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Tarjeta from './Tarjeta'

function Galeria({imagenes,titulo}){
  const mensaje = titulo;
  
  let men;

  switch (mensaje) {
      case '1':
        men="Zona Ramsar"
        break;
      case '2':
          men="Zona Agropecuaria Centro/Sur"
          break;
      case '3':
          men="Zona Agropecuaria Centro/Norte"
          break;
      case '4':
          men="Zona Impenetrable"
          break;
      case '5':
          men="Zona Ramsar"
          break;
    
      default:
        men="sin clasificar"
        break;
    }
    
    return(
        <MDBContainer fluid className="primary-color #4285F4">
        <section className="text-center my-5">
        <h3 className="text-white pb-2">{men}</h3>
        <MDBRow>
        {imagenes.map(imagen=>(
                <Tarjeta
                key={imagen.id}
                imagen={imagen}/>                
            ))}
        </MDBRow>
        </section>

      </MDBContainer>

    )
}
export default Galeria