using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace cursomvcapi.Models.WS
{
    public class ListAnimalsViewModels
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public string subtitulo { get; set; }
        public string detalle { get; set; }
        public int? categoria { get; set; }
        public string tags { get; set; }

        public byte[] picture { get; set; }
        public byte[] foto { get; set; }
 
    }
}