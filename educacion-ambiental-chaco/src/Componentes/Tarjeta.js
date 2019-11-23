import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';
import { MDBIcon, MDBCard, MDBCol } from 'mdbreact';
import './css/tarjeta.css'
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

    var tipo = "tipo";


    
    //aca tranformo la imagen de la base a un formato para mostrar
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
          <div collection className="card z-depth-1-half mb-4" style={{borderRadius: "25px", boxShadow: "0px 10px 10px #000000"}}>
            
            <div className="m-3">
              <img src={newImg} className="imagen img-fluid card-img-top mb-4 mx-auto" alt=""/>
              <div className={men} style={{textAlign:"center"}}>

                <h6 className="pt-1 white-text card-text"><small>{tags}</small></h6>
              </div>
              
              <h6 className="pt-3 blue-text mx-4 card-title"><strong>{titulo}</strong></h6>
              <p className="pt-3 mx-2 card-text"><small>{subtitulo}</small></p>

              <Link className="btn light-blue white-text mb-3" to={{
                            pathname: `/Contenido/${imagen.id}`,
                            state: {
                            fromNotifications: true
                            }
                        }}>Ver Info</Link>

              
            </div>
          </div>
        </div>

    )
}
export default Tarjeta
