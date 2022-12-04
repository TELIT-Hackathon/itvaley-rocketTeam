using Microsoft.AspNetCore.Mvc;
using Server.Dtos;

namespace Server.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class UserController: ControllerBase
{
    [HttpPost(Name = "register")]
    public Task<RegisterDto> Register(UserDto userDto)
    {
        
    }
}