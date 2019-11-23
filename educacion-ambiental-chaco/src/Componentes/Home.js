import React from 'react';
import Header from '../Componentes/Header';
import Sections from '../Componentes/Sections';
import Footer from '../Componentes/Footer';




class Home extends React.Component {

  state = {
      
  };

  componentDidMount(){
    
  }

  render() {
    
    return (
      <div className="home" style={{height: "100vh"}}>
        
        <Header/>
        <Sections/>
        
        <Footer/>
      </div>
    );
  }
}

export default Home;