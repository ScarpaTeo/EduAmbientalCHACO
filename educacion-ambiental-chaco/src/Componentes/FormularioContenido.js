import React from 'react'

class Formulario extends React.Component{
    render(){
        const {onChange,onSubmit,form}=this.props
        return(
                 <div className="card">
                    <h5 className="card-header info-color text-white text-center py-4">
                        <strong>Nueva Publicacion</strong>
                    </h5>
                    <div className="card-body px-lg-5">
                    <form onSubmit={onSubmit}>
                        <p>
                            <input className="form-control z-depth-1" type="text" placeholder='Titulo' name='titulo' id='Titulo' value={form.titulo} onChange={onChange} required />
                        </p>
                        <p>
                            <input  className="form-control z-depth-1" type="text" placeholder='Subtitulo' name='subtitulo' id='Subtitulo' value={form.subtitulo} onChange={onChange} required />
                        </p>
                        <div class="form-group shadow-textarea">
                            <textarea className="form-control z-depth-1" name="detalle" id="Detalle" rows="3" placeholder="Escribe una Descripcion..." value={form.detalle} onChange={onChange} required />
                        </div>
                        <p>
                            <label for="categoria" className="grey-text">Sector</label>
                            <select className="form-control z-depth-1" name="categoria" id="Categoria" value={form.categoria} onChange={onChange} >
                            <option value="">Todos</option>
                            <option value="1">Zona Ramsar</option>
                            <option value="2">Zona Agropecuaria Centro/Sur</option>
                            <option value="3">Zona Agropecuaria Centro/Norte</option>
                            <option value="4">Zona Impenetrable</option>
                            </select>
                        </p>
                        <p>
                            <label for="Tags" className="grey-text">Categoria</label>
                            <select className="form-control z-depth-1" name="tags" id="Tags" value={form.tags} onChange={onChange} >
                            <option value="">Todos</option>
                            <option value="noticia">Noticias</option>
                            <option value="campaña">Campañas</option>
                            <option value="proyecto">Proyectos</option>
                            <option value="efemeride">Efemerides</option>
                            <option value="evento">eventos</option>
                            </select>
                        </p>
                        <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Crear</button>
                        </form>
                    </div>
                </div>
        )
    }
}
export default Formulario