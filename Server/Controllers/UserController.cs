using Microsoft.AspNetCore.Mvc;
using Server.Dtos;
using Server.Mappers;

namespace Server.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class UserController: ControllerBase
{
    [HttpPost(Name = "register")]
    public async Task<UserDto> Register(RegisterDto registerDto)
    {
        return await RegisterMapper.Register(registerDto);
    }
    
    [HttpPost(Name = "login")]
    public async Task<UserDto?> Login (LoginDto loginDto)
    {
        return await RegisterMapper.Login(loginDto);
    }

    [HttpGet(Name = "user_info")]
    public async Task<UserInfoDto> GetUserInfo(string username)
    {
        return await UserInfoMapper.GetUserInfo(username);
    }
}