using Database.Context;
using Database.Entities;
using Database.Repositories;
using Microsoft.AspNetCore.Mvc;
using Server.Dtos;

namespace Server.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class IssueController : ControllerBase
{
    [HttpGet(Name = "getIssues")]
    public async Task<List<DbIssueDto>> GetAllIssue()
    {
        var repository = new IssueRepository(DatabaseContext.Instance);
        var issues = await repository.GetIssues();
        var dtoIssues = new List<DbIssueDto>();

        
        
        issues.ForEach(issue =>
        {
            var tags = issue.Tags;
                var tagNameDtos = new List<TagNameDto>();
                if (tags != null)
                {
                    foreach (var tag in tags)
                    {
                        tagNameDtos.Add(new TagNameDto()
                        {
                            Name = tag.Name
                        });
                    }
                }
                
                var dbIssueDto = new DbIssueDto()
                {
                    Date = issue.Date,
                    Tags = tagNameDtos,
                    Text = issue.Text,
                    Title = issue.Text,
                    IsSolved = issue.IsSolved,
                    IssueId = issue.IssueId,
                    Username = issue.Username
                };
                dtoIssues.Add(dbIssueDto);
            });
        
        return dtoIssues;
    }
    
    [HttpPost(Name = "addIssue")]
    public async Task AddIssue(IssueDto issueDto)
    {
        var issueRepository = new IssueRepository(DatabaseContext.Instance);
        var tagsRepository = new TagsRepository(DatabaseContext.Instance);
        var userRepository = new UserRepository(DatabaseContext.Instance);
        
        
        var doka = await tagsRepository.GetTags();

        var tagDtos = issueDto.Tags;
        var tags = new List<Tag>();

        foreach (var tagDto in tagDtos)
        {
            foreach (var tag in doka)
            {
                if (tag.Name == tagDto.Name)
                {
                    tags.Add(tag);
                }
                
            }
            
        }

        var newIssue = new Issue()
        {
            Title = issueDto.Title,
            Date = DateTime.Now,
            IsSolved = false,
            Text = issueDto.Text,
            Tags = tags.ToArray(),
            Username= issueDto.Username
        };

        await issueRepository.AddIssue(newIssue);
        
    }
}