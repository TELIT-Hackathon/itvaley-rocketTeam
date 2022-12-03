using Database.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Database.Context;

public class DatabaseContext : DbContext
{
    public DatabaseContext() { }
    
    protected readonly IConfiguration Configuration;

    public DbSet<UserCredential> UserCredentials { get; set; } = null!;
    public DbSet<UserDetail> UserDetails { get; set; } = null!;
    

    public DatabaseContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to mysql with connection string from app settings
        var connectionString = Configuration.GetConnectionString("WebApiDatabase");
        options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
    }
}