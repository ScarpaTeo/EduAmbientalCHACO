import React, { Component } from 'react';
import axios from 'axios';

class CargarImagenes extends Component {

  state = {
    image: null
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
    form_data.append('picture', this.state.image, this.state.image.name);
    let url = 'https://localhost:44398/api/Animal/Photos?token=219369dc-66cb-4a1f-ac41-53839f5e92fa&id=2';
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
        <h3>Cargar fotos en la galeria</h3>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default CargarImagenes;
