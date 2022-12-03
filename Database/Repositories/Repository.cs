using Database.Context;
using Database.Entities;

namespace Database.Repositories;

public class Repository
{
    private DatabaseContext _context;

    public Repository(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<int> AddUser(UserCredential user)
    {
        _context.Set<UserCredential>().Add(user);
        var change = await _context.SaveChangesAsync();

        if (change > 0)
        {
            return change;
        }
        return 0;
    }
}