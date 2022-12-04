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
            IssueId = issue.IssueId,
            TagId = tag.Id
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
        var select = _context.IssueTagRelations.Where(p => p.IssueId == issueId);
        return new List<IssueTagRelation>(select);
    }

    public List<IssueTagRelation> GetIssuesByTag(Tag tag)
    {
        var select = _context.IssueTagRelations.Where(p => p.TagId == tag.Id);
        return new List<IssueTagRelation>(select);
    }
}