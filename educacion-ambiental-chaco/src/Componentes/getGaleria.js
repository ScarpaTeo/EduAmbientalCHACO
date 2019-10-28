import React, { useState,useEffect } from 'react'
import { MDBContainer} from "mdbreact";
import Galeria from './Galeria'





function GetGaleria({filtro}){
    const [imagenes,guardarImagenes]=useState([]);
    const[paginaActual,guardarPaginaActual]=useState(1);
    const [totalPaginas,guardarTotalPaginas]=useState(1);

    useEffect(() => {
      const consultarApi = async () =>{
          const url= `https://localhost:44398/api/Animal/Get1`;
         
          const respuesta = await fetch(url
          );
          const resultado = await respuesta.json();
          guardarImagenes(resultado.data)
          guardarTotalPaginas(4)

      }
      consultarApi();
    },[imagenes])
    const paginaAnterior = () =>{
        let nuevaPaginaActual = paginaActual -1;
        guardarPaginaActual(nuevaPaginaActual);

    }

    const paginaSiguiente = () =>{
        let nuevaPaginaActual = paginaActual+1;
        guardarPaginaActual(nuevaPaginaActual)
    }

    const result = filtro;
    let mostrar;
    if(result!==''){
        mostrar=imagenes.filter(user => user.Categoria==result)
    } else{
        mostrar=imagenes
        console.log(imagenes)
    }

    return(

        <MDBContainer fluid className="primary-color #4285F4">
            <div className="row justify-content-center">

                <Galeria
                    imagenes={mostrar}
                    titulo={filtro}
                />
                {(paginaActual===1) ? null :(
                    <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &laquo;</button>
                )}

                {(paginaActual===totalPaginas) ? null:(
                    <button onClick={paginaSiguiente} type="button" className="btn btn-info mr-1">Siguiente &raquo;</button>                    
                )}
            </div>
        </MDBContainer> 

    )
}
export default GetGaleria