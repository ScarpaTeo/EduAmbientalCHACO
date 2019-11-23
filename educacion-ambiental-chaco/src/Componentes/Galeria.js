import React from 'react';
import Tarjeta from './Tarjeta';
import './css/Galeria.css';


function Galeria({imagenes,categoria}){
  const mensaje = categoria;
  
  let men;

  switch (mensaje) {
      case 1:
        men="Zona Ramsar"
        break;
      case 2:
          men="Zona Agropecuaria Centro/Sur"
          break;
      case 3:
          men="Zona Agropecuaria Centro/Norte"
          break;
      case 4:
          men="Zona Impenetrable"
          break;
      case 5:
          men="Zona Ramsar"
          break;
    
      default:
        men=""
        break;
    }
    
    return(
        <div fluid className="fondito px-3 pt-5 mt-5" style={{borderRadius: "25px"}}>
            <section className="text-center mb-5">
                <h3 className="text-white pb-2">{men}</h3>
                <div className="row">
                {imagenes.map(imagen=>(
                        <Tarjeta
                        imagen={imagen}/>                
                    ))}
                </div>
            </section>

      </div>

    )
}
export default Galeria