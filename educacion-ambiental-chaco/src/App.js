import React,{Component} from 'react';
import Home from './Componentes/Home';
import RedReferentes from './Componentes/RedReferentes';
import NavbarPage from './Componentes/NavbarPage';
import IniciarSesion from './Componentes/IniciarSesion';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './Componentes/PrivateRoutes';
import CargarCont from './Componentes/CargarCont';
import CargarGalleria from './Componentes/CargarGalleria';
import Interactivo from './Componentes/mapa';
import Detalle from './Componentes/DetalleContenido';
import NuevoReferente from './Componentes/NuevoReferente';
import FormularioContact from './Componentes/FormularioContact';
import AdministrarCont from './Componentes/AdministrarCont';
import Nosotros from './Componentes/AcercadeNosotros';
import Eventos from './Componentes/Eventos';
import Footer from './Componentes/Footer';




class App extends Component {
  render(){

    return(
      <div className="">
         
        <BrowserRouter>
            <NavbarPage/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Provincias" component={Interactivo}/>
                <Route exact path="/RedReferentes" component={RedReferentes}/>
                <Route exact path="/Sumate" component={FormularioContact}/>
                <Route exact path="/Iniciar" component={IniciarSesion}/>
                <Route exact path="/Contenido/:id" component={Detalle}/>
                <Route exact path="/Administrar" component={AdministrarCont}/>
                <Route exact path="/Add/:handle" component={CargarGalleria}/>
                <Route exact path="/AcercaDe" component={Nosotros}/>
                <Route exact path="/Eventos" component={Eventos}/>


                <PrivateRoutes
                  path="/NuevoContenido"
                  component={CargarCont}
                />

                <PrivateRoutes
                  path="/NuevoContenido/Galeria/:handle"
                  component={CargarGalleria}
                />
                
                <PrivateRoutes
                  path="/NuevoReferente"
                  component={NuevoReferente}
                />


                
                
                
            </Switch>
            <Footer/>
        </BrowserRouter>
      
      </div>
      
      
    );
  }
}

export default App;
