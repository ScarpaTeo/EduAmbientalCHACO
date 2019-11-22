import React, { Component } from 'react';
import axios from 'axios';

class CargarContenido extends Component {

  state = {
    titulo: '',
    subtitulo: '',
    detalle: '',
    categoria: '',
    tags: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('titulo',this.state.titulo);
    form_data.append('subtitulo',this.state.subtitulo);
    form_data.append('detalle',this.state.detalle);
    form_data.append('categoria',this.state.sector);
    form_data.append('tags',this.state.categoria);
    form_data.append('picture', this.state.image, this.state.image.name);
    let url = `https://localhost:44398/api/Animal/CargarContenido?token=219369dc-66cb-4a1f-ac41-53839f5e92fa&titulo="hola mundo"&subtitulo="Lorem ipsum"&detalle="jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjeeeeeeeeeeeeeeeeeeeeeweewewe"`;
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

  render() {
    return (
      <div className="container">
        <h3>Cargar contenido</h3>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input className="form-control z-depth-1" type="text" placeholder='Titulo' id='titulo' value={this.state.titulo} onChange={this.handleChange} required/>
          </p>
          <p>
            <input  className="form-control z-depth-1" type="text" placeholder='Subtitulo' id='subtitulo' value={this.state.subtitulo} onChange={this.handleChange} required/>
          </p>
          <div class="form-group shadow-textarea">
            <textarea className="form-control z-depth-1" id="detalle" rows="3" placeholder="Escribe una Descripcion..." value={this.state.detalle} onChange={this.handleChange}></textarea>
          </div>
          <p>
            <label for="sel1">Sector</label>
            <select className="form-control z-depth-1" id="categoria" value={this.state.sector} onChange={this.handleChange} >
              <option value="" >Todos</option>
              <option value="1">Zona Ramsar</option>
              <option value="2">Zona Agropecuaria Centro/Sur</option>
              <option value="3">Zona Agropecuaria Centro/Norte</option>
              <option value="4">Zona Impenetrable</option>
            </select>
          </p>
          <p>
            <label for="sel1">Categoria</label>
            <select className="form-control z-depth-1" id="tags" value={this.state.categoria} onChange={this.handleChange} >
              <option value="">Todos</option>
              <option value="noticia">Noticias</option>
              <option value="campaña">Campañas</option>
              <option value="proyecto">Proyectos</option>
              <option value="efemeride">Efemerides</option>
              <option value="evento">eventos</option>
            </select>
          </p>
          
          <p>
            <input
            className="file-upload"
            type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input className="btn btn-info" type="submit"/>
        </form>
      </div>
    );
  }
}

export default CargarContenido;
