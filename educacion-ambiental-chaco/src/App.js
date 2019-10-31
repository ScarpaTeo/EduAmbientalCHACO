import React,{Component} from 'react';
import Home from './Pages/Home';
import Provincias from './Components/Provincias';
import QueHacemos from './Components/QueHacemos';
import RedReferentes from './Components/RedReferentes';
import './css/App.css';
import Sumate from './Components/Sumate';
import NavbarPage from './Components/NavbarPage';

import {BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render(){
    return(
      <div className="container-fluid">
         
        <BrowserRouter>
        <NavbarPage/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/QueHacemos" component={QueHacemos}/>
                <Route exact path="/Provincias" component={Provincias}/>
                <Route exact path="/RedReferentes" component={RedReferentes}/>
                <Route exact path="/Sumate" component={Sumate}/> 
            </Switch>
        </BrowserRouter>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/> 
      </div>
      
      
    );
  }
}

export default App;
