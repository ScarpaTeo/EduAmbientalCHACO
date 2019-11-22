import React from "react";
import logo1 from '../Componentes/Img/Logo1.png';
import logo2 from '../Componentes/Img/Logo2.png';
import logo3 from '../Componentes/Img/Logo3.png';
import logo4 from '../Componentes/Img/Logo4.png';
import './css/Footer.css';

const FooterPage = () => {
/*
  <MDBFooter color="orange" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Educación Ambiental Chaco</h5>
            <p>
              Educamos para construir conciencia ambiental.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <p><MDBIcon icon="map-marked-alt" /> Marcelo T. de Alvear 145 - Piso 9 - Oficina 8
                    Ciudad de Resistencia.</p>
              </li>
              <li className="list-unstyled">
                <p><MDBIcon icon="mobile-alt" /> Tel: 4448089</p>
              </li>
              <li className="list-unstyled">
                <p><MDBIcon far icon="envelope" /> educacionambientalchaco@gmail.com</p>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <a href="#!"> <MDBIcon fab icon="facebook-square" />  facebook </a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> <MDBIcon fab icon="twitter-square" />  Twitter </a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="instagram" />  Instagram</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>*/
  return (
    <div className="row justify-content-center align-items-center foo fixed-bottom py-2 m-auto">
      <div className="col-3">
          <img src={logo4} className="loguitos img-fluid"  alt="logoChaco"/>
          </div>
        <div className="col-3">
          <img src={logo3} className="loguitos img-fluid" alt="logoChaco"/>
          </div>
        <div className="col-3">
          <img src={logo2} className="loguitos img-fluid" alt="logoChaco"/>
          </div>
        <div className="col-3">
          <img src={logo1} className="loguitos img-fluid" alt="logoChaco"/>
          </div>
    </div>
    
       
      
   
  );
}

export default FooterPage;