import React, { useState,useEffect } from 'react'
import { MDBContainer} from "mdbreact";
import Galeria from './Galeria'
import './css/getGaleria.css'





function GetGaleria({filtro}){
    const [imagenes,guardarImagenes]=useState([]);
    const[paginaActual,guardarPaginaActual]=useState(1);
    const [totalPaginas,guardarTotalPaginas]=useState(1);

    useEffect(() => {
      const consultarApi = async () =>{
          const url= `https://localhost:44398/api/Contenido/GetAll`;
         
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
        mostrar=imagenes.filter(user => user.categoria==result)
    } else{
        mostrar=imagenes
        console.log(imagenes)
    }

    return(

        <div fluid className="container-fluid">
            <div className="text-center">

                <Galeria
                    imagenes={mostrar}
                    categoria={filtro}
                />
                {(paginaActual===1) ? null :(
                    <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &laquo;</button>
                )}

                {(paginaActual===totalPaginas) ? null:(
                    <button onClick={paginaSiguiente} type="button" className="btn btn-info mr-1">Siguiente &raquo;</button>                    
                )}
            </div>
        </div> 

    )
}
export default GetGaleria