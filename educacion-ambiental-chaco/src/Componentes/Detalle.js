import React, {useState, useEffect} from 'react';
import Detallegaleria from './DetalleGaleri'

const Detallecont = ({contenido,galeria,imagenes}) => {
    
    const {id,titulo,subtitulo,detalle,categoria,tags,name_foto} = contenido;

    let newImg2="https://localhost:44398/images/"+name_foto;



  return (
        <React.Fragment>
            

            <div class="jumbotron text-center hoverable p-4 bg-white" style={{borderRadius:"25px"}}>

                <div class="row">

                    <div class="col-md-4 offset-md-1 mx-3 my-3">

                    <div class="img-fluid">
                        <img src={newImg2}  style={{borderRadius:"5px"}} width="100%" class="img-fluid" alt="Sample image for first version of blog listing"/>
                        <a>
                        <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    </div>

                    <div class="col-md-7 text-md-left ml-3 mt-3">


                    <h2 class="h2 mb-4 display-4 font-roboto blue-text">{titulo}</h2>
                    <h5 class="h3 mb-4 font-roboto blue-text">{subtitulo}</h5>

                    <p class="font-weight-normal font-roboto blue-text" style={{fontSize:"14px"}}>{detalle}</p>
                    <p class="font-weight-normal font-roboto blue-text">Categoria<a><strong> {tags} </strong></a></p>

                    

                    </div>
                    
                    <div className="col-md-11 mx-auto">
                    <br/>
                    <br/>
                    <br/>
                    <hr width="80%" style={{color:"blue", borderStyle:"solid"}}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <div className="row">
                        {imagenes.map(items=>(
                            <div className="col-md-2" style={{margin:"2px"}}>

                                <Detallegaleria
                                galeria={items}
                                /> 

                            </div>
                        ))}
                    </div>
                    </div>

                </div>

            </div>




        </React.Fragment>
    )
}
export default Detallecont;