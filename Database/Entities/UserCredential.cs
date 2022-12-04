namespace Database.Entities;

public class UserCredential
{
    public int Id { get; set; }
    public string? Username { get; set; } = null!;
    public string? Password { get; set; } = null!;
    public UserDetail UserDetail { get; set; } = null!;
}