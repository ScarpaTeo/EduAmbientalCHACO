import React from 'react';
import Header from '../Componentes/Header';
import Sections from '../Componentes/Sections';
import './css/fondo.css';




class Home extends React.Component {

  state = {
      
  };

  componentDidMount(){
    
  }

  render() {
    
    return (
      <div className="fondo" style={{height: "100vh"}}>
        
        <Header/>
        <Sections/>
        
      </div>
    );
  }
}

export default Home;