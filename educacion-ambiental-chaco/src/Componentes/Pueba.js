import React from "react";
import $ from 'jquery'
import '../Componentes/css/style.css'
const Prueba = () => {

    const componentDidMount = () => {
        
        //funciones Jquery
        $("imgAdd").click(function(){
            $(this).closest("row").find('imgAdd').before( alert("hola"));
          });
          $(document).on("click", "i.del" , function() {
              $(this).parent().remove();
          });
          $(function() {
              $(document).on("change",".uploadFile", function()
              {
                      var uploadFile = $(this);
                  var files = !!this.files ? this.files : [];
                  if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
           
                  if (/^image/.test( files[0].type)){ // only image file
                      var reader = new FileReader(); // instance of the FileReader
                      reader.readAsDataURL(files[0]); // read the local file
           
                      reader.onloadend = function(){ // set image data as background of div
                          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
                      }
                  }
                
              });
          });
    }

  return (
    <div className="container">
        <h2>Hola mundo </h2>
        <div class="row">
        <div class="col-sm-2 imgUp">
            <div class="imagePreview"></div>
                <label class="btn btn-primary">
                    Upload<input type="file" className="uploadFile img" id="Upload Photo" style={{width:"0px" ,height:"0px",overflow:"hidden"}}/>
                </label>
        </div>
        <i className="fa fa-plus imgAdd" id="imgAdd"></i>
        </div>
    </div>
  )};
export default Prueba 