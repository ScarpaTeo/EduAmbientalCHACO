import React from 'react';
import '../Componentes/css/Sections.css'
import {Link } from 'react-router-dom';
import { MDBIcon} from "mdbreact";

class Sections extends React.Component {

  state = {
      
  };

  componentDidMount(){
    
  }

  render() {
      //asi se hace un renderizado condicional
    let content=localStorage.getItem('token')
    var loggin;
    if(content!==null){
      return <React.Fragment>
        <div className="row justify-content-center  pepito pt-3  fixed-bottom">

               <div className="col-7 col-sm-3 col-md-2 my-2 mx-2 mx-md-4 cajitas px-0 py-3 animated bounceInLeft delay-1" style={{"background-color": "rgb(60, 228, 116)"}}>
                <div className="row cajita align-items-center">
                  <div className="col-12">
                    <p className="h5"><strong>Admin contenido</strong></p>
                  </div>
                  <div className="col-12 text-right fixed-bottom mb-3">
                      <Link to={{
                        pathname:'/Administrar'
                        }}>
                        <MDBIcon className="white-text mr-2" size="3x" icon="chevron-circle-right" />
                      </Link>
                  </div>
                </div>
              </div> 


              <div className="col-7 col-sm-3 col-md-2 my-2 mx-2 mx-md-4 cajitas px-0 py-3 animated bounceInRight slower" style={{"background-color": "rgb(60, 228, 116)"}}>
              <div className="row cajita align-items-center">
                <div className="col-12">
                  <p className="h5"><strong>Cargar contenido</strong></p>
                </div>
                <div className="col-12 text-right fixed-bottom mb-3">
                    <Link to={{
                      pathname:'/NuevoContenido'
                      }}>
                      <MDBIcon className="white-text mr-2" size="3x" icon="chevron-circle-right" />
                    </Link>
                </div>
              </div>
            </div>


              <div className="col-7 col-sm-3 col-md-2 my-2 mx-2 mx-md-4 cajitas px-0 py-3 animated bounceInRight slower" style={{"background-color": "rgb(60, 228, 116)"}}>
              <div className="row cajita align-items-center">
                <div className="col-12">
                  <p className="h5"><strong>Nuevo Referente</strong></p>
                </div>
                <div className="col-12 text-right fixed-bottom mb-3">
                    <Link to={{
                      pathname:'/NuevoReferente'
                      }}>
                      <MDBIcon className="white-text mr-2" size="3x" icon="chevron-circle-right" />
                    </Link>
                </div>
              </div>
            </div>
               


        </div>
      </React.Fragment>
    }else return (
     <div className="row  justify-content-center pt-3  fixed-bottom">
       
        <div className="col-5 col-md-2 my-2 mx-2 mx-md-3 cajitas px-0 py-3 animated bounceInLeft delay-1" id="cajita1">
         <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>Eventos</strong></p>
           </div>
           <div className="col-12 text-right fixed-bottom mb-3">
              <Link to={{
                pathname:'/QueHacemos'
                }}>
                 <MDBIcon className="white-text mr-2" size="3x" icon="chevron-circle-right" />
              </Link>
           </div>
         </div>
        </div>  

        <div className="col-5 col-md-2 my-2 mx-2 mx-md-3 cajitas px-0 py-3 animated bounceInRight slower" id="cajita2">
        <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>Recorré la provincia</strong></p>
           </div>
           <div className="col-12 text-right fixed-bottom mb-3">
              <Link to={{
                pathname:'/Provincias'
                }}><MDBIcon className="white-text mr-2" size="3x" icon="chevron-circle-right" />
              </Link>
           </div>
         </div>
        </div>
        
        <div className="col-5 col-md-2 my-2 mx-2 mx-md-3 cajitas px-0 py-3 animated bounceInLeft  slow" id="cajita3">
        <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>Red de Referentes</strong></p>
           </div>
           <div className="col-12 text-right fixed-bottom mb-3">
              <Link to={{
                pathname:'/RedReferentes'
                }}><MDBIcon className="white-text mr-2" size="3x" icon="chevron-circle-right" />
              </Link>
           </div>
         </div>
        </div>
        
        <div className="col-5 col-md-2 my-2 mx-2 mx-md-3 cajitas px-0 py-3 animated bounceInRight delay" id="cajita4">
        <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>Sumate</strong></p>
           </div>
           <div className="col-12 text-right fixed-bottom mb-3">
              <Link to={{
                pathname:'/Sumate'
                }}><MDBIcon className="white-text mr-2" size="3x" icon="chevron-circle-right" />
              </Link>
           </div>
         </div>
        </div>
        {loggin}
     </div>
     
    );
  }
}

export default Sections;