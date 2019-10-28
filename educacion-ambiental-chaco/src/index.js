import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './Componentes/Footer';
import Plans from './Componentes/Plans'
import GetGaleria from './Componentes/getGaleria'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<GetGaleria/>, document.getElementById('root'));


serviceWorker.unregister();
