import React from 'react'

class Registro extends React.Component{
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
        const {onChange,onSubmit,form}=this.props
        

        return(
                 <div className="card white" style={{ borderRadius:"35px"}}>
                    <h5 className="card-header info-color text-white text-center py-4" style={{ borderRadius:"35px"}}>
                        <strong>Nuevo Referente</strong>
                    </h5>
                    <div className="card-body px-lg-5">
                    <form onSubmit={onSubmit}>
                        <p>
                            <input className="form-control z-depth-1" type="text" placeholder='Nombre' name='nombre' maxlength="150" id='Nombre' value={form.nombre} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="text" placeholder='Apellido' name='apellido' maxlength="150" id='Apellido' value={form.apellido} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="text" placeholder='Ubicacion' name='ubicacion' maxlength="150" id='Ubicacion' value={form.ubicacion} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="email" placeholder='Email' name='email' id='Email' maxlength="350" value={form.email} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="password" placeholder='Password' name='password' maxlength="150" id='Password' value={form.password} onChange={onChange} required />
                        </p>

                        <button onClick={this.cambiarEstado}  disabled={this.state.boton} className="btn btn-outline-primary btn-rounded waves-effect btn-lg btn-block" type="submit">Crear</button>                     
                        
                        </form>
                    </div>
                </div>
        )
    }
}
export default Registro