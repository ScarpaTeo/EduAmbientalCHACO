using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using cursomvcapi.Models.WS;
using cursomvcapi.Models;
using System.Threading.Tasks;
using System.Web;
using System.IO;
using System.Text;
using System.Drawing;
namespace cursomvcapi.Controllers
{
    public class AnimalController : BaseController
    {
        //ese metodo recibe un Id y muestra la galeria de fotos y la info 
        [HttpGet]
        public Reply GetDetalle([FromUri]AnimalViewModel model)
        {
            Reply oR = new Reply();
            oR.result = 0;

            try
            {
                using (cursomvcapiEntities db = new cursomvcapiEntities())
                {
                    List<ListAnimalsViewModels> lst = (from a in db.Animal
                                                       join c in db.Galeria
                                                       on a.id equals c.id_identificador
                                                       where a.id == model.id
                                                       select new ListAnimalsViewModels
                                                       {
                                                           id = a.id,
                                                           titulo = a.titulo,
                                                           subtitulo = a.subtitulo,
                                                           detalle = a.detalle,
                                                           categoria = a.categoria,
                                                           tags = a.tags,
                                                           picture = a.picture,
                                                           foto = c.foto

                                                       }).ToList();
                   



                    oR.data = lst;
                    oR.result = 1;
                }

            }
            catch (Exception exp)
            {

                oR.message = "ocurrio un error en el servidor";
            }

            return oR;

        }
        
        //este metodo todo los contenidos de las tablas multimedia
        [HttpGet]
        public Reply GetAll()
        {
            Reply oR = new Reply();
            oR.result = 0;

            try
            {
                using (cursomvcapiEntities db = new cursomvcapiEntities())
                {
                    List<ListAnimalsViewModels> lst = List(db);
                    oR.data = lst;
                    oR.result = 1;
                }

            }
            catch (Exception exp)
            {

                oR.message = "ocurrio un error en el servidor";
            }

            return oR;

        }

            
        [HttpPost]
        public Reply Add([FromBody]AnimalViewModel model)
        {
            Reply oR = new Reply();
            oR.result = 0;

            if (!Verify(model.token))
            {
                oR.message = "no autorizado";
                return oR;
            }
            //validaciones 
            if (Validate(model))
            {
                oR.message = error;
                return oR;
            }


            try
            {
                using (cursomvcapiEntities db = new cursomvcapiEntities())
                {
                    Animal oAnimal = new Animal();
                    oAnimal.titulo = model.titulo;
                    oAnimal.subtitulo = model.subtitulo;
                    oAnimal.detalle= model.detalle;
                    oAnimal.categoria = model.categoria;
                    oAnimal.tags = model.tags;

                    db.Animal.Add(oAnimal);
                    db.SaveChanges();

                    List<ListAnimalsViewModels> lst = List(db);
                    oR.result = 1;
                    oR.data = lst;
                }
            }
            catch (Exception exp)
            {

                oR.message = "ocurrio un error en el servidor";
            }

            return oR;
        }

        [HttpPost]
        public Reply Edit([FromBody]AnimalViewModel model)
        {
            Reply oR = new Reply();
            oR.result = 0;

            if (!Verify(model.token))
            {
                oR.message = "no autorizado";
                return oR;
            }
            //validaciones 
            if (!Validate(model))
            {
                oR.message = error;
                return oR;
            }


            try
            {
                using (cursomvcapiEntities db = new cursomvcapiEntities())
                {
                    Animal oAnimal = db.Animal.Find(model.id);
                    oAnimal.titulo = model.titulo;
                    oAnimal.subtitulo = model.subtitulo;
                    oAnimal.detalle = model.detalle;
                    oAnimal.categoria = model.categoria;
                    oAnimal.tags = model.tags;

                    db.Entry(oAnimal).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();

                    List<ListAnimalsViewModels> lst = List(db);
                    oR.result = 1;
                    oR.data = lst;
                }
            }
            catch (Exception exp)
            {

                oR.message = "ocurrio un error en el servidor";
            }

            return oR;
        }


        //revisar 
        [HttpPost]
        public Reply Delete([FromUri]AnimalViewModel model)
        {
            Reply oR = new Reply();
            oR.result = 0;

            if (!Verify(model.token))
            {
                oR.message = "no autorizado";
                return oR;
            }


            try
            {
                using (cursomvcapiEntities db = new cursomvcapiEntities())
                {

                    var delete = (from a in db.Animal
                                  where a.id == model.id
                                  select a).FirstOrDefault();
                    db.Animal.Remove(delete);
                    db.SaveChanges();
                    /*
                    Animal oAnimal = db.Animal.Find(model.id);
                    oAnimal.titulo = model.titulo;
                    oAnimal.subtitulo = model.subtitulo;
                    oAnimal.detalle = model.detalle;
                    oAnimal.categoria = model.categoria;
                    oAnimal.tags = model.tags;
                    
                    db.Entry(oAnimal).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    */

                    List<ListAnimalsViewModels> lst = List(db);
                    oR.result = 1;
                    oR.data = lst;
                    oR.message = "eliminado con exito";
                }
            }
            catch (Exception exp)
            {

                oR.message = "ocurrio un error en el servidor";
            }

            return oR;
        }
        
        [HttpPost]
        public async Task<Reply> Photos([FromUri]AnimalPictureViewModel model)
        {
            Reply oR = new Reply();
            oR.result = 0;
            string root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);
            if (!Verify(model.token))
            {
                oR.message = "no autorizado";
                return oR;
            }
            //validacion de multipart
            if (!Request.Content.IsMimeMultipartContent())
            {
                oR.message = "no viene imagen";
                return oR;
            }
            await Request.Content.ReadAsMultipartAsync(provider);

            FileInfo FileinfoPicture = null;

            foreach (MultipartFileData fileData in provider.FileData)
            {
                if (fileData.Headers.ContentDisposition.Name.Replace("\\", "").Replace("\"", "").Equals("picture"))
                {
                    FileinfoPicture = new FileInfo(fileData.LocalFileName);
                }
            }

            if (FileinfoPicture != null)
            {
                using (FileStream fs = FileinfoPicture.Open(FileMode.Open, FileAccess.Read))
                {
                    byte[] b = new byte[FileinfoPicture.Length];
                    UTF8Encoding temp = new UTF8Encoding(true);
                    while (fs.Read(b, 0, b.Length) > 0)
                        try
                        {
                            using (cursomvcapiEntities db = new cursomvcapiEntities())
                            {
                                Galeria oGaleria = new Galeria();
                                oGaleria.id_identificador = model.id;
                                oGaleria.foto = b;

                                db.Galeria.Add(oGaleria);
                                db.SaveChanges();
                                oR.result = 1;
                            }

                        }
                        catch (Exception exp)
                        {

                            oR.message = "intenta mas tarde";
                        }
                }
            }

            return oR;
        }

    
        [HttpPost]
        public async Task<Reply> CargarContenido([FromUri]AnimalPictureViewModel model)
        {
            Reply oR = new Reply();
            oR.result = 0;
            string root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);
            if (!Verify(model.token))
            {
                oR.message = "no autorizado";
                return oR;
            }
            //validacion de multipart
            if (!Request.Content.IsMimeMultipartContent())
            {
                oR.message = "no viene imagen";
                return oR;
            }
            await Request.Content.ReadAsMultipartAsync(provider);

            FileInfo FileinfoPicture = null;

            foreach (MultipartFileData fileData in provider.FileData)
            {
                if (fileData.Headers.ContentDisposition.Name.Replace("\\", "").Replace("\"", "").Equals("picture"))
                {
                    FileinfoPicture = new FileInfo(fileData.LocalFileName);
                }
            }

            if (FileinfoPicture != null)
            {
                using (FileStream fs = FileinfoPicture.Open(FileMode.Open, FileAccess.Read))
                {
                    byte[] b = new byte[FileinfoPicture.Length];
                    UTF8Encoding temp = new UTF8Encoding(true);
                    while (fs.Read(b, 0, b.Length) > 0)
                        try
                        {
                            using (cursomvcapiEntities db = new cursomvcapiEntities())
                            {
                                Animal oAnimal = new Animal();
                                oAnimal.titulo = model.titulo;
                                oAnimal.subtitulo = model.subtitulo;
                                oAnimal.detalle = model.detalle;
                                oAnimal.categoria = model.categoria;
                                oAnimal.tags = model.tags;
                                oAnimal.picture = b;

                                db.Animal.Add(oAnimal);
                                db.SaveChanges();
                                oR.result = 1;

                            }

                        }
                        catch (Exception exp)
                        {

                            oR.message = "intenta mas tarde";
                        }
                }
            }

            return oR;
        }




        #region Helpers
        private bool Validate(AnimalViewModel model)
        {
            if (model.titulo == null||model.titulo=="")
            {
                error = "el titulo es obligatorio";
                return false;
            }
            if (model.categoria == null)
            {
                error = "la categoria es obligatoria";
                return false;
            }
            if (model.tags == ""||model.tags==null)
            {
                error = "los tags son obligatorios";
                return false;
            }
            if (model.titulo == null&&model.categoria==null&&model.tags==null)
            {
                error = "todos los campos son obligatorios";
                return false;
            }
            return true;

        }
        private List<ListAnimalsViewModels> List(cursomvcapiEntities db)
        {
            /*
               List<ListAnimalsViewModels> lst = (from d in db.Animal
                                                  select new ListAnimalsViewModels
                                                  {
                                                      id = d.id,
                                                      titulo = d.titulo,
                                                      subtitulo = d.subtitulo,
                                                      detalle = d.detalle,
                                                      categoria = d.categoria,
                                                      tags = d.tags,
                                                      picture = d.picture

                                                  }).ToList();

            */

            List<ListAnimalsViewModels> lst = (from a in db.Animal
                                               join c in db.Galeria
                                               on a.id equals c.id_identificador
                                               select new ListAnimalsViewModels
                                               {
                                                   id = a.id,
                                                   titulo = a.titulo,
                                                   subtitulo = a.subtitulo,
                                                   detalle = a.detalle,
                                                   categoria = a.categoria,
                                                   tags = a.tags,
                                                   picture = a.picture,
                                                   foto=c.foto
        
                                               }).ToList();
            

            return lst;

        }
       




        #endregion

    }
}
