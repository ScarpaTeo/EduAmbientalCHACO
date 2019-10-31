import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import logo from '../img/logo.png';
import '../css/NavbarPage.css';
import {Link } from 'react-router-dom';
import $ from 'jquery';


class NavbarPage extends React.Component {

  state = {
    collapse: false,
    isWideEnough: false,   
    loguito: 'logo'  
  };

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

  render() {
    
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
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default NavbarPage;