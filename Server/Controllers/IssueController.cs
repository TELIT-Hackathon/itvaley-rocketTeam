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
                var tags = issue.Tags.Select(issueTag => new TagDto() {Count = issueTag.Count, Name = issueTag.Name}).ToList();
                var userTags = issue.UserDetail?.Tags!.Select(issueTag => new TagDto() {Count = issueTag.Count, Name = issueTag.Name}).ToList();
                var userDetail = new UserDetailDto()
                {
                    Email = issue.UserDetail?.Email,
                    Icon = issue.UserDetail.Icon,
                    Id = issue.UserDetail.Id,
                    Role = issue.UserDetail.Role,
                    Tags = userTags,
                    Username = issue.UserDetail.Username
                };
                var dbIssueDto = new DbIssueDto()
                {
                    Date = issue.Date,
                    Tags = tags,
                    Text = issue.Text,
                    Title = issue.Text,
                    IsSolved = issue.IsSolved,
                    IssueId = issue.IssueId,
                    UserDetail = userDetail
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

        var tagDtos = issueDto.Tags.TagNameDtos;
        var tags = (from tagDto in tagDtos from tag in doka where tag.Name == tagDto.Name select tag).ToList();



        var newIssue = new Issue()
        {
            Title = issueDto.Title,
            Date = DateTime.Now,
            IsSolved = false,
            Text = issueDto.Text,
            //Tags = tags.ToArray(),
            UserDetail = await userRepository.GetUserDetail(issueDto.Username)
        };

        await issueRepository.AddIssue(newIssue);
    }
}