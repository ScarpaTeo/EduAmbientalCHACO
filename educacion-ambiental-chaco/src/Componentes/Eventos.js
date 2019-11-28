import React from 'react';
import Evento from './Evento';
import './css/fondo.css';


class Eventos extends React.Component {


    token='IJBMYM3D3SQFZGQRLTHI';

  state = {
     eventos: [] ,
     //imagenes: []
  };

  componentWillMount(){
    this.obtenerEventos();
  }

  obtenerEventos = () =>{
      let url = `https://www.eventbriteapi.com/v3/users/me/events/?token=${this.token}`;
      fetch(url)
        .then(respuesta => respuesta.json())
        .then(info => this.setState({
          eventos: info.events,
          //imagenes: info.events.logo
        }), //console.log(this.state.imagenes)
        
        )
       
        
  }

  render() {
       return (
     <div className="container fondo">
       <div className="row justify-content-center">
       
       {this.state.eventos.map(item =>(
         <div className="col-12 col-md-6 col-lg-4">
            <Evento
              key={item}
              eventos={item}
             
              />
          </div>
       ))}
       
       </div>
     </div>
     
    );
  }
}

export default Eventos;