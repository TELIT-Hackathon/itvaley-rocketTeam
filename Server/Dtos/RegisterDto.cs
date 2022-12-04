namespace Server.Dtos;

public class RegisterDto
{
    public string? Email { get; set; }
    public int Token { get; set; }
    public string? Username { get; set; }
}