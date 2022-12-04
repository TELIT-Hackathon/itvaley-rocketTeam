using Database.Context;
using Database.Entities;
using Database.Repositories;
using Server.Dtos;

namespace Server.Mappers;

public static class RegisterMapper
{
    public static async Task<UserDto> Register(RegisterDto register)
    {
        var repository = new UserRepository(DatabaseContext.Instance);
        
        var userDetail = new UserDetail()
        {
            Email = register.Email,
            Username = register.Username,
            Role = register.Role
        };
        
        var userCredential = new UserCredential()
        {
            Username = register.Username,
            Password = register.Password,
            UserDetail = userDetail
        };

        await repository.AddUserDetail(userDetail);
        await repository.AddUserCredential(userCredential);

        return new UserDto()
        {
            Email = register.Email,
            Token = userDetail.Id,
            Username = register.Username
        };
    }

    public static async Task<UserDto?> Login(LoginDto login)
    {
        var repository = new UserRepository(DatabaseContext.Instance);
        var userCredential = await repository.CheckCredential(login.Username!);
        var userDetail = await repository.GetUserDetail(login.Username!);
        if (login.Password == userCredential.Password)
        {
            return new UserDto()
            {
                Email = userDetail.Email,
                Token = userDetail.Id,
                Username = userCredential.Username,
                Role = userDetail.Role
            };
        }

        return null;
    }
    
}