namespace Database.Entities;

public class IssueTagRelation
{
    public int Id { get; set; }
    public Issue Issue { get; set; } = null!;
    public Tag Tag { get; set; } = null!;
}