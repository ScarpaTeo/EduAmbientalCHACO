import React, {useState, useEffect} from 'react';

const Referentes = ({information}) => {
    
    const {nombre, apellido, ubicacion, email,foto, name} = information;

    let newImg2="https://localhost:44398//referentes/"+name;



  return (
    <div className="row ">
            <div className="col-10 card " style={{width:'20rem', margin:'30px', borderRadius: "25px"}}>
              <img className="mx-auto mt-2" src={newImg2} style={{borderRadius:"100px"}} width="100px" alt="Card image cap"/>
              <div className="card-body">
                    
                    <h5 className="card-title">{nombre} {apellido}</h5>
                    <p className="card-text">{ubicacion}</p>
                    <p className="card-text"><small>{email}</small></p>
                
               </div>
            </div>
    </div>
    );


}
export default Referentes;