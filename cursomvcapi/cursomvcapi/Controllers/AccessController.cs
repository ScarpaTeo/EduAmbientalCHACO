using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using cursomvcapi.Models;
using cursomvcapi.Models.WS;

namespace cursomvcapi.Controllers
{
    public class AccessController : BaseController
    {
        [HttpGet]
        public Reply ADMusers([FromBody] AccessViewModel model)
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
                    List<ListAdminUserViewModel> lst = List(db);
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
        public Reply Login([FromBody] AccessViewModel model)
        {
            Reply oR = new Reply();
            oR.result = 0;
            try
            {
                using (cursomvcapiEntities db = new cursomvcapiEntities())
                {
                    var lst = db.User.Where(d => d.email == model.email && d.password == model.password && d.idStatus == 1);
                    if (lst.Count() > 0)
                    {
                        oR.result = 1;
                        oR.data = Guid.NewGuid().ToString();

                        User oUser = lst.First();
                        oUser.token =(string)oR.data;
                        db.Entry(oUser).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                    }
                    else
                    {
                        oR.message = "Datos erroneos";
                    }
                }
            }
            catch (Exception ex)
            {

                
                oR.message = "a ocurrido un error";
            }
            return oR;
        }

        [HttpPost]
        public Reply Register([FromBody] AccesNewUserModel model)
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
                    var lst = from a in db.User
                                       where a.token.Contains(model.token)
                                       where a.rol == 1
                                       select a;
                    if (lst.Count()>0)
                    {

                        User NewUser = new User();
                        NewUser.nombre = model.nombre;
                        NewUser.email = model.email;
                        NewUser.password = model.password;
                        NewUser.idStatus = 1;
                        NewUser.rol = 2;

                        db.User.Add(NewUser);
                        db.SaveChanges();
                        oR.result = 1;
                        oR.message = "usuario registrado";

                    }
                    else
                    {
                        oR.result = 0;
                        oR.message = "no tienes el permiso para registrar personas";
                    }



               
                }
            }
            catch (Exception ex)
            {


                oR.message = "a ocurrido un error";
            }
            return oR;
        }

        [HttpPost]
        public Reply Eliminar([FromBody] DeleteViewAccesModel model)
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
                    var lst = from a in db.User
                              where a.token.Contains(model.token)
                              where a.rol == 1
                              select a;
                    if (lst.Count() > 0)
                    {

                        var delete = (from a in db.User
                                      where a.id == model.id
                                      select a).FirstOrDefault();
                        db.User.Remove(delete);
                        db.SaveChanges();
                        oR.result = 1;
                        oR.message = "usuario eliminado";

                    }
                    else
                    {
                        oR.result = 0;
                        oR.message = "no tienes el permiso para eliminar personas";
                    }




                }
            }
            catch (Exception ex)
            {


                oR.message = "a ocurrido un error";
            }
            return oR;
        }
        #region
        private bool Validate(AccesNewUserModel model)
        {
            if (model.nombre == null || model.nombre == "")
            {
                error = "el nombre es obligatorio";
                return false;
            }
            if (model.email == null||model.email=="")
            {
                error = "el email es obligatorio";
                return false;
            }
            if (model.password == "" || model.password == null)
            {
                error = "el password es obligatorio";
                return false;
            }
            if (model.nombre == null && model.email == null && model.password == null)
            {
                error = "todos los campos son obligatorios";
                return false;
            }
            return true;

        }
        private List<ListAdminUserViewModel> List(cursomvcapiEntities db)
        {
            List<ListAdminUserViewModel> lst = (from d in db.User
                                               select new ListAdminUserViewModel
                                               {
                                                   id = d.id,
                                                   nombre = d.nombre,
                                                   email = d.email,
                                                   rol = d.rol
                                               }).ToList();

            return lst;
        }
        #endregion
    }
}
