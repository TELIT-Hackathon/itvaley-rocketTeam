using Database.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Database.Context;

public class DatabaseContext : DbContext
{
    public DbSet<UserCredential> UserCredentials { get; set; } = null!;
    public DbSet<UserDetail> UserDetails { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySQL("server=localhost;port=3306;database=rocket;uid=root;pwd=1234");
    }
}