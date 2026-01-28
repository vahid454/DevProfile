using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class InMemoryProfileRepository : IProfileRepository
{
    private readonly ConcurrentDictionary<Guid, Profile> _store = new();

    public InMemoryProfileRepository()
    {
        // seed sample
        var sample = new Profile(Guid.NewGuid(), "Vahid", "Mansuri", "vahidmansuri702@gmail.com");
        _store[sample.Id] = sample;
    }

    public Task AddAsync(Profile profile)
    {
        _store[profile.Id] = profile;
        return Task.CompletedTask;
    }

    public Task<IEnumerable<Profile>> GetAllAsync()
    {
        return Task.FromResult(_store.Values.AsEnumerable());
    }

    public Task<Profile?> GetByIdAsync(Guid id)
    {
        _store.TryGetValue(id, out var profile);
        return Task.FromResult(profile);
    }
}
