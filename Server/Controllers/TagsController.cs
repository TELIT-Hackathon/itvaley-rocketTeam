using Database.Context;
using Database.Entities;
using Database.Repositories;
using Microsoft.AspNetCore.Mvc;
using Server.Dtos;
using Server.Mappers;

namespace Server.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class TagsController: ControllerBase
{
    [HttpGet(Name = "get")]
    public async Task<List<TagDto>> Get()
    {
        return await TagsMapper.MapTagsDto();
    }

    [HttpPost(Name = "add")]
    public async Task<int> Add(NewTagDto newTagDto)
    {
        var repository = new TagsRepository(DatabaseContext.Instance);

        return await repository.AddTag(new Tag()
        {
            Count = 0,
            Name = newTagDto.Name
        });
    }
}