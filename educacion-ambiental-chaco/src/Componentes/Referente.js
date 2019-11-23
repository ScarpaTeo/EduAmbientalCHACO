import React, {useState, useEffect} from 'react';
import './css/referente.css'


const Referentes = ({information}) => {
    
    const {nombre, apellido, ubicacion, email,foto, name} = information;

    let newImg2="https://localhost:44398//referentes/"+name;



  return (
    <div className="row tarjeta">
            <div className="col-10 card " style={{width:'20rem', margin:'30px', borderRadius: "25px"}}>
              <img className="img mx-auto mt-5" src={newImg2} style={{borderRadius:"100px"}} width="200px" alt="Card image cap"/>
              <div className="card-body">
                    
                    <p>Referente:</p>
                    <h4 className="card-title mb-5">{nombre} {apellido}</h4>
                    <p>Ubicacion:</p>
                    <p className="card-text mb-5">{ubicacion}</p>
                    <p>Contacto: </p>
                    <p className="card-text mb-5"><small>{email}</small></p>
                
               </div>
            </div>
    </div>
    );


}
export default Referentes;