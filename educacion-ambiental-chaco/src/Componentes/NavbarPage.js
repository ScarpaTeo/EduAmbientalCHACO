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
      
       <div className="loguito fixed-top">
        <MDBNavLink onClick={this.handlerClick} className="px-3 mb-2" to="#"><MDBIcon className="animated bounceInRight slower" icon="sign-out-alt" size="2x" style={{color: "white"}}/></MDBNavLink>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="" style={{marginTop:"15px",marginLeft:"90%"}}>
        <MDBDropdown dropleft>
          <MDBDropdownToggle color="blue" className="px-3 mb-2">
          <MDBIcon className="animated bounceInRight slower " icon="caret-down" size="2x" style={{color: "white"}}/>
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem><MDBNavLink  className="" to="/QueHacemos">Eventos</MDBNavLink></MDBDropdownItem>
            <MDBDropdownItem><MDBNavLink  className="" to="/Provincias">Recorre</MDBNavLink></MDBDropdownItem>
            <MDBDropdownItem><MDBNavLink  className="" to="/RedReferentes">Red Referentes</MDBNavLink></MDBDropdownItem>
            <MDBDropdownItem><MDBNavLink  className="" to="/Sumate">Sumate</MDBNavLink></MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
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