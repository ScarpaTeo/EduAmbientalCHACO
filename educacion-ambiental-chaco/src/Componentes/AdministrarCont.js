import React, { useState,useEffect } from 'react'
import { MDBContainer} from "mdbreact";
import TablaContenido from './TablaContenido'
import NavBarPage from './NavbarPage'
import Footer from './Footer'



function AdministrarCont(){
    const [imagenes,guardarImagenes]=useState([]);

    useEffect(() => {
      const consultarApi = async () =>{
          const url= `https://localhost:44398/api/Contenido/GetAll`;
         
          const respuesta = await fetch(url
          );
          const resultado = await respuesta.json();
          guardarImagenes(resultado.data)

      }
      consultarApi();
    },[imagenes])


    return(
            <React.Fragment>
                <div className="row justify-content-center align-items-center pt-5">
                    <div className="col-10 col-md-8">
                    <div className="card white" style={{ borderRadius:"35px"}}>
                        <h5 className="card-header info-color text-white text-center py-4" style={{ borderRadius:"35px"}} >
                            <strong>Administrar Contenido</strong>
                        </h5>
                        <div className="card-body px-lg-5">

                        <table class="table table-bordered table-responsive-md table-striped text-center">
                            <thead class="">
                                <tr>
                                <th scope="col" className="text-center" >id</th>
                                <th scope="col" className="text-center">titulo</th>
                                <th scope="col" className="text-center">categoria</th>
                                <th scope="col" className="text-center">tags</th>
                                <th scope="col" className="text-center">foto</th>
                                <th scope="col" className="text-center">acciones</th>
                                </tr>
                                
                            </thead>
                            <tbody style={{visibility:"visible"}}>
                                {imagenes.map(item => (
                                        <TablaContenido
                                        information = {item}
                                        />
                                ))}
                            </tbody>                  

                        </table>
                        </div>
                    </div>
                    


                </div>
                </div>
            </React.Fragment>

    )
}
export default AdministrarCont