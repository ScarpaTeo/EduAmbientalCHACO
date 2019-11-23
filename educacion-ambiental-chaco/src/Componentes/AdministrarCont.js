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
                        Referentes Educacion Ambiental Chaco 
                        </h2>
                        <p className="white-text text-center w-responsive mx-auto mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                        </p>
                    </div>
                    <table class="table">
                        <thead class="black white-text">
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">titulo</th>
                            <th scope="col">categoria</th>
                            <th scope="col">tags</th>
                            <th scope="col">foto</th>
                            <th scope="col">acciones</th>
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
                    <Footer/>
                </div> 

    )
}
export default AdministrarCont