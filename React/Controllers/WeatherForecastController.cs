using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        [Route("narocnik")]
        public IEnumerable<Zivali> narocnik()
        {
            List<Zivali> zivali = new List<Zivali>();

            for(int i=0;i<100;i++)
            {
                string vrsta = "macka";
                if (i%2==0)
                {
                    vrsta = "pes";
                }
                string velikost = "Majhna";
                if(i>27)
                {
                    velikost = "Srednja";
                }
                if(i>62)
                {
                    velikost = "Velika";
                }

                zivali.Add(new Zivali
                {
                    Ime = "Klemen" + i,
                    Starost = 9 + i,
                    Velikost = velikost,
                    Vrsta = vrsta,
                });
            }
  
            //Macka macka = new Macka();
            //Macka macka1 = new Macka();
            //Macka macka2 = new Macka();
            //Pes pes = new Pes();
            //Pes pes1 = new Pes();
            //Pes pes2 = new Pes("Janez");
            

            //pes.Ime = "Fido";
            //pes.Velikost = "Srednja";
            //pes.Pasma = "Haski";
            //pes.Starost = 4;
            //pes.Št_Nog = 4;
       

            //macka.Barva = "Siva";
            //macka.Ime = "Miki";
            //macka.Velikost = "Mini";
            //macka.Št_Nog = 4; 
            //macka.Starost = 6;
           

            //macka1.Ime = "Seba";
            //macka1.Velikost = "Like Garfield";
            //macka1.Barva = "Multicolor";
            //macka1.Starost = 1;
            //macka1.Št_Nog = 4;
           

            //macka2.Ime = "Muri";
            //macka2.Velikost = "Velika";
            //macka2.Barva = "Bela";
            //macka2.Starost = 4;
            //macka2.Št_Nog = 4;
            
            
            //pes1.Ime = "Reks";
            //pes1.Starost = 12;
            //pes1.Velikost = "Srednja";
            //pes1.Št_Nog = 8;
            //pes1.Pasma = "Nemški ovčar";

            //List<Zivali>[] tabela = { /*macka, macka1, pes, pes1, macka2,pes2, */ zivali};
            
            
            return zivali;
        }
    }

    public class Macka : Zivali
    {
        public Macka()
        {
            Vrsta = "macka";
        }
        public Macka(string ime):this()
        {
            Ime = ime;
        }
        public string Barva { get; set; }

        public int Št_Nog { get; set; }

    }
    public class Pes : Zivali
    {
        public Pes()
        {
            Vrsta = "pes";
        }
        public Pes(string ime) : this()
        {
            Ime = ime;
        }
        public string Pasma { get; set; }
        public int Št_Nog { get; set; }

    }

    public class Zivali
    {
        public string Ime { get; set; }
        public int Starost { get; set; }
        public string Velikost { get; set; }
        public string Vrsta{ get; set; }

    }
}
