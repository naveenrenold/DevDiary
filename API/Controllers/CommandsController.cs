using Microsoft.AspNetCore.Mvc;
namespace DevDiary.API.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class CommandsController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            
            return Ok(new {text="successfully completed :)"});
        }
    }
}