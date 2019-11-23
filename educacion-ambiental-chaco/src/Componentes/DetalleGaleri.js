import React, {useState, useEffect} from 'react';
import imgpdf from '../Componentes/Img/pdf.png'



const DetalleGaleri = ({galeria}) => {
    
    const {name} = galeria;

    let newImg2='https://localhost:44398/images/'+name;
    let target ='#'+name
    let idtarget =name

    let mostrar
    if (name.includes('.pdf')){
        mostrar=<div className="row">
                    <div className=".col-md-4">
                        <div className="card mx-auto">
                            <div className="card-body">
                                <p className="text-center">{name}</p>
                                <img src={imgpdf} style={{borderRadius:"5px",padding:"20px"}} width="300px" alt="Card image cap"/>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={target}> ver
                                </button>

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
                                <object data={newImg2} type='pdf/html' width="100%" height="500" style={{height: '85vh'}}/>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>            
                    </div>
                </div>
    }else{
        mostrar=<div className="row">
                    <div className="col-md-4">
                    <div className="card mx-auto" style={{width:'20rem', margin:'30px'}}>
                        <div className="card-body">
                        <img src={newImg2} style={{borderRadius:"5px",padding:"20px"}} width="300px" alt="Card image cap"/>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={target}> ver
                        </button>

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
                                    <img src={newImg2} width="100%" alt="#"/>
                                </div>
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
            {mostrar}

        </React.Fragment>
    )
}
export default DetalleGaleri;