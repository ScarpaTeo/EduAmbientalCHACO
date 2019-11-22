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
            <div>
                <NavBarPage/>
                <div className="container">
                    <div className="info-color #33b5e5 p-1 mb-3">
                        <h2 className="h1-responsive white-text font-weight-bold text-center my-5 ">
                        Administrador de Contenido
                        </h2>
                    </div>
                    <div className="card mx-auto">
                        <div className="card-body">

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
                            <tbody>
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
                    <Footer/>
                </div> 

    )
}
export default AdministrarCont