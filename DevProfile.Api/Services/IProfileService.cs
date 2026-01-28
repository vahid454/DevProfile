using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface IProfileService
{
    Task<IEnumerable<Profile>> GetAllAsync();
    Task<Profile?> GetByIdAsync(Guid id);
    Task<Profile> CreateAsync(string firstName, string lastName, string email);
}
