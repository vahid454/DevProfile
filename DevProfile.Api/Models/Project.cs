using System;

public record Project(
    Guid Id,
    string Name,
    string Description,
    string Url,
    DateTime CreatedAt,
    List<string> Languages,
    string? ImageUrl
);
