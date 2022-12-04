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
    public async Task<List<Issue>> GetAllIssue()
    {
        var repository = new IssueRepository(DatabaseContext.Instance);

        return await repository.GetIssues();
    }
    
    [HttpPost(Name = "addIssue")]
    public async void AddIssue(IssueDto issueDto)
    {
        var issueRepository = new IssueRepository(DatabaseContext.Instance);
        var tagsRepository = new TagsRepository(DatabaseContext.Instance);
        var UserRepository = new UserRepository(DatabaseContext.Instance);
        
        
        var doka = await tagsRepository.GetTags();

        var tagDtos = issueDto.Tags.TagNameDtos;
        var tags = (from tagDto in tagDtos from tag in doka where tag.Name == tagDto.Name select tag).ToList();



        var newIssue = new Issue()
        {
            Title = issueDto.Title,
            Date = DateTime.Now,
            IsSolved = false,
            Text = issueDto.Text,
            Tags = tags.ToArray(),
            UserDetail = await UserRepository.GetUserDetail(issueDto.Username)
        };
    }
}