import React, { Component } from 'react';
import axios from 'axios';
import FormImg from './FormularioGalleria'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";


class CargarGalleria extends Component {

  state = {
    image: [],
    file:['https://images.pexels.com/photos/1480796/pexels-photo-1480796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'] 
   }



  handleImageChange = (e) => {
    let preview=URL.createObjectURL(e.target.files[0])
    let img = e.target.files[0]
    this.setState({
      //image: e.target.files[0],
      //file: this.state.file.push(URL.createObjectURL(e.target.files[0]))
      image:[ ...this.state.image,img],
      file:[ ...this.state.file,preview],
    })
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { handle } = this.props.match.params

    for (var i = 0; i < this.state.image.length ; i++) {
      console.log(this.state);
      let form_data = new FormData();
      form_data.append('Imgpathsave', this.state.image[i]);
      let url = `https://localhost:44398/api/Contenido/AddGallery?id=${handle}`;
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
  }
  };

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Cargar Galeria de Fotos</MDBCardTitle>
                

                    <div className="row">
                      <div className="col-d-6">
                      <FormImg
                        onChange={this.handleImageChange}
                        onSubmit={this.handleSubmit}
                        file={this.state.file}
                        titulo="Galeria"
                        />
                      </div>
                    </div>

              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </React.Fragment>
/*
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
      */
    );
  }
}

export default CargarGalleria;
