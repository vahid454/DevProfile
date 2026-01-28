using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("[controller]")]
public class ExperienceController : ControllerBase
{
    private readonly IExperienceRepository _repo;

    public ExperienceController(IExperienceRepository repo) => _repo = repo;

    [HttpGet]
    public async Task<IEnumerable<Experience>> GetAll() => await _repo.GetAllAsync();

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var exp = await _repo.GetByIdAsync(id);
        if (exp is null) return NotFound();
        return Ok(exp);
    }
}

[ApiController]
[Route("[controller]")]
public class EducationController : ControllerBase
{
    private readonly IEducationRepository _repo;

    public EducationController(IEducationRepository repo) => _repo = repo;

    [HttpGet]
    public async Task<IEnumerable<Education>> GetAll() => await _repo.GetAllAsync();

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var edu = await _repo.GetByIdAsync(id);
        if (edu is null) return NotFound();
        return Ok(edu);
    }
}

[ApiController]
[Route("[controller]")]
public class SkillsController : ControllerBase
{
    private readonly ISkillRepository _repo;

    public SkillsController(ISkillRepository repo) => _repo = repo;

    [HttpGet]
    public async Task<IEnumerable<Skill>> GetAll() => await _repo.GetAllAsync();

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var skill = await _repo.GetByIdAsync(id);
        if (skill is null) return NotFound();
        return Ok(skill);
    }
}

[ApiController]
[Route("[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectRepository _repo;

    public ProjectsController(IProjectRepository repo) => _repo = repo;

    [HttpGet]
    public async Task<IEnumerable<Project>> GetAll() => await _repo.GetAllAsync();

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var proj = await _repo.GetByIdAsync(id);
        if (proj is null) return NotFound();
        return Ok(proj);
    }
}
