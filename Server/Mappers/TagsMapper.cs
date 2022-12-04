using Database.Context;
using Database.Repositories;
using Server.Dtos;

namespace Server.Mappers;

public static class TagsMapper
{
    public static async Task<TagsDto> MapTagsDto()
    {
        var repository = new TagsRepository(DatabaseContext.Instance);
        var tags = await repository.GetTags();
        
        var tagsDto = tags.Select(tag => new TagDto() { Count = tag.Count, Name = tag.Name }).ToList();

        return new TagsDto()
        {
            Tags = tagsDto
        };
    } 
}