using Database.Context;
using Database.Entities;
using Database.Repositories;
using Server.Dtos;

namespace Server.Mappers;

public class UserInfoMapper
{
    public static async Task<UserInfoDto> GetUserInfo(string username)
    {
        var repository = new UserRepository(DatabaseContext.Instance);

        var userDetail = await repository.GetUserDetail(username);


        var tagNameDtos = new List<TagNameDto>();
        if (userDetail.Tags == null)
            return new UserInfoDto()
            {
                Email = userDetail.Email,
                Role = userDetail.Role,
                Username = userDetail.Username,
                Tags = tagNameDtos
            };
        
        tagNameDtos.AddRange(userDetail.Tags.Select(tag => new TagNameDto() { Name = tag.Name }));

        return new UserInfoDto()
        {
            Email = userDetail.Email,
            Role = userDetail.Role,
            Username = userDetail.Username,
            Tags = tagNameDtos
        };
    }
    
    public static async Task<UserInfoWithoutTagsDto> GetUserInfoWithoutTags(string username)
    {
        var repository = new UserRepository(DatabaseContext.Instance);

        var userDetail = await repository.GetUserDetail(username);

        return new UserInfoWithoutTagsDto()
        {
            Email = userDetail.Email,
            Role = userDetail.Role,
            Username = userDetail.Username
        };
    }
}