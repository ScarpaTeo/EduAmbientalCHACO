import React, { Component } from 'react';
import axios from 'axios';
import FormImg from './FormularioImagen'

class CargarImagenes extends Component {
/*
  state = {
    image: null,
    file:'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  };


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
    let url = 'https://localhost:44398/api/Contenido/AddImg?id=7';
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
*/
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-d-6">
            <FormImg
            onChange={this.handleImageChange}
            onSubmit={this.handleSubmitImg}
            titulo="Portada"
            file={this.state.file}
            />
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default CargarImagenes;
