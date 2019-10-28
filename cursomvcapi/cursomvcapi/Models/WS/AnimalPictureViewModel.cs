using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace cursomvcapi.Models.WS
{
    public class AnimalPictureViewModel : SecurityViewModel
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public string subtitulo { get; set; }
        public string detalle { get; set; }
        public int categoria { get; set; }
        public string tags { get; set; }
    }
}