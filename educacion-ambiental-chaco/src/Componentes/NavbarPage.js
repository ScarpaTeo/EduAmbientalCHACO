import React, {Component} from 'react';
import {Redirect,BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/NavbarPage.css';
import {MDBIcon, MDBNavLink,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';


class NavbarPage extends Component {
state = {
  isOpen: false,
  redirect:false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

handlerClick=()=>{
  localStorage.removeItem('token')
  this.setState({redirect:true})
}

render() {

  let content=localStorage.getItem('token')
    var loggin;
    if(content!==null){
      loggin =
      <React.Fragment>

      <div class="loguito dropdown fixed-top">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
        <MDBIcon className="animated bounceInRight slower pt-3 px-2" icon="sign-out-alt" size="2x" style={{color: "white"}}/>
        </button>
        <div class="dropdown-menu">
          <MDBNavLink  className="dropdown-item" to="/">Añadir</MDBNavLink>
          <MDBNavLink  className="dropdown-item" to="/QueHacemos">Eventos</MDBNavLink>
          <MDBNavLink  className="dropdown-item" to="/Provincias">Regiones</MDBNavLink>
          <MDBNavLink  className="dropdown-item" to="/RedReferentes">Red Referentes</MDBNavLink>
          <MDBNavLink  className="dropdown-item" to="/Sumate">Sumate</MDBNavLink>
          <hr/>
          <MDBNavLink onClick={this.handlerClick} className="dropdown-item" to="/Sumate">Cerrar Sesion</MDBNavLink>
        </div>
      </div>

      </React.Fragment>
    }
    

  return ( 
    <div className="">
      {loggin}
      {this.state.redirect ? <Redirect to="/" /> : null}
    </div>
    );
  }
}

export default NavbarPage;