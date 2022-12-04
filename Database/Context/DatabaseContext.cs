using Database.Entities;
using Microsoft.EntityFrameworkCore;


namespace Database.Context;

public class DatabaseContext : DbContext
{
    /*private static DatabaseContext instance = null;

    private DatabaseContext()
    {
    }

    public static DatabaseContext Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new DatabaseContext();
            }
            return instance;
        }
    }
    */
    
    
    
    public DbSet<UserCredential> UserCredentials { get; set; } = null!;
    public DbSet<UserDetail> UserDetails { get; set; } = null!;
    public DbSet<Issue> Issues { get; set; } = null!;
    public DbSet<Tag> Tags { get; set; } = null!;
    public DbSet<IssueTagRelation> IssueTagRelations { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySQL("server=192.168.170.116;port=3306;database=rocket;uid=rocket;pwd=1234");
    }
}