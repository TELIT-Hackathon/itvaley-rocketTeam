using Database.Entities;

namespace Server.Dtos;

public class IssueDto
{
    public string Title { get; set; }
    public string Text { get; set; }
    public TagNamesDto Tags { get; set; }
    public string Username { get; set; }
}

public class TagNameDto
{
    public string Name { get; set; }
}

public class TagNamesDto
{
    public List<TagNameDto> TagNameDtos { get; set; }
}