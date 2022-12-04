using Database.Context;

namespace Database.Repositories;

public class UserRepository
{
    private DatabaseContext _context;

    public UserRepository(DatabaseContext context)
    {
        _context = context;
    }
    
    
}