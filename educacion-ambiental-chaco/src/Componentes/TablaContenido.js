import React, {useState, useEffect} from 'react';
import axios from 'axios';


const TablaContenido = ({information}) => {
    
    const {id,titulo,subtitulo,detalle,categoria,tags,name_foto}=information
    let newImg="https://localhost:44398/images/"+name_foto

   
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
            class="btn btn-outline-success btn-rounded btn-sm my-0" value={id} >Editar</button>
        </span>
        <span class="table-remove">
          <button type="button"
            class="btn btn-outline-danger btn-rounded btn-sm my-0" data-toggle="modal" data-target={'#'+id} >Eliminar</button>

<div class="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-notify modal-danger" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <p class="heading lead">Eliminar Contenido</p>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <div class="text-center">
          <p>¿Estas seguro?</p>
          <img src={newImg} width="200px" alt="#"/>
        </div>
      </div>

      <div class="modal-footer justify-content-center">
        <button type="button" className="btn btn-danger btn-rounded btn-sm my-0" value={id} onClick={handleDelete}>Eliminar</button>
        <button type="button" className="btn btn-outline-danger btn-rounded btn-sm my-0" data-dismiss="modal">No, Cancelar</button>
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