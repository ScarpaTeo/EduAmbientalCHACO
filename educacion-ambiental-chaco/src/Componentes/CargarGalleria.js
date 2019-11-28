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

    //for (var i = 0; i < this.state.image.length ; i++) {
      console.log(this.state);
      for (const file of this.state.image){
      let form_data = new FormData();
      form_data.append('Imgpathsave',file,file.name);
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
        <div className="row justify-content-center align-items-center px-2">
          <div className="col-10 col-md-8">
            
             <FormImg
                        onChange={this.handleImageChange}
                        onSubmit={this.handleSubmit}
                        file={this.state.file}
                        titulo="Galeria"
                        />
          </div>
        </div>
                     
          </React.Fragment>
    );
  }
}

export default CargarGalleria;
