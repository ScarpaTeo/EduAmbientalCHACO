import React, {useState, useEffect} from 'react';



const DetalleGaleri = ({galeria}) => {
    
    const {name} = galeria;

    let newImg2='https://localhost:44398/images/'+name;



  return (
        <React.Fragment>
            <div className="row">
                    <div className="card" style={{width:'20rem', margin:'30px'}}>
                    <img src={newImg2} style={{borderRadius:"5px",padding:"20px"}} width="300px" alt="Card image cap"/>
                    </div>
            </div>

        </React.Fragment>
    )
}
export default DetalleGaleri;