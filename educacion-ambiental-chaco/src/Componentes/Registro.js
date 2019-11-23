import React from 'react'

class Registro extends React.Component{
    render(){
        const {onChange,onSubmit,form}=this.props
        return(
                 <div className="card">
                    <h5 className="card-header info-color text-white text-center py-4">
                        <strong>Nuevo Referente</strong>
                    </h5>
                    <div className="card-body px-lg-5">
                    <form onSubmit={onSubmit}>
                        <p>
                            <input className="form-control z-depth-1" type="text" placeholder='Nombre' name='nombre' id='Nombre' value={form.nombre} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="text" placeholder='Apellido' name='apellido' id='Apellido' value={form.apellido} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="text" placeholder='Ubicacion' name='ubicacion' id='Ubicacion' value={form.ubicacion} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="email" placeholder='Email' name='email' id='Email' value={form.email} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="password" placeholder='Password' name='password' id='Password' value={form.password} onChange={onChange} required />
                        </p>
                        
                        <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Crear</button>
                        
                        </form>
                    </div>
                </div>
        )
    }
}
export default Registro