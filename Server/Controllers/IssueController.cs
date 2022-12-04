using System.Globalization;
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
        var relationRepository = new IssueTagRelationRepository(DatabaseContext.Instance);
        var tagsRepository = new TagsRepository(DatabaseContext.Instance);
        var issues = await repository.GetIssues();
        var dtoIssues = new List<DbIssueDto>();

        
        
        issues.ForEach(issue =>
        {
            var tagRelations = relationRepository.GetTags(issue.IssueId);
                var tagNameDtos = new List<TagNameDto>();
                if (tagRelations != null)
                {
                    foreach (var tagRelation in tagRelations)
                    {
                        tagNameDtos.Add(new TagNameDto()
                        {
                            Name = tagsRepository.GetTagById(tagRelation.TagId).Result.Name
                        });
                    }
                }
            
                var dbIssueDto = new DbIssueDto()
                {
                    Date = issue.Date,
                    Tags = tagNameDtos,
                    Text = issue.Text,
                    Title = issue.Title,
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
        var issueTagRelationRepository = new IssueTagRelationRepository(DatabaseContext.Instance);
        //var userRepository = new UserRepository(DatabaseContext.Instance);
        
        
        //var doka = await tagsRepository.GetTags();
        
        var newIssue = new Issue()
        {
            Title = issueDto.Title,
            Date = DateTime.Now.Date,
            IsSolved = false,
            Text = issueDto.Text,
            Username= issueDto.Username
        };

        await issueRepository.AddIssue(newIssue);
        
        var tagDtos = issueDto.Tags;
        foreach (var tagDto in tagDtos)
        {
            issueTagRelationRepository.AddRelation(newIssue, await tagsRepository.GetTag(tagDto.Name));
        }
        
    }
    
    [HttpGet(Name = "getIssuesByIssueId")]
    public async Task<List<DbIssueDto>> GetAllIssueByIssueId(int issueId)
    {
        var repository = new IssueRepository(DatabaseContext.Instance);
        var relationRepository = new IssueTagRelationRepository(DatabaseContext.Instance);
        var tagsRepository = new TagsRepository(DatabaseContext.Instance);
        var issues = await repository.GetIssues();
        var dtoIssues = new List<DbIssueDto>();
        
        issues.ForEach(issue =>
        {
            var tagRelations = relationRepository.GetTags(issue.IssueId);
            var tagNameDtos = new List<TagNameDto>();
            if (tagRelations != null)
            {
                foreach (var tagRelation in tagRelations)
                {
                    tagNameDtos.Add(new TagNameDto()
                    {
                        Name = tagsRepository.GetTagById(tagRelation.TagId).Result.Name
                    });
                }
            }
                
            var dbIssueDto = new DbIssueDto()
            {
                Date = issue.Date,
                Tags = tagNameDtos,
                Text = issue.Text,
                Title = issue.Title,
                IsSolved = issue.IsSolved,
                IssueId = issue.IssueId,
                Username = issue.Username
            };
            dtoIssues.Add(dbIssueDto);
        });

        var issuesByIssueId = new List<DbIssueDto>();
        foreach (var dbIssueDto in dtoIssues)
        {
            if (dbIssueDto.IssueId == issueId)
            {
                issuesByIssueId.Add(dbIssueDto) ;
            }
        }
        
        
        return issuesByIssueId ;
    }
    
    [HttpGet(Name = "getIssuesByTags")]
    public async Task<List<Issue>> GetAllIssueByTags()
    {
       
        return null;
    }
    
    [HttpGet(Name = "getIssuesByName")]
    public async Task<List<DbIssueDto>> GetAllIssueByName(string issueName)
    {
        var repository = new IssueRepository(DatabaseContext.Instance);
        var relationRepository = new IssueTagRelationRepository(DatabaseContext.Instance);
        var tagsRepository = new TagsRepository(DatabaseContext.Instance);
        var issues = await repository.GetIssues();
        var dtoIssues = new List<DbIssueDto>();
        
        issues.ForEach(issue =>
        {
            var tagRelations = relationRepository.GetTags(issue.IssueId);
            var tagNameDtos = new List<TagNameDto>();
            if (tagRelations != null)
            {
                foreach (var tagRelation in tagRelations)
                {
                    tagNameDtos.Add(new TagNameDto()
                    {
                        Name = tagsRepository.GetTagById(tagRelation.TagId).Result.Name
                    });
                }
            }
                
            var dbIssueDto = new DbIssueDto()
            {
                Date = issue.Date,
                Tags = tagNameDtos,
                Text = issue.Text,
                Title = issue.Title,
                IsSolved = issue.IsSolved,
                IssueId = issue.IssueId,
                Username = issue.Username
            };
            dtoIssues.Add(dbIssueDto);
        });

        var issuesByName = new List<DbIssueDto>();
        foreach (var dbIssueDto in dtoIssues)
        {
            if (dbIssueDto.Title == issueName)
            {
                issuesByName.Add(dbIssueDto) ;
            }
        }
        
        
        return issuesByName ;
    }
    
}