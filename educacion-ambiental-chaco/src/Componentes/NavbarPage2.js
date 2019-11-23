import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import logo from '../Componentes/Img/logo.png';
import '../Componentes/css/NavbarPage.css';
import {Link } from 'react-router-dom';
import $ from 'jquery';
import {Redirect,BrowserRouter, Route, Switch } from 'react-router-dom';



class NavbarPage extends React.Component {

  state = {
    collapse: false,
    isWideEnough: false,   
    loguito: 'logo',
    redirect:false 
  }

  componentDidMount(){
    let AlturaMediaHeader = 300;

    $(window).scroll(() => {
      let scroll2 = $(window).scrollTop();

      if(scroll2 >= AlturaMediaHeader){
        this.setState({
          loguito: 'logo1'
        });

      }else{
        this.setState({
          loguito: 'logo2'
         
        });
        
      }
    });

    
  }

  onClick = this.onClick.bind(this);
  
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handlerClick=()=>{
    localStorage.removeItem('token')
    this.setState({redirect:true})
  }


  render() {
    //asi se hace un renderizado condicional
    let content=localStorage.getItem('token')
    var loggin;
    if(content!==null){
      loggin =<React.Fragment>
               <MDBNavItem>
                  <MDBNavLink className="px-3" to="#"><strong>Cargar Contenido</strong></MDBNavLink>
               </MDBNavItem>
              <MDBNavItem>
               <MDBNavLink onClick={this.handlerClick} className="px-3" to="#"><strong>Cerrar Sesion</strong></MDBNavLink>
              </MDBNavItem>
      </React.Fragment>
    }

    return (
        <MDBNavbar className="fixed-top py-md-2" color="" dark expand="md" scrolling transparent>
          <MDBNavbarBrand id="brand" href="/">
            <MDBNavLink to={{
                  pathname:`/`
                }}><img  className={this.state.loguito} src={logo} alt="Transparent MDB Logo" width="120"/>
            </MDBNavLink>
          </MDBNavbarBrand>

            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>

              <MDBNavItem>

                <MDBNavLink className="px-3" to={{
                  pathname:`/`
                }}><strong>Inicio</strong></MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className="px-3" to={{
                  pathname:`/`
                }}><strong>Quienes Somos</strong></MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className="px-3" to="#"><strong>Contacto</strong></MDBNavLink>
              </MDBNavItem>

              {loggin}
              {this.state.redirect ? <Redirect to="/" /> : null}

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default NavbarPage;