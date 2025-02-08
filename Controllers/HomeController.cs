using System.Diagnostics;
using Assignment5_Blas.Models;
using Microsoft.AspNetCore.Mvc;

namespace Assignment5_Blas.Controllers
{
    public class HomeController : Controller //This NEEDS to be called BlahController because the file you have is called Blah.
    {       // This means the HomeController inherits from the Controller class.
        public IActionResult Index() //What is returned from this method: the IActionResult class. Index is the name of the method.
        {
            return View(); //You don't have to write the cshtml because it knows you're writing for that file
        } //If you don't specify in the View part which view you're looking for, it will default to the name of the class. In this case, it'd be Index.  

        public IActionResult Calculator()
        {


            return View();
        }
    }
}
