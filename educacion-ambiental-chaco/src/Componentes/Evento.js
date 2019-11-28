import React from 'react';


const Evento = ({eventos}) => {

    let titulo = eventos.name.text;
    if(titulo) {
        titulo = titulo.substr(0, 200) + '...';
   }

    let descripcion = eventos.description.text;
    if(descripcion) {
        descripcion = descripcion.substr(0, 250) + '...';
   }

    return (
        
            <div className="card my-4 mx-3 mx-sm-5 mx-md-2 pb-3" style={{borderRadius: "25px", boxShadow: "0px 10px 10px #000000"}}>
                {eventos.logo
                    ? <img className="" src={eventos.logo.url} alt="" style={{borderRadius: "25px"}}/>
                    : null
                }
                
            <h6 className="pt-3 blue-text mx-4 card-title"><strong>{titulo}</strong></h6>
                
            <p className="pt-3 mx-2 card-text"><small>{descripcion}</small></p>

                <a href={eventos.url} type="button" className="btn btn-deep-orange mx-auto py-2" style={{width: "150px", color: "white", borderRadius: "15px"}}>Mas Info</a >


                    
            </div>

           
       
        
    );
  
}

export default Evento;