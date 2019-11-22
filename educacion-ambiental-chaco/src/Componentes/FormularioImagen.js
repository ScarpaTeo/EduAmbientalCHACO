import React from 'react'

class FormularioImg extends React.Component{
    
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
                 <div className="card" style={{borderRadius:"35px"}}>
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>foto de {titulo}</strong>
                    </h5>
                    <div className="card-img-top">
                       <img  class="img-fluid" src={file} style={{width:"450px"}} alt="Card image cap"/>
                    </div>
                    <div className="card-body px-lg-5">
                        <form onSubmit={onSubmit}>
                            <label class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}>
                                +<input type="file" accept="image/png, image/jpeg"  onChange={onChange} className="uploadFile img" id="image" style={{width:"0px" ,height:"0px",overflow:"hidden"}} required/>
                            </label>
                            <button onClick={this.cambiarEstado}  disabled={this.state.boton} className="btn btn-outline-primary btn-rounded waves-effect btn-lg btn-block" type="submit">Cargar</button>
                        </form>
                    </div>
                </div>
                
        )
    }
}
export default FormularioImg
