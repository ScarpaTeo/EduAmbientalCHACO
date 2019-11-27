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
                <div className="row">
                    <div className="col-md-12 mx-auto">
            <div className="card px-5" style={{borderRadius:"35px",minWidth:"400px"}}>
            <h5 className="card-header info-color white-text text-center py-4">
                <strong>foto de {titulo}</strong>
            </h5>
            <div className="card-body px-lg-5">
                <form onSubmit={onSubmit}>
                    
                    <label class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}>
                        +<input type="file" accept="image/png, image/jpeg" onChange={onChange} className="uploadFile img" id="image" style={{width:"0px" ,height:"0px",overflow:"hidden"}} required/>
                    </label>
                    
                          
                <div className="row">
                 {file.map(foto=>(
                        <div class="col-sm-6 col-md-4">
                            <div className="card" style={{minWidth:"200px"}}>
                                <div className="card-body">
                                    
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
            </div>
        </div>
        
        </React.Fragment>        
        )
    }
}
export default FormularioImgGallery

