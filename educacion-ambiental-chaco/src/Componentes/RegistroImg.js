import React from 'react'

class RegistroImg extends React.Component{
    
    
    render(){
        const {onChange,onSubmit,titulo,file}=this.props;
    
        return(
                 <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>foto del Referente</strong>
                    </h5>
                    <div className="card-img-top">
                       <img  class="img-fluid" src={file} style={{width:"450px"}} alt="Card image cap"/>
                    </div>
                    <div className="card-body px-lg-5">
                        <form onSubmit={onSubmit}>
                            <label class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}>
                                +<input type="file" accept="image/png, image/jpeg"  onChange={onChange} className="uploadFile img" id="image" style={{width:"0px" ,height:"0px",overflow:"hidden"}} required/>
                            </label>
                            <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Cargar</button>
                        </form>
                    </div>
                </div>
                
        )
    }
}
export default RegistroImg