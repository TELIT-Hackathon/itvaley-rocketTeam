namespace Server.Dtos;

public class UserDetailDto
{
    public int Id { get; set; }
    public string? Username { get; set; }
    public string? Email { get; set; }
    public string? Role { get; set; }
    public List<TagDto>? Tags{ get; set;}
    public int Icon { get; set; }
}