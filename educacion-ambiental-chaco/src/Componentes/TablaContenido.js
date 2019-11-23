import React, {useState, useEffect} from 'react';

const TablaContenido = ({information}) => {
    
    const {id,titulo,subtitulo,detalle,categoria,tags,name_foto}=information
  
    let newImg="https://localhost:44398/images/"+name_foto
  



  return (
      <React.Fragment>
    <tr>
      <th scope="row">{id}</th>
      <td>{titulo}</td>
      <td>{categoria}</td>
      <td>{tags}</td>
      <td><img src={newImg} style={{width:"100px"}} alt=""/></td>
      <td className="row">
        <div className="col-md-12">
        <button className="btn btn-danger text-white"  style={{borderRadius:"3px", minWidth:"50px"}}><i class="far fa-trash-alt"></i> eliminar</button>
        </div>
        <div className="col-md-12">
          <button className="btn btn-success text-white" style={{borderRadius:"3px"}}><i class="fas fa-edit"></i> editar</button> 
        </div>
      </td>
    </tr>
  
</React.Fragment>
  )


}
export default TablaContenido;