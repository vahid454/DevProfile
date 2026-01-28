using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public class ProfileService : IProfileService
{
    private readonly IProfileRepository _repo;

    public ProfileService(IProfileRepository repo)
    {
        _repo = repo;
    }

    public async Task<Profile> CreateAsync(string firstName, string lastName, string email)
    {
        var profile = new Profile(Guid.NewGuid(), firstName, lastName, email);
        await _repo.AddAsync(profile);
        return profile;
    }

    public Task<IEnumerable<Profile>> GetAllAsync() => _repo.GetAllAsync();

    public Task<Profile?> GetByIdAsync(Guid id) => _repo.GetByIdAsync(id);
}
