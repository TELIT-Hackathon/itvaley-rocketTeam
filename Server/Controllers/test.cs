using Database.Context;
using Database.Entities;
using Database.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class Test: ControllerBase
{
    [HttpGet(Name = "idk")]
    public async Task<UserCredential> Get()
    {
        var user = new UserCredential()
        {
            Username = "Peter",
            Password = "heslo",
            UserDetail = new UserDetail()
            {
                Email = "afaf",
                Role = "srg",
                Username = "Peter"
            }
        };
        Repository repository = new Repository(DatabaseContext.Instance);
        await repository.AddUser(user);
        return user;
    }
}