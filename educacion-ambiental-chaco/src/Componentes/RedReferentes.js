import React, {useState, useEffect} from 'react';
import Referente from './Referente'
import NavBarPage from './NavbarPage'
import Footer from './Footer'

const RedReferentes = () => {

  const[dato, guardarDato]= useState([]);

    useEffect(() => {

        const api = async () => { //metodo para llamar api
        const url = 'https://localhost:44398/api/Access/GetReferentes';//guardamos la url de la api
        const res = await fetch(url);// esperamos la respuesta
        const info = await res.json();// convertimos en json
        guardarDato(info.data);

        }
       api();
       console.log([dato]);
    }, [dato])

  return (
    <div>
      <NavBarPage/>
      <div className="container" style={{minHeight: "100vh"}}>
          <div className="p-1 mb-3">
            <h2 className="h1-responsive white-text font-weight-bold text-center my-5 ">
            Referentes Educacion Ambiental Chaco 
            </h2>
            <p className="white-text text-center w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        <div className="row">
          
              {dato.map(item => (
                  
                  <div className="col col-sm-6 col-md-4">

                    <Referente
                      information = {item}
                    />

                  </div>

              ))}

        </div>


      </div>
        <Footer/>
    </div>
    );


}


export default RedReferentes;