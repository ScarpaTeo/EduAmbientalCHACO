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
    if(result==='0'){
        mostrar=imagenes
        console.log(imagenes)
    }

    return(

        <div fluid className="container-fluid">
            <div className="text-center">

                <Galeria
                    imagenes={mostrar.reverse()}
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
/*



function GetGaleria({filtro}){
    const [imagenes,guardarImagenes]=useState([]);
    const[paginaActual,guardarPaginaActual]=useState(1);
    const [totalPaginas,guardarTotalPaginas]=useState(1);
    const [contador,guardarcontador]=useState(0)

    useEffect(() => {
      const consultarApi = async () =>{
          const url= `https://localhost:44398/api/Contenido/GetAll`;
         
          const respuesta = await fetch(url
          );
          const resultado = await respuesta.json();
          guardarImagenes(resultado.data)
          guardarTotalPaginas(4)
          const calculatTotalPaginas=Math.ceil(imagenes.length/30);
          guardarTotalPaginas(calculatTotalPaginas)
          

      }
      consultarApi();
    },[imagenes,paginaActual])

    const paginaAnterior = () =>{
        let nuevaPaginaActual = paginaActual -1;
        guardarPaginaActual(nuevaPaginaActual);

    }

    const paginaSiguiente = () =>{
        let nuevaPaginaActual = paginaActual+1;
        guardarPaginaActual(nuevaPaginaActual)
        let nuevocont = contador+1
        guardarcontador(nuevocont)
    }


    const pedazo = imagenes.slice(imagenes[0],[16])
    const result = filtro;

    let mostrar;

    switch (contador) {
        case 0:
          mostrar=imagenes.slice(imagenes[0],[16])
          break;
        case 1:
            mostrar=imagenes.slice(imagenes[17],[33])
          break;
        case 2:
            mostrar=imagenes.slice(imagenes[34],[50])
            break;
        case 3:
            mostrar=imagenes.slice(imagenes[51],[67])
            break;
        case 4:
            mostrar=imagenes.slice(imagenes[68],[84])
            break;
        case 5:
            mostrar=imagenes.slice(imagenes[85],[101])
            break;
      
        default:
            mostrar=imagenes
          break;
      }
      

    if(result!==''){
        //mostrar=pedazo.filter(user => user.categoria==result)
    } else{
        //mostrar=imagenes
        console.log(imagenes)
        console.log(imagenes.length)
        console.log(imagenes[0])
       
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

                <button className="btn btn-info" type="button" onClick={paginaSiguiente} >next</button>
            </div>
        </div> 

    )
}
export default GetGaleria

*/