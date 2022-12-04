using Database.Context;
using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Database.Repositories;

public class IssueRepository
{
    private DatabaseContext _context;
    
    
    public IssueRepository(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<int> AddIssue(Issue issue)
    {
        _context.Set<Issue>().Add(issue);
        var change = await _context.SaveChangesAsync();

        if (change > 0)
        {
            return change;
        }
        return 0;
    }
    
    
    public async Task<List<Issue>> GetIssues()
    {
        return  _context.Issues.ToList();
    }
    
}