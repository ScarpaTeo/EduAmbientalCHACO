import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './Componentes/Footer';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import Interactivo from './Componentes/mapa'


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
