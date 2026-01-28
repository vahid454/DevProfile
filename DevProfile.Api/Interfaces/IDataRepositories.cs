using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface IExperienceRepository
{
    Task<IEnumerable<Experience>> GetAllAsync();
    Task<Experience?> GetByIdAsync(Guid id);
    Task AddAsync(Experience exp);
}

public interface IEducationRepository
{
    Task<IEnumerable<Education>> GetAllAsync();
    Task<Education?> GetByIdAsync(Guid id);
    Task AddAsync(Education edu);
}

public interface ISkillRepository
{
    Task<IEnumerable<Skill>> GetAllAsync();
    Task<Skill?> GetByIdAsync(Guid id);
    Task AddAsync(Skill skill);
}

public interface IProjectRepository
{
    Task<IEnumerable<Project>> GetAllAsync();
    Task<Project?> GetByIdAsync(Guid id);
    Task AddAsync(Project project);
}
