using Database.Context;
using Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Database.Repositories;

public class TagsRepository
{
    private DatabaseContext _context;

    public TagsRepository(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<List<Tag>> GetTags()
    {
        return await _context.Tags.ToListAsync();
    }

    public async Task<Tag> GetTag(string name)
    {
        return await _context.Tags.FirstOrDefaultAsync(p => p.Name == name);
    }
    
    public async Task<Tag> GetTagById(int id)
    {
        return await _context.Tags.FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<int> AddTag(Tag tag)
    {
        _context.Set<Tag>().Add(tag);
        var change = await _context.SaveChangesAsync();

        return change > 0 ? change : 0;
    }
    
}