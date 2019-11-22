import React, { useState,useEffect } from 'react'
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import './css/style.css'
import GetGaleria from '../Componentes/getGaleria'
import NavBarPage from './NavbarPage'
import Footer from './Footer'

const Interactivo = () =>{
    const [Categoria,guardarCategoria]=useState("");

    return(
        <div className="row pt-5 m-auto">
            <NavBarPage/>
            <div className="col-md-6 py-3 py-md-5">
                <h2 className="h1-responsive white-text font-weight-bold text-center mt-1">
                Educacion Ambiental Chaco 
                </h2>
                <p className="white-text text-center mt-4">
                DESDE EL AÑO 2017 EL MINISTERIO DE PLANIFICACIÓN AMBIENTE E INNOVACIÓN 
TECNOLÓGICA LIDERA EL DISEÑO DEL NUEVO PROGRAMA DE EDUCACION AMBIENTAL
DE LA PROVINCIA DEL CHACO.
                </p>
            </div>
           <div className="col-md-6  text-center my-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.792 288.902">
                    <g id="Grupo_5" data-name="Grupo 5" transform="translate(-755 15337.821)">
                        <a href="#1">
                            <path id="Trazado_14" onClick={event => guardarCategoria(event="3")} data-name="Trazado 14" class="cls-1" d="M20.165-37.559l8.1-.623-1-48.2,15.176,9.413,1.031,1.958.638,2.2,5.341,4.277,2.812,3.035L53.6-61.607l4.189,2.73L58-53.358l.819,1.374,3.665.24,1.751.893,1.578,1.22,6.694.549,1.922.858L75.768-46.3l.769,3.453.58,5.116,1.164.654,5,.62h4.663l1.476-.839,3.522-.436,2.918,2.146,6.269,3.243,2.747,1.09,4.84,4.055,2.093,4.187,5.145,3.444L122.17-15.2,112.016-4.274l-.439,2.332h-5.729v4.11H91.9l-9.091,9.34H78.2v2.117l-2.117.623L64.121,12.8l-.958,22.034H20.245L20.724,43H0V14.889l6.422,1.9L18.909-13.676Z" transform="translate(948 -15138)"/>
                        </a>
                        <a href="#2">
                           <path id="Trazado_15" onClick={event => guardarCategoria(event="4")} data-name="Trazado 15" class="cls-2" d="M-27.611-53.675l6.661,1.592.526,4.471,5.589,5.392H-11.5l3.047,1.212,9.689,1.276,2.8,2.422,4.971,8.922,6.9,6.771L29.556-9.625l3.469.452,5.488,4.443L44.658.18l6.155.2L52.263,5.07l8.645,8.344,1.044,2.727,2.611,1.218.638,2.5,3.191,1.856L69.436,24.2l.522,4.294,2.727,4.061,2.147.348,1.277.678,1.079,48.143-8.082.646L67.871,105.43,32.5,90.422V69H0L-.05,28.748H-11.275V20.8H-63.4V-26.39h-34.73l26.064-33.184V-79.821l6.332,2.094,2.977,3.009,3.922,3.395h6.184l6.938,2.34,2.64,2.413,4.6,2.64,2.941.755,2.036,1.281.528,2.716Z" transform="translate(899 -15258)"/>
                        </a>
                        <a href="#3">
                            <path id="Trazado_16" onClick={event => guardarCategoria(event="1")} data-name="Trazado 16" class="cls-3" d="M45.435-.047,80.41-.232l-.1,47.276,52.286-.1v7.943h11.17l.056,40.282,32.492-.027.045,21.287,35.46,15.127v.858l-12.746,29.9-6.549-1.681-4.971-2.295-1.912,4.717H172.5V151.826l-5.785-.588-4.608-3.529-.037-5.445-.061-9.164-47.748-.2.49-72.9H0Z" transform="translate(755 -15284)"/>
                        </a>
                        <a href="#4">
                            <path id="Trazado_17" onClick={event => guardarCategoria(event="2")} data-name="Trazado 17" class="cls-4" d="M0,0,47.863.243l-.011,14.544,5.07,3.671,5.467.536-.041,11.243,13.4.055,1.9-4.78,5.123,2.614V56.3l21.1-.2-.449-8.166,7.9.159,34.92-.009,1.026-21.911,11.924,1.268,2.089-.794V24.637h4.727l8.945-9.327h14.164V11.277h5.636l.436-2.5L201.109-1.93l4.36,3.811.476,1.842-11.087,12.6-2.564,6.938v3.318l-2.941,6.033-5.269,13.054L181.506,53.7l-6.419,6.861-3.887-1.4-1.339,1.054-15.352.343V79.591h13.047l.385,3.475-1.383,5.489-2.142,6.471-1.651,6.734L0,102Z" transform="translate(869 -15151)"/>
                        </a>
                        <a href="#5">
                            <path id="Trazado_18" onClick={event => guardarCategoria(event="1")} data-name="Trazado 18" class="cls-5" d="M3.251-2.706,7.1-1.327l6.549-7,3.3-9.745,4.467-11.081,3.1-6.233V-38.93l2.489-6.863L38.249-58.388l.861-.812s3.078,5.038,14.275,12.059a8.842,8.842,0,0,1,2.407,2.351,9.483,9.483,0,0,0-3.461,3.248,3.751,3.751,0,0,0-2.562.906c-.98-.082-2.533,1.326-2.533,1.326L47.508-31l-3.274-.344L42.967-31v3.551l-.312.67-2.915.376-1.648.377-1.3,1.133.172,4.291,3.732,3.655v4.408l-2.358,2.438L35.648-8.759l-4.463.893L22.974.577V9.19l2.833,6.239c.552,0,.528,12.119.528,12.671l-3.361,3.45L21.718,36.5l-.813,3.583L-4.788,39.57C-5.34,39.57.094,21.552.094,21l-.484-3.547-13.015-.04.045-18.729L1.908-1.628C2.486-2.144,3.251-2.706,3.251-2.706Z" transform="translate(1037 -15089)"/>
                        </a>
                    </g>
                </svg>
           </div>
           <GetGaleria 
           filtro={Categoria}
           />
           <Footer/>
        </div>
    )
}
export default Interactivo;