using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class InMemoryExperienceRepository : IExperienceRepository
{
    private readonly ConcurrentDictionary<Guid, Experience> _store = new();

    public InMemoryExperienceRepository()
    {
        // Seed data from resume - ordered by date (recent first)
        var exp1 = new Experience(
            Guid.NewGuid(),
            "Software Developer",
            "Hansen Tech",
            new DateTime(2023, 6, 1),
            null,
            "Full Stack development with C#, Angular, and AWS",
            new List<string> { "Developed scalable REST APIs with .NET Core", "Built responsive Angular UIs with Tailwind CSS", "Managed AWS cloud infrastructure and deployment", "Implemented microservices architecture", "Led code reviews and mentored junior developers" }
        );

        var exp2 = new Experience(
            Guid.NewGuid(),
            "Associate Engineer",
            "NCS Group",
            new DateTime(2022, 1, 1),
            new DateTime(2023, 5, 31),
            "Enterprise application development and cloud migration",
            new List<string> { "Led backend team for microservices development", "Implemented CI/CD pipelines with GitHub Actions", "Optimized database performance and query execution", "Managed Azure cloud resources and deployments" }
        );

        var exp3 = new Experience(
            Guid.NewGuid(),
            "Software Engineer",
            "Capgemini",
            new DateTime(2021, 3, 1),
            new DateTime(2021, 12, 31),
            "Windows and web application development",
            new List<string> { "Developed enterprise WPF applications with C#", "Created RESTful APIs and SQL Server databases", "Participated in agile sprints and code reviews" }
        );

        var exp4 = new Experience(
            Guid.NewGuid(),
            "Intern - Software Developer",
            "Smart Home Automation Project",
            new DateTime(2020, 6, 1),
            new DateTime(2020, 12, 31),
            "IoT and Home Automation System Development",
            new List<string> { "Developed home automation system with Python and MQTT protocol", "Integrated Raspberry Pi with various IoT sensors", "Built real-time monitoring dashboard for smart devices", "Implemented automated controls for lighting and appliances", "Learned hardware-software integration and system design" }
        );

        _store[exp1.Id] = exp1;
        _store[exp2.Id] = exp2;
        _store[exp3.Id] = exp3;
        _store[exp4.Id] = exp4;
    }

    public Task<IEnumerable<Experience>> GetAllAsync() =>
        Task.FromResult(_store.Values.OrderByDescending(x => x.StartDate).AsEnumerable());

    public Task<Experience?> GetByIdAsync(Guid id)
    {
        _store.TryGetValue(id, out var exp);
        return Task.FromResult(exp);
    }

    public Task AddAsync(Experience exp)
    {
        _store[exp.Id] = exp;
        return Task.CompletedTask;
    }
}

public class InMemoryEducationRepository : IEducationRepository
{
    private readonly ConcurrentDictionary<Guid, Education> _store = new();

    public InMemoryEducationRepository()
    {
        var edu = new Education(
            Guid.NewGuid(),
            "B.E. in Computer Science Engineering",
            "Govt. Engineering College Ujjain",
            "Computer Science",
            2020,
            "7.1/10"
        );
        _store[edu.Id] = edu;
    }

    public Task<IEnumerable<Education>> GetAllAsync() =>
        Task.FromResult(_store.Values.AsEnumerable());

    public Task<Education?> GetByIdAsync(Guid id)
    {
        _store.TryGetValue(id, out var edu);
        return Task.FromResult(edu);
    }

    public Task AddAsync(Education edu)
    {
        _store[edu.Id] = edu;
        return Task.CompletedTask;
    }
}

public class InMemorySkillRepository : ISkillRepository
{
    private readonly ConcurrentDictionary<Guid, Skill> _store = new();

    public InMemorySkillRepository()
    {
        var skills = new[]
        {
            new Skill(Guid.NewGuid(), "Languages", new List<string> { "C#", "JavaScript", "TypeScript", "Python", "SQL", "C++" }),
            new Skill(Guid.NewGuid(), "Frameworks", new List<string> { "Angular", ".NET Core", "ASP.NET", "Entity Framework", "React" }),
            new Skill(Guid.NewGuid(), "Databases", new List<string> { "SQL Server", "PostgreSQL", "MongoDB", "Redis" }),
            new Skill(Guid.NewGuid(), "Cloud", new List<string> { "Azure", "AWS", "Google Cloud" }),
            new Skill(Guid.NewGuid(), "DevOps", new List<string> { "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Azure DevOps" }),
            new Skill(Guid.NewGuid(), "Architecture", new List<string> { "Microservices", "REST APIs", "SOLID", "Design Patterns" }),
            new Skill(Guid.NewGuid(), "AI/ML", new List<string> { "LLMs", "OpenAI", "Prompt Engineering", "AI Agents" })
        };

        foreach (var skill in skills)
            _store[skill.Id] = skill;
    }

    public Task<IEnumerable<Skill>> GetAllAsync() =>
        Task.FromResult(_store.Values.AsEnumerable());

    public Task<Skill?> GetByIdAsync(Guid id)
    {
        _store.TryGetValue(id, out var skill);
        return Task.FromResult(skill);
    }

    public Task AddAsync(Skill skill)
    {
        _store[skill.Id] = skill;
        return Task.CompletedTask;
    }
}

public class InMemoryProjectRepository : IProjectRepository
{
    private readonly ConcurrentDictionary<Guid, Project> _store = new();

    public InMemoryProjectRepository()
    {
        var projects = new[]
        {
            new Project(
                Guid.NewGuid(),
                "DevProfile",
                "Interactive resume & portfolio site built with C# and Angular",
                "https://github.com/vahid454/devprofile",
                new DateTime(2026, 1, 27),
                new List<string> { "C#", "Angular", "Tailwind", ".NET" },
                null
            ),
            new Project(
                Guid.NewGuid(),
                "Meeting AI",
                "AI-powered meeting transcription and summarization",
                "https://github.com/vahid454/meeting-ai",
                new DateTime(2025, 5, 10),
                new List<string> { "TypeScript", "React", "OpenAI" },
                null
            ),
            new Project(
                Guid.NewGuid(),
                "Smart Plaza",
                "E-commerce platform with Flutter frontend",
                "https://github.com/vahid454/smart_plaza",
                new DateTime(2025, 5, 18),
                new List<string> { "Dart", "Flutter", "Firebase" },
                null
            ),
            new Project(
                Guid.NewGuid(),
                "Agency Site",
                "Modern web agency landing page",
                "https://github.com/vahid454/ageny-site",
                new DateTime(2025, 8, 7),
                new List<string> { "TypeScript", "React", "Tailwind" },
                null
            )
            ,
            new Project(
                Guid.NewGuid(),
                "UecNotes",
                "Notes and resources for university courses",
                "https://github.com/vahid454/UecNotes",
                new DateTime(2024, 8, 1),
                new List<string> { "TypeScript", "Angular", "Firebase" },
                null
            ),
            new Project(
                Guid.NewGuid(),
                "Smart Home Automation",
                "Home automation system with IoT integrations",
                "https://github.com/vahid454/Smart-Home-Automation",
                new DateTime(2023, 11, 12),
                new List<string> { "Python", "MQTT", "Raspberry Pi" },
                null
            ),
            new Project(
                Guid.NewGuid(),
                "Billing With Python",
                "Simple billing and invoicing application implemented in Python",
                "https://github.com/vahid454/billing-with-python",
                new DateTime(2022, 6, 5),
                new List<string> { "Python", "SQLite" },
                null
            )
        };

        foreach (var proj in projects)
            _store[proj.Id] = proj;
    }

    public Task<IEnumerable<Project>> GetAllAsync() =>
        Task.FromResult(_store.Values.OrderByDescending(p => p.CreatedAt).AsEnumerable());

    public Task<Project?> GetByIdAsync(Guid id)
    {
        _store.TryGetValue(id, out var proj);
        return Task.FromResult(proj);
    }

    public Task AddAsync(Project project)
    {
        _store[project.Id] = project;
        return Task.CompletedTask;
    }
}
