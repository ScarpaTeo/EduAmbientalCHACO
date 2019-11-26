import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import logo from './Img/Logo4.png';
import './css/FormularioContact.css'



const FormularioCont = () => {
    
  return (
        <React.Fragment>
            <div className="px-3 py-3">
                <img className="img-fluid animated bounceInDown slower" src={logo}  width="300"/>
            </div>
            <div className=" card mx-auto animated bounceInLeft delay-1 slower" style={{width:'50rem', margin:'30px', borderRadius:"35px"}}>

                <br/>
                <br/>
                <h2 class="h1-responsive font-weight-bold text-center my-4 blue-text">Contactanos y Sumate</h2>
                <br/>
                <br/>

                <div class="row card-body mx-3" style={{borderRadius: "25px"}}>

                    <div class="col-md-9 mb-md-0 mb-5 text-center mx-auto">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Nombre</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"/>
                                        <label for="email" class="">Email</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                        <label for="subject" class="">Asunto</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Mensaje</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center col-md-12 ">
                            <button type="button" className="btn btn-outline-primary btn-rounded waves-effect btn-lg btn-block ">Enviar</button>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <hr width="95%"/>

                    <div class="col-md-12 text-center ">
                        <ul class="list-unstyled mt-2 mb-2">
                            <br/>
                            <br/>
                            <li><i class="fas fa-map-marker-alt fa-2x blue-text"></i>
                                <p>MARCELO T. DE ALVEAR 145 - PISO 9 - OFICINA 8 CIUDAD DE RESISTENCIA.</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x blue-text"></i>
                                <p>TEL: 4448089</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x blue-text"></i>
                                <p>EDUCACIONAMBIENTALCHACO@GMAIL.COM</p>
                            </li>
                            <br/>
                            <br/>
                        </ul>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="col-md-12 mt-3" style={{borderRadius: "25px"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.633423214561!2d-58.98951798494358!3d-27.44953288289944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf504e7b2eb%3A0x62033b0a800da69!2sPISO%209%20-%20OFICINA%208%2C%20Marcelo%20T.%20de%20Alvear%20145%2C%20Resistencia%2C%20Chaco!5e0!3m2!1ses!2sar!4v1573549735767!5m2!1ses!2sar"  height="350" frameborder="0" style={{border:"0",width:"100%",margin:"auto"}} allowfullscreen=""></iframe>
                    </div>

                </div>

            </div>
            

        </React.Fragment>
    )
}
export default FormularioCont;