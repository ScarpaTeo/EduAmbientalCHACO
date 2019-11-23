import React, { useState,useEffect } from 'react'
import { useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';

const Detalle = () =>{

    let { id } = useParams();
    const [data,guardarData]=useState([]);
    const [dataGallery,guardarGallery]=useState([]);
    //const { handle } = this.props.match.params

    useEffect(() => {
        const consultarApi = async () =>{
            //const { handle } = this.props.match.params
            const url= `https://localhost:44398/api/Contenido/GetByid?id=${id}`;
           
            const respuesta = await fetch(url
            );
            const resultado = await respuesta.json();
            guardarData(resultado.data)  
        }
        consultarApi();
        console.log(data)
      },[data])

      useEffect(() => {
        const traerGaleria = async () =>{
            //const { handle } = this.props.match.params
            const url= `https://localhost:44398/api/Contenido/GetGallery?id=${id}`;
           
            const respuesta = await fetch(url
            );
            const resultado = await respuesta.json();
            guardarGallery(resultado.data)  
        }
        traerGaleria();
        console.log(dataGallery)
      },[data])



    return(
            <MDBContainer fluid className="primary-color #4285F4">
            <section className="text-center my-5">
            <h3 className="text-white pb-2"></h3>
            <MDBRow>
            {dataGallery.map(imagen=>(
                    <p>{imagen.foto}</p>             
                ))}
            </MDBRow>
            </section>

        </MDBContainer>
    )
}
export default Detalle