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
            class="btn btn-outline-danger btn-rounded btn-sm my-0" value={id} onClick={handleDelete} >Eliminar</button>
        </span>
      </td>
    </tr>
  
</React.Fragment>
  )


}
export default TablaContenido;