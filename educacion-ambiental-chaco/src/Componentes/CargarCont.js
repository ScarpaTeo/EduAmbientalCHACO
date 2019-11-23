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
    contador:0
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
    this.setState({idObjeto: res.data})
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
      switch (this.state.contador) {
        case 0:
          mostrar=<Formulario
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    />
          break;
        case 1:
          mostrar=<FormImg
                  onChange={this.handleImageChange}
                  onSubmit={this.handleSubmitImg}
                  titulo="Portada"
                  file={this.state.file}
                  />
            break;
        case 2:
          mostrar=<Link className="btn" to={{
                  pathname: `/Add/${this.state.idObjeto.data}`,
                  state: {
                  fromNotifications: true
                  }
              }}>Añadir Galeria</Link>

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
        <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Cargar nuevo contenido</MDBCardTitle>
                
                {mostrar}
                <button className="btn btn-info" onClick={this.funcionNext}>Next</button>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    );
  }
}


export default CargarCont;
