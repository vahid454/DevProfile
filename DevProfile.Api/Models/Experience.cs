using System;

public record Experience(
    Guid Id,
    string Title,
    string Company,
    DateTime StartDate,
    DateTime? EndDate,
    string Description,
    List<string> Responsibilities
);
