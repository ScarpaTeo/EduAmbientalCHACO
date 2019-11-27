import React, {useState, useEffect} from 'react';
import imgpdf from '../Componentes/Img/pdf.png'
import '../Componentes/css/Galleria.css'



const DetalleGaleri = ({galeria}) => {
    
    const {name} = galeria;

    let newImg2='https://localhost:44398/images/'+name;
    let target ='#'+name
    let idtarget =name

    let mostrar
    let mostrarpdf
    if (name.includes('.pdf')){
        mostrarpdf=<div className="row">
                    <div className="">
                        <div className="mx-auto" style={{borderRadius:"5px", maxWidth:"200px",maxHeight:"250px"}}>
                            <div className=""  style={{margin:"auto"}}>

                                <a data-toggle="modal" data-target={target}>
                                    <div className="galeria">
                                    <img src={imgpdf} className="fotica" style={{borderRadius:"5px", maxWidth:"100%"}} alt="Card image cap"/> 
                                    </div>
                                </a>
                                
                                <p className="text-center white-text pt-2"><small>{name}</small></p>

                            <div class="modal fade" id={idtarget} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{name}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                <embed src={newImg2} width="100%" height="500" type="application/pdf"/>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>            
                    </div>
                </div>
    }
    
    if(name.includes('.pdf')===false){
        mostrar=<div className="row">
                    
                    <div className="mx-auto" style={{ borderRadius:"5px", maxWidth:"200px",maxHeight:"250px"}}>
                        <div className="" style={{margin:"auto"}}>
                        <a data-toggle="modal" data-target={target}>
                            <img src={newImg2} style={{borderRadius:"5px",maxWidth:"100%"}} alt="Card image cap"/>
                        </a>

                            <div class="modal fade" id={idtarget} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src={newImg2} width="100%" alt="#"/>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>
                    
                    </div>
                </div>
    }



  return (
        <React.Fragment>
            <div className="galeria">
            {mostrar}
            </div>

            {mostrarpdf}
        </React.Fragment>
    )
}
export default DetalleGaleri;