import React from 'react';
import '../css/Sections.css'
import {Link } from 'react-router-dom';

class Sections extends React.Component {

  state = {
      
  };

  componentDidMount(){
    
  }

  render() {
    
    return (
     <div className="row py-2 justify-content-center">

        <div className="col-5 col-md-2 m-2 cajitas px-0 py-3" id="cajita1">
         <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>que hacemos</strong></p>
           </div>
           <div className="col-12 text-right">
              <Link to={{
                pathname:'/QueHacemos'
                }}><button type="button" className="btn"><strong><h5>></h5></strong></button>
              </Link>
           </div>
         </div>
        </div>  

        <div className="col-5 col-md-2 m-2 cajitas px-0 py-3" id="cajita2">
        <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>Recorré la provincia</strong></p>
           </div>
           <div className="col-12 text-right">
              <Link to={{
                pathname:'/Provincias'
                }}><button type="button" className="btn"><strong><h5>></h5></strong></button>
              </Link>
           </div>
         </div>
        </div>
        
        <div className="col-5 col-md-2 m-2 cajitas px-0 py-3" id="cajita3">
        <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>Red de Referentes</strong></p>
           </div>
           <div className="col-12 text-right">
              <Link to={{
                pathname:'/RedReferentes'
                }}><button type="button" className="btn"><strong><h5>></h5></strong></button>
              </Link>
           </div>
         </div>
        </div>
        
        <div className="col-5 col-md-2 m-2 cajitas px-0 py-3" id="cajita4">
        <div className="row cajita align-items-center">
           <div className="col-12">
            <p className="h5"><strong>Sumate</strong></p>
           </div>
           <div className="col-12 text-right">
              <Link to={{
                pathname:'/Sumate'
                }}><button type="button" className="btn"><strong><h4>></h4></strong></button>
              </Link>
           </div>
         </div>
        </div>
     </div>
    );
  }
}

export default Sections;