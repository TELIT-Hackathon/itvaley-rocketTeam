namespace Database.Entities;

public class IssueTagRelation
{
    public int Id { get; set; }
    public int IssueId { get; set; }
    public int TagId { get; set; }
}