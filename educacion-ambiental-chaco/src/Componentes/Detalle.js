import React, {useState, useEffect} from 'react';

const Detallecont = ({contenido,galeria}) => {
    
    const {id,titulo,subtitulo,detalle,categoria,tags,name_foto} = contenido;

    let newImg2="https://localhost:44398/images/"+name_foto;



  return (
        <React.Fragment>
            <div class="jumbotron text-center hoverable p-4">

                <div class="row">

                    <div class="col-md-4 offset-md-1 mx-3 my-3">

                    <div class="view overlay">
                        <img src={newImg2} class="img-fluid" alt="Sample image for first version of blog listing"/>
                        <a>
                        <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    </div>

                    <div class="col-md-7 text-md-left ml-3 mt-3">

                    <a href="#!" class="green-text">
                        <h6 class="h6 pb-1"><i class="fas fa-desktop pr-1"></i> Work</h6>
                    </a>

                    <h4 class="h4 mb-4">{titulo}</h4>
                    <h5 class="h5 mb-4">{subtitulo}</h5>

                    <p class="font-weight-normal">{detalle}</p>
                    <p class="font-weight-normal">Categoria<a><strong>{tags}</strong></a></p>

                    

                    </div>

                </div>

            </div>




        </React.Fragment>
    )
}
export default Detallecont;