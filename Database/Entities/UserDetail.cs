namespace Database.Entities;

public class UserDetail
{
    public int Id { get; set; }
    public string? Username { get; set; }
    public string? Email { get; set; }
    public string? Role { get; set; }
    public List<Tag>? Tags{ get; set;}
    public int Icon { get; set; }
}