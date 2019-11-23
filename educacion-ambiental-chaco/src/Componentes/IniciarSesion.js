import React from 'react';
import axios from 'axios';
import Login from './Login';
import '../Componentes/css/Login.css'
import logo from '../Componentes/Img/Logo4.png'



class IniciarSesion extends React.Component{

        state = {
            form:{
                email:"",
                password:""
            },
            token:null,
            redirect:false
            
        }
        

        
handleSubmit = async e =>{
    e.preventDefault();
    console.log(this.state);
  
    axios({
      method: 'post',
      url: 'https://localhost:44398/api/Access/Login',
      data: {
        email: this.state.form.email,
        password:this.state.form.password
      }
    }).then(res => {
      //console.log(res.data);
      this.setState({
          token:res.data,
          form:{
            email:'',
            password:''
          }
        })
      //console.log(this.state.token.data)
        
      //aca guardo el token en local storage
      localStorage.setItem('token',this.state.token.data);
      let content=localStorage.getItem('token');
      console.log(content)
      this.setState({
          redirect:true
      })

            // setter
            //localStorage.setItem('myData', data);
            // getter
            //localStorage.getItem('myData');
            // remove
            //localStorage.removeItem('myData');
            // remove all
            //localStorage.clear();
    })
    
  }

        handleChange = e =>{
            this.setState({
               form: {
                   ...this.state.form,
                   [e.target.name]: e.target.value,
               } 
            })
        }
        render(){
            return(
                <React.Fragment>
                    <div class="">
                        <div class="container py-5">
                            <div class="row h-100 align-items-center py-5">
                            <div class="col-lg-6">
                                <Login 
                                    form={this.state.form}
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                    redi={this.state.redirect}
                                />

                            </div>
                            <div class="col-lg-6 d-none d-lg-block"><img src={logo} alt="" class="img-fluid"/></div>
                            </div>
                        </div>
                    </div>
                    
                    
                </React.Fragment>
            )
        }


}


export default IniciarSesion;