import React from 'react'
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Tarjeta from './Tarjeta'

function Galeria({imagenes}){

    return(
        <MDBContainer className="primary-color
        #4285F4">
        <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center white-text my-5 ">
        Educacion Ambiental Chaco 
      </h2>
      <p className="white-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
        <MDBRow>
            {imagenes.map(imagen=>(
                <Tarjeta
                key={imagen.Id}
                imagen={imagen}/>                
            ))}
        </MDBRow>
        </section>

      </MDBContainer>

    )
}
export default Galeria