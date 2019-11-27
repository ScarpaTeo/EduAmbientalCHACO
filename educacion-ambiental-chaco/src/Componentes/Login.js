import React from "react";
import { MDBNavLink,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom';
import {Redirect,BrowserRouter, Route, Switch } from 'react-router-dom';
import img from './Img/avatar.svg'
import '../Componentes/css/Login.css'





class Login extends React.Component {

  render(){

    const {redi,onChange, onSubmit, form} = this.props
    

    return (
      <MDBContainer>
        <div class="card p-1 animated bounceInLeft slower" style={{borderRadius:"25px",maxWidth:"350px"}}>
          
          <br/>

          <img src={img} className="mx-auto d-block p-3 " width="150px" alt=""/>

          <div class="card-body px-lg-5 pt-0">

            <form class="text-center" onSubmit={onSubmit} style={{color: '#757575'}} action="#!">

              <div class="md-form">
                <input type="email" value={form.email} onChange={onChange} placeholder="e-mail" name="email" class="form-control" required/>
              </div>

              <div class="md-form">
                <input type="password" placeholder="contraseña" value={form.password} onChange={onChange} name="password" class="form-control" required/>
              </div>
              <br/>
              <div class="d-flex">
                  <div>
                      <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                          <label class="custom-control-label" for="defaultLoginFormRemember" style={{fontSize:"13px"}}>Recordarme</label>
                      </div>
                  </div>
              </div>
              <br/>
              <br/>

              <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Entrar</button>

            </form>

          </div>

        </div>
        {redi ? <Redirect to="/" /> : null}
      </MDBContainer>
    );
  };
}
 

export default Login;

