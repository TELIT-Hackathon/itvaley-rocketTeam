namespace Database.Entities;

public class Issue
{
    public int IssueId { get; set; }
    public string Title { get; set; } = null!;
    public DateTime Date { get; set; }
    public bool IsSolved { get; set; }
    public string Text { get; set; } = null!;
    public List<Tag>? Tags { get; set; } = null!;
    public string Username { get; set; } = null!;
}