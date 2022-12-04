using Database.Entities;
using Server.Dtos;

namespace Server.Mappers;

public static class RegisterMapper
{
    public static RegisterDto Register(UserDto user)
    {
        var userCredential = new UserCredential()
        {
            Username = user.Username,
            
        };
    }
}