import React from 'react'

class RegistroImg extends React.Component{
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
        const {onChange,onSubmit,titulo,file}=this.props;
    
        return(
                 <div className="card white" style={{ borderRadius:"35px"}}>
                    <h5 className="card-header info-color text-white text-center py-4" style={{ borderRadius:"35px"}}>
                        <strong>foto del Referente</strong>
                    </h5>
                    <div className="card-img-top mx-auto" style={{maxWidth:"350px"}}>
                       <img  class="img-fluid p-3" width="100%" src={file} alt="Card image cap"/>
                    </div>
                    <div className="card-body px-lg-5 text-center">
                        <form onSubmit={onSubmit} className="mx-auto">
                            <label class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}>
                                +<input type="file" accept="image/png, image/jpeg"  onChange={onChange} className="uploadFile img" id="image" style={{width:"0px" ,height:"0px",overflow:"hidden"}} required/>
                            </label>
                            <button onClick={this.cambiarEstado} disabled={this.state.boton} className="btn btn-outline-primary btn-rounded waves-effect btn-lg btn-block" type="submit">Cargar</button>
                        </form>
                    </div>
                </div>
                
        )
    }
}
export default RegistroImg