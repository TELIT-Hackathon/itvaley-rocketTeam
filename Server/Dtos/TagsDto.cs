namespace Server.Dtos;

public class TagsDto
{
    public List<TagDto> Tags { get; set; } = null!;
}

public class TagDto
{
    public string Name { get; set; } = null!;
    public int Count { get; set; }
}

public class NewTagDto
{
    public string Name { get; set; } = null!;
}