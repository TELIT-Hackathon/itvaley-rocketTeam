using Database.Entities;
using Microsoft.EntityFrameworkCore;


namespace Database.Context;

public class DatabaseContext : DbContext
{
    public DbSet<UserCredential> UserCredentials { get; set; } = null!;
    public DbSet<UserDetail> UserDetails { get; set; } = null!;
    public DbSet<Issue> Issues { get; set; } = null!;
    public DbSet<Tag> Tags { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySQL("server=10.133.138.76;port=3306;database=rocket;uid=rocket;pwd=1234");
    }
}