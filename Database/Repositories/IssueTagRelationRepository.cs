using Database.Context;
using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Database.Repositories;

public class IssueTagRelationRepository
{
    private DatabaseContext _context;
    
    
    public IssueTagRelationRepository(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<int> AddRelation(Issue issue, Tag tag)
    {
        _context.Set<IssueTagRelation>().Add(new IssueTagRelation()
        {
            Issue = issue,
            Tag = tag
        });
        var change = await _context.SaveChangesAsync();

        if (change > 0)
        {
            return change;
        }
        return 0;
    }

    public List<IssueTagRelation> GetTags(int issueId)
    {
        var select = _context.IssueTagRelations.Where(p => p.Issue.IssueId == issueId);
        return new List<IssueTagRelation>(select);
    }
}