using Database.Context;
using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Database.Repositories;

public class UserRepository
{
    private DatabaseContext _context;

    public UserRepository(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<int> AddUserCredential(UserCredential userCredential)
    {
        _context.Set<UserCredential>().Add(userCredential);
        var change = await _context.SaveChangesAsync();

        return change > 0 ? change : 0;
    }

    public async Task<int> AddUserDetail(UserDetail userDetail)
    {
        _context.Set<UserDetail>().Add(userDetail);
        var change = await _context.SaveChangesAsync();

        return change > 0 ? change : 0;
    }

    public async Task<UserCredential> CheckCredential(string username)
    {
        return await _context.UserCredentials.FirstOrDefaultAsync(u => u.Username == username);
    }

    public async Task<UserDetail> GetUserDetail(string username)
    {
        return await _context.UserDetails.FirstOrDefaultAsync(ud => ud.Username == username);
    }
}