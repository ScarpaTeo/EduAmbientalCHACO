import React, { Component } from 'react';
import axios from 'axios';
import Registro from './Registro'
import RegistroImg from './RegistroImg'
import {Redirect,BrowserRouter, Route, Switch } from 'react-router-dom';


class NuevoReferente extends Component {

    state = {
      form:{
        nombre:'',
        apellido: '',
        ubicacion: '',
        email: '',
        password: ''
      },
      idObjeto:{},
      image: null,
      file:'http://empresariadelfuturo.com/wp-content/uploads/2018/05/EmpDF-Testi4.png',
      contador:0

    };
  
  handleSubmit = async e =>{
    e.preventDefault();
    console.log(this.state);
  
    axios({
      method: 'post',
      url: 'https://localhost:44398/api/Access/Register',
      data: {
        token : localStorage.getItem('token'),
        nombre: this.state.form.nombre,
        apellido:this.state.form.apellido,
        ubicacion : this.state.form.ubicacion,
        email:this.state.form.email,
        password:this.state.form.password
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
      let url = `https://localhost:44398/api/Access/AddImg?id=${this.state.idObjeto.data}`;
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
          mostrar=<Registro
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    />
          break;
        case 1:
          mostrar=<RegistroImg
                  onChange={this.handleImageChange}
                  onSubmit={this.handleSubmitImg}
                  titulo="Portada"
                  file={this.state.file}
                  />
            break;
        case 2:
          mostrar=<h1>Referente Registrado</h1>
            break;
      
        default:
          mostrar=<Redirect
                    to={{
                      pathname: "/RedReferentes"
                    }}
                  />
          break;
      }

      return (
        <React.Fragment>
            {mostrar}
            <button className="btn btn-info" onClick={this.funcionNext}>Siguiente</button>
        </React.Fragment>
      )
    }
}
export default NuevoReferente
  