using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface IProfileRepository
{
    Task<IEnumerable<Profile>> GetAllAsync();
    Task<Profile?> GetByIdAsync(Guid id);
    Task AddAsync(Profile profile);
}
