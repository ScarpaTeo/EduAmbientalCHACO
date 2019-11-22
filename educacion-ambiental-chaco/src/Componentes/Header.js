import React from "react";
import './css/Header.css'
import logo from './Img/Logo4.png';
import $ from 'jquery';
import {MDBAnimation} from 'mdbreact';



class Header extends React.Component {

  state = {
    
  }

  componentDidMount(){
    

    //EFECTO PARALLAX
    $(window).scroll(() => {
      let scroll = $(window).scrollTop();
      let posicion = scroll * 0.40;
      console.log(scroll);
      
      $('.bg').css({
          'background-position': '0 -'+posicion+'px'
      });
    });//fin EFECTO PARALLAX
  }

  render(){
    return (
      
        <div className="contenedor row justify-content-center align-items-start text-center"  style={{height: "100vh"}}>
          <div className="col-10 col-sm-8">
            <img className="img-fluid animated bounceInDown slower" src={logo}  width="500"/>
          </div>
        
      </div>
      
    );
  }
 
  
}

export default Header;

