using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("[controller]")]
public class ProfileController : ControllerBase
{
    private readonly IProfileService _service;

    public ProfileController(IProfileService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IEnumerable<Profile>> Get()
    {
        return await _service.GetAllAsync();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var p = await _service.GetByIdAsync(id);
        if (p is null) return NotFound();
        return Ok(p);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] ProfileCreateDto dto)
    {
        var created = await _service.CreateAsync(dto.FirstName, dto.LastName, dto.Email);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }
}
