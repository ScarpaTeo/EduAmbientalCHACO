import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';
import {Redirect,BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Formulario from '../Componentes/FormularioContenido'
import FormImg from './FormularioImagen'

class CargarCont extends Component {

  state = {
    form:{
      token:'',
      titulo: '',
      subtitulo: '',
      detalle: '',
      categoria: '',
      tags: ''
    },
    idObjeto:{},
    image: null,
    file:'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    contador:0,
    resultado:0,
    resultadoImg:0
  };

handleSubmit = async e =>{
  e.preventDefault();
  console.log(this.state);

  axios({
    method: 'post',
    url: 'https://localhost:44398/api/Contenido/Add',
    data: {
      token : localStorage.getItem('token'),
      titulo: this.state.form.titulo,
      subtitulo:this.state.form.subtitulo,
      detalle : this.state.form.detalle,
      categoria:this.state.form.categoria,
      tags:this.state.form.tags
    }
  }).then(res => {
    console.log(res.data);
    this.setState({idObjeto: res.data,resultado:res.result})
    console.log(this.state.idObjeto)
  })
  
}


handleChange = e => {
  this.setState({
      form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
      }
  }

  )
}

handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
      file: URL.createObjectURL(e.target.files[0])
    })
  };

  handleSubmitImg = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('Imgpathsave', this.state.image, this.state.image.name);
    let url = `https://localhost:44398/api/Contenido/AddImg?id=${this.state.idObjeto.data}`;
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          this.setState({resultadoImg: res.result})
        })
        .catch(err => console.log(err))
  };
  funcionNext = ()=>{
    this.setState({
      contador:this.state.contador+1
    })
  }


  render() {
    let mostrar
    let next
    let nextImg

      if(this.state.resultado!=0){
        next =
        <div className="row mx-auto animated bounceInRight">
        <div className="col-md-12">
          <a onClick={this.funcionNext} class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}><i className="fas fa-chevron-circle-right white-text"></i></a>
        </div>
        </div>
      }
      
      if(this.state.resultadoImg!=0){
        nextImg =
        <div className="row mx-auto animated bounceInRight">
        <div className="col-md-12">
          <a onClick={this.funcionNext} class="btn btn-primary btn-lg" style={{fontSize:"40px",borderRadius:"10px"}}><i className="fas fa-chevron-circle-right white-text"></i></a>
        </div>
        </div>
      }

      switch (this.state.contador) {
        case 0:
          mostrar=
          <React.Fragment>
            <div className="row justify-content-center align-items-center px-2">
              <div className="col-10 col-md-8"  >
              <Formulario
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    />
              </div>
              <div className="col-12 col-md-2 text-center">
                {next}            
              </div>
            </div>
           

          </React.Fragment>
          
          break;
        case 1:
          mostrar=
          <React.Fragment>
            <div className="row justify-content-center align-items-center px-2">
              <div className="col-10 col-md-8" >
              <FormImg
                  onChange={this.handleImageChange}
                  onSubmit={this.handleSubmitImg}
                  titulo="Portada"
                  file={this.state.file}
                  />
              </div>
              <div className="col-12 col-md-2 text-center">
                  {nextImg}            
              </div>
            </div>

          </React.Fragment>
          
            break;
        case 2:
          mostrar=
          <React.Fragment>
            <div className="row">
              <div className="card mx-auto" style={{width:'50rem', margin:'30px', borderRadius:"35px"}}>
                <div className="card-body px-lg-5">
                <Link className="btn btn-outline-primary btn-rounded waves-effect btn-lg btn-block" to={{
                    pathname: `/Add/${this.state.idObjeto.data}`,
                    state: {
                    fromNotifications: true
                    }
                }}>Añadir Galeria</Link>
                
                <Link className="btn btn-outline-primary btn-rounded waves-effect btn-lg btn-block" to={{
                    pathname: `/`,
                    state: {
                    fromNotifications: true
                    }
                }}>Home</Link>
                </div>
              </div>
            </div>            

          </React.Fragment>
    
            break;
      
        default:
          mostrar=<Redirect
                    to={{
                      pathname: "/"
                    }}
                  />
          break;
      }
    return (

      <React.Fragment>

        {mostrar}
        
      </React.Fragment>
    );
  }
}


export default CargarCont;
