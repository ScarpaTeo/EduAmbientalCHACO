import React, {useState, useEffect} from 'react';

const TablaContenido = ({information}) => {
    
    const {id,titulo,subtitulo,detalle,categoria,tags,name_foto}=information
  
    let newImg="https://localhost:44398/images/"+name_foto
  



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
            class="btn btn-outline-success btn-rounded btn-sm my-0">Editar</button>
        </span>
        <span class="table-remove">
          <button type="button"
            class="btn btn-outline-danger btn-rounded btn-sm my-0">Eliminar</button>
        </span>
      </td>
    </tr>
  
</React.Fragment>
  )


}
export default TablaContenido;