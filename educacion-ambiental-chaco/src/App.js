import React,{Component} from 'react';
import Home from './Componentes/Home';
import Provincias from './Componentes/Provincias';
import QueHacemos from './Componentes/QueHacemos';
import RedReferentes from './Componentes/RedReferentes';
import './Componentes/css/App.css';
import Sumate from './Componentes/Sumate';
import NavbarPage from './Componentes/NavbarPage'
import IniciarSesion from './Componentes/IniciarSesion'
import Footer from './Componentes/Footer'

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './Componentes/PrivateRoutes'

import CargarCont from './Componentes/CargarCont'
import CargarGalleria from './Componentes/CargarGalleria'
import Interactivo from './Componentes/mapa'
import Detalle from './Componentes/DetalleContenido'
import NuevoReferente from './Componentes/NuevoReferente'
import FormularioContact from './Componentes/FormularioContact'
import AdministrarCont from './Componentes/AdministrarCont'
import AcercaDe from './Componentes/AcercadeNosotros'




class App extends Component {
  render(){

  //  <Route  exact path="/Nuevo/Contenido" component={CargarCont}/>
     //   <Route  exact path="/Nuevo/Contenido/Galeria/:handle" component={CargarGalleria }/>
     //   <Route  exact path="/Inicio" component={Interactivo}/>
    //    <Route  exact path="/Contenido/:id" component={Detalle}/>
    //    <Route  exact path="/Referente" component={RedReferentes}/>
    
    //<Route exact path="/RedReferentes" component={RedReferentes}/>
    return(
      <div className="">
         
        <BrowserRouter>
            <NavbarPage/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/QueHacemos" component={QueHacemos}/>
                <Route exact path="/Provincias" component={Interactivo}/>
                <Route exact path="/RedReferentes" component={RedReferentes}/>
                <Route exact path="/Sumate" component={FormularioContact}/>
                <Route exact path="/Iniciar" component={IniciarSesion}/>
                <Route  exact path="/Contenido/:id" component={Detalle}/>
                <Route exact path="/AcercaDe" component={AcercaDe}/>

                
  
                <PrivateRoutes
                  path="/NuevoContenido"
                  component={CargarCont}
                />
                
                <PrivateRoutes
                  path="/Administrar"
                  component={AdministrarCont}
                />
                
                <PrivateRoutes
                  path="/Add/:handle"
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
