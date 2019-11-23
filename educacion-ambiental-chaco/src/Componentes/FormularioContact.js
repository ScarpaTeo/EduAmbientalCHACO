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
            <section class="mb-4 card mx-2">

                <h2 class="h1-responsive font-weight-bold text-center my-4">Contactanos y Sumate</h2>
                

                <div class="row container mx-3" style={{borderRadius: "25px"}}>

                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"/>
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>

                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>MARCELO T. DE ALVEAR 145 - PISO 9 - OFICINA 8 CIUDAD DE RESISTENCIA.</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>TEL: 4448089</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>EDUCACIONAMBIENTALCHACO@GMAIL.COM</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
            <div className="container-fluid mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.633423214561!2d-58.98951798494358!3d-27.44953288289944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf504e7b2eb%3A0x62033b0a800da69!2sPISO%209%20-%20OFICINA%208%2C%20Marcelo%20T.%20de%20Alvear%20145%2C%20Resistencia%2C%20Chaco!5e0!3m2!1ses!2sar!4v1573549735767!5m2!1ses!2sar"  height="350" frameborder="0" style={{border:"0",width:"80vw",margin:"auto"}} allowfullscreen=""></iframe>
            </div>
            <Footer/>

        </React.Fragment>
    )
}
export default FormularioCont;