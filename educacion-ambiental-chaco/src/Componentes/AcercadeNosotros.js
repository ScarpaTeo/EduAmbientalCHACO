import React from 'react'
import foto1 from './Img/hh.jpg'
import foto2 from './Img/img1.jpeg'
import foto3 from './Img/img2.jpg'
import foto4 from './Img/img3.png'
import Footer from './Footer'

const quieneSomos = ()=>{
    return(
        <React.Fragment>

<div class=" #2979ff blue accent-3">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h2 class="display-4 font-roboto white-text">QUIENES SOMOS</h2>
        <br/>
        <p class="lead text-muted mb-0 font-lato white-text" style={{fontSize:"14px"}}>DESDE EL AÑO 2017 EL MINISTERIO DE PLANIFICACIÓN AMBIENTE E INNOVACIÓN 
TECNOLÓGICA LIDERA EL DISEÑO DEL NUEVO PROGRAMA DE EDUCACION AMBIENTAL
DE LA PROVINCIA DEL CHACO. ESTE PROGRAMA FUE CONSTRUIDO CON LA PARTICIPACION
ACTIVA DE LA COMUNIDAD, E INVITÁNDOLOS A TRABAJAR EN PROYECTOS COMUNITARIOS 
AMBIENTALES EN CADA LOCALIDAD. ESTE SITIO TIENE EL FIN DE VISIBILIZAR ESOS PROYECTOS
QUE MUESTRAN EL COMPROMISO DE LA COMUNIDAD CHAQUEÑA CON EL AMBIENTE Y SU CONSERVACIÓN.
</p>

        
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={foto1} style={{borderRadius:"25px"}} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5 pb-4">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">QUÉ HACEMOS </h2>
        <br/>
        <p class="font-lato text-muted mb-4">DESDE EL MINISTERIO DE PLANIFICACIÓN AMBIENTE E INNOVACION
TECNOLÓGICA,
PROMOVEMOS AL DISEÑO Y LA IMPLEMENTACIÓN DEL PROGRAMA DE 
EDUCACIÓN AMBIENTAL DE LA PROVINCIA DEL CHACO,
ARGENTINA.</p>

      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={foto2} style={{borderRadius:"25px"}} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div class="row align-items-center pb-4">
      <div class="col-lg-5 px-5 mx-auto"><img src={foto3} style={{borderRadius:"25px"}} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6">
        <h2 class="font-weight-light">NUESTRAS ACCIONES</h2>
        <br/>
        <p class="font-lato text-muted mb-4">REALIZAMOS CAPACITACIONES,TALLERES,ENCUENTROS
CON LA COMUNIDAD PARA INCENTIVAR EL COMPROMISO 
CON EL AMBIENTE EN TODO EL TERRITORIO 
CHAQUEÑO.</p>
      </div>
    </div>


    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">LOS PROYECTOS</h2>
        <br/>
        <p class="font-lato text-muted mb-4">TODA LA COMUNIDAD CHAQUEÑA 
REPRESENTADA POR VOLUNTARIOS,
DOCENTES,AGENTES DEL MUNICIPIO Y MIEMBROS DE
ORGANIZACIONES DE LA SOCIEDAD CIVIL,
TRABAJAN 
COMPROMETIDOS EN EL CUIDADO DEL AMBIENTE.</p>

      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={foto4} style={{borderRadius:"25px"}} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>



  </div>
</div>



</React.Fragment>
    )
} 
export default quieneSomos