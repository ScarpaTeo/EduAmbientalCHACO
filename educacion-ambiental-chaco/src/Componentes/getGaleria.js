import React, { useState,useEffect } from 'react'
import { MDBContainer} from "mdbreact";
import Galeria from './Galeria'


function GetGaleria(){
    const [imagenes,guardarImagenes]=useState([]);

    useEffect(() => {
      const consultarApi = async () =>{
          const imagenesPorPagina=30;

          const url= `http://localhost:4000/Multimedia`;
         
          const respuesta = await fetch(url)
          const resultado = await respuesta.json();
          guardarImagenes(resultado)

      }
      consultarApi();
    },[imagenes])

    return(

        <MDBContainer>
            <div className="row justify-content-center">
                <Galeria
                    imagenes={imagenes}
                />
            </div>
        </MDBContainer> 

    )
}
export default GetGaleria