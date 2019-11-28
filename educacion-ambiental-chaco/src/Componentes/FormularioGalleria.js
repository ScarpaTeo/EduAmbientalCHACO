import React from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import imgpdf from '../Componentes/Img/pdf.png'
import {Redirect,BrowserRouter, Route, Switch } from 'react-router-dom';


class FormularioImgGallery extends React.Component{
    state={
        boton:false
    }


    cambiarEstado =()=>{

        setTimeout(() => {
            this.setState({
                boton:true
            })
          }, 3000);

    }
    
    render(){
        const {onChange,onSubmit,file,titulo}=this.props;

    
        return(
            <React.Fragment>
            <div className="card white" style={{ borderRadius:"35px"}}>
            <h5 className="card-header info-color text-white text-center py-4" style={{ borderRadius:"35px"}}>
                <strong>foto de {titulo}</strong>
            </h5>
            <div className="card-body px-lg-5 text-center">
                <form onSubmit={onSubmit}>
                    
                    <label class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}>
                        +<input type="file" accept="image/png, image/jpeg" onChange={onChange} className="uploadFile img" id="image" style={{width:"0px" ,height:"0px",overflow:"hidden"}} required/>
                    </label>
                    
                          
                <div className="row">
                 {file.map(foto=>(
                        <div class="col-sm-4 col-md-2">
                            <div className="" style={{maxWidth:"300px"}}>
                                <div className="">
                                    
                                    <img src={foto} width="100%" className=" thumbnail img-responsive p-1 img-fluid" alt=""/>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={this.cambiarEstado} className="btn btn-outline-primary btn-rounded waves-effect btn-lg btn-block" type="submit">Cargar</button>
                </form>
                {this.state.boton ? <Redirect to="/Provincias" /> : null}

            </div>
            </div>
        </React.Fragment>        
        )
    }
}
export default FormularioImgGallery

