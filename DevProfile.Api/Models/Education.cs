using System;

public record Education(
    Guid Id,
    string Degree,
    string School,
    string Field,
    int Year,
    string? Gpa
);
