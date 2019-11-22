import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';
import { MDBIcon, MDBCard, MDBCol } from 'mdbreact';

const Tarjeta =({imagen}) =>{

  
  const {id,titulo,subtitulo,detalle,categoria,tags,name_foto}=imagen
  
  let newImg="https://localhost:44398/images/"+name_foto
  
    //cambia los colores de los labels segun la categoria  
  let men;

  switch (tags) {
      case 'proyecto':
        men="aqua-gradient ml-4 mr-4 rounded"
        break;
      case 'noticia':
          men="purple-gradient ml-4 mr-4 rounded"
          break;
      case 'efemeride':
          men="peach-gradient ml-4 mr-4 rounded"
          break;
      case 'campaña':
          men="blue-gradient ml-4 mr-4 rounded"
          break;
      case 'evento':
          men="dusty-grass-gradient ml-4 mr-4 rounded"
          break;
    
      default:
        men="morpheus-den-gradient ml-4 mr-4 rounded"
        break;
    }
    
    //aca tranformo la imagen de la base a un formato para mostrar
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-1" >
          <MDBCard collection className="z-depth-1-half mb-4 #0091ea accent-4" style={{borderRadius: "25px", boxShadow: "0px 10px 10px #000000"}}>
            <div className="view zoom rounded mb-1">
              <img src={newImg} className="card-img-top pb-2"width="200" alt=""/>
              <div className={men} style={{height:"30px",textAlign:"center"}}>

              <h6 className="pt-1 white-text card-text"><small>{tags}</small></h6>
              </div>
              
              <h5 className="pt-3 blue-text card-title"><strong>{titulo}</strong></h5>
              <p className="pt-3 blue-text card-text"><small>{subtitulo}</small></p>

              <Link className="btn #00b0ff light-blue accent-3 rounded white-text" to={{
                            pathname: `/Contenido/${imagen.id}`,
                            state: {
                            fromNotifications: true
                            }
                        }}>Ver Info</Link>

              
            </div>
          </MDBCard>
        </div>

    )
}
export default Tarjeta
