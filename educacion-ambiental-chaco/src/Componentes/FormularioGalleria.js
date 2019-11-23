import React from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";


class FormularioImgGallery extends React.Component{
    
    
    render(){
        const {onChange,onSubmit,file,titulo}=this.props;
    
        return(
            <React.Fragment>
            <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
                <strong>foto de {titulo}</strong>
            </h5>
            <div className="card-body px-lg-5">
                <form onSubmit={onSubmit}>
                    
                    <label class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}>
                        +<input type="file" accept="image/png, image/jpeg"  onChange={onChange} className="uploadFile img" id="image" style={{width:"0px" ,height:"0px",overflow:"hidden"}} required/>
                    </label>
                    
                          
                <div className="row">
                    {file.map(foto=>(
                        <div class="col-sm-6 col-md-3">
                            <a href="#" class="thumbnail">
                            <img src={foto} style={{width:"200px"}} className="img-responsive p-1" alt=""/>
                            </a>
                        </div>
                    ))}
                </div>
                <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Cargar</button>
                </form>
                
            </div>
        </div>
        
        </React.Fragment>        
        )
    }
}
export default FormularioImgGallery
