namespace Server.Dtos;

public class UserInfoDto
{
    public string? Username { get; set; }
    public string? Role { get; set; }
    public string? Email { get; set; }
    public List<TagNameDto>? Tags { get; set; }
}