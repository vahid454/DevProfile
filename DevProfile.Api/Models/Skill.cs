using System;

public record Skill(
    Guid Id,
    string Category,
    List<string> Technologies
);
