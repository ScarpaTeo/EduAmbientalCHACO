import React, {useState, useEffect} from 'react';
import axios from 'axios';


const TablaContenido = ({information}) => {
    
    const {id,titulo,subtitulo,detalle,categoria,tags,name_foto}=information
    let newImg="https://localhost:44398/images/"+name_foto

    
      const [ownerState, setOwnerState] = useState({
        titulo: titulo,
        subtitulo:subtitulo,
        detalle: detalle,
        categoria: categoria,
        tags: tags
      });
    
    
      const handleOwnerChange = (e) => setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value],
    });
   
    const handleEdit = async e =>{
      e.preventDefault();

      const identi= e.target.value
      

      const body = {
        token: localStorage.getItem('token'),
        id: identi,
        titulo: ownerState.titulo.toString(),
        subtitulo: ownerState.subtitulo.toString(),
        detalle: ownerState.detalle.toString(),
        categoria: ownerState.categoria.toString(),
        tags: ownerState.tags.toString()
      }
      console.log(body)
    
      axios({
        method: 'post',
        url: 'https://localhost:44398/api/Contenido/Edit',
        data:body
      }).then(res => {
        console.log(res.data);
        
      })
      
    }

    const handleDelete = async e =>{
      e.preventDefault();
      const identi= e.target.value
    
      axios({
        method: 'post',
        url: 'https://localhost:44398/api/Contenido/Delete',
        data: {
          token : localStorage.getItem('token'),
          id: identi
        }
      }).then(res => {
        console.log(res.data);
        
      })
      
    }


  return (
      <React.Fragment>
    <tr height="120px">
      <th scope="row">{id}</th>
      <td>{titulo}</td>
      <td>{categoria}</td>
      <td>{tags}</td>
      <td><img src={newImg} style={{width:"100px"}} alt=""/></td>
      <td className="mx-auto">
    
        <span class="table-remove">
      
            <button type="button"
            class="btn btn-outline-success btn-rounded btn-sm my-0" data-toggle="modal" data-target={'#'+id+'E'}>Editar</button>
            <div class="modal fade" id={id+'E'} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
              aria-hidden="true">
              <div class="modal-dialog modal-notify modal-success" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <p class="heading lead ">Editar Contenido</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <div class="text-center">
                      
                      <form>
                          <p>
                              <input className="form-control z-depth-1" type="text" placeholder='Titulo' maxlength="30" name='titulo' id='Titulo' value={ownerState.titulo} onChange={handleOwnerChange} />
                          </p>
                          <p>
                              <input  className="form-control z-depth-1" type="text" placeholder='Subtitulo' maxlength="120" name='subtitulo' id='Subtitulo' value={ownerState.subtitulo} onChange={handleOwnerChange} />
                          </p>
                          <div class="form-group shadow-textarea">
                              <textarea className="form-control z-depth-1" name="detalle" id="Detalle" rows="3" placeholder="Escribe una Descripcion..." value={ownerState.detalle} onChange={handleOwnerChange}/>
                          </div>
                          <p>
                              <label for="categoria" className="grey-text">Sector</label>
                              <select className="form-control z-depth-1" name="categoria" id="Categoria" value={ownerState.categoria} onChange={handleOwnerChange}>
                              <option value="">Todos</option>
                              <option value="1">Zona Ramsar</option>
                              <option value="2">Zona Agropecuaria Centro/Sur</option>
                              <option value="3">Zona Agropecuaria Centro/Norte</option>
                              <option value="4">Zona Impenetrable</option>
                              </select>
                          </p>
                          <p>
                              <label for="Tags" className="grey-text">Categoria</label>
                              <select className="form-control z-depth-1" name="tags" id="Tags" value={ownerState.tags} onChange={handleOwnerChange} >
                              <option value="">Todos</option>
                              <option value="noticia">Noticias</option>
                              <option value="campaña">Campañas</option>
                              <option value="proyecto">Proyectos</option>
                              <option value="efemeride">Efemerides</option>
                              <option value="evento">eventos</option>
                              </select>
                          </p>
                          <button className="btn btn-success btn-rounded waves-effect btn-lg btn-block white-text" type="button" onClick={handleEdit} value={id} >Guardar</button>
                          <button type="button" className="btn btn-outline-success btn-rounded waves-effect btn-lg btn-block " data-dismiss="modal">No, Cancelar</button>

                        </form>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
        </span>
        <span class="table-remove">

          <button type="button"
            class="btn btn-outline-danger btn-rounded btn-sm my-0" data-toggle="modal" data-target={'#'+id}>Eliminar</button>
            <div class="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
              aria-hidden="true">
              <div class="modal-dialog modal-notify modal-danger" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <p class="heading lead ">Eliminar Contenido</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                  </div>

                  <div class="modal-body">
                    <div class="text-center">
                      <p className="red-text"> <strong>¿Estas seguro?</strong></p>
                      <img src={newImg} width="200px" alt="#"/>
                      <h5><small>{titulo}</small></h5>
                      <br/>
                    </div>
                    <button type="button" className="btn btn-danger btn-rounded waves-effect btn-lg btn-block white-text" value={id} onClick={handleDelete}>Eliminar</button>
                      <button type="button" className="btn btn-outline-danger btn-rounded waves-effect btn-lg btn-block white-text" data-dismiss="modal">No, Cancelar</button>
                  </div>
                  
                </div>
              </div>
            </div>
        </span>
      </td>
    </tr>
  
</React.Fragment>
  )


}
export default TablaContenido;