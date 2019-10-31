import React from "react";
import '../css/Header.css';
import logo from '../img/logo.png';
import $ from 'jquery';



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
      <div className="contenedor py-1 py-md-0 px-2 px-md-0">
        <div className="bg row align-items-center justify-content-center text-center">
          <div className="col-10">
            <img className="img-fluid" src={logo} alt="" width="500"/>
          </div>
        </div>
      </div>
      
    );
  }
 
  
}

export default Header;

