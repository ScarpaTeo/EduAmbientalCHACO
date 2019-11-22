import React, {Component} from 'react';
import './css/NavbarPage.css';
import {MDBIcon, MDBNavLink} from 'mdbreact';


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
      loggin = <div className="loguito ">
    
      <MDBNavLink onClick={this.handlerClick} className="px-3 mb-2" to="#"><MDBIcon className="animated bounceInRight slower" icon="sign-out-alt" size="2x" style={{color: "white"}}/></MDBNavLink>
    
   </div>
    }

  return ( 
    <div className="">
      {loggin}
    </div>
    );
  }
}

export default NavbarPage;