# Configuration Guide - DevProfile

## How to Add New Experience

### Location: Backend Data
**File:** `DevProfile.Api/Repositories/InMemoryDataRepositories.cs`

### Steps:
1. Open the file and find the `InMemoryExperienceRepository` class
2. Locate the constructor where other experiences are defined
3. Add your new experience following this pattern:

```csharp
var exp5 = new Experience(
    Guid.NewGuid(),
    "Your Job Title",
    "Company Name",
    new DateTime(2024, 1, 1),  // Start date
    new DateTime(2024, 12, 31), // End date (null if ongoing)
    "Brief description of your role",
    new List<string> { 
        "Achievement 1",
        "Achievement 2",
        "Achievement 3",
        "Achievement 4",
        "Achievement 5"
    }
);

_store[exp5.Id] = exp5;  // Don't forget to add to store!
```

### Example - Current Internship:
```csharp
var exp4 = new Experience(
    Guid.NewGuid(),
    "Intern - Software Developer",
    "Smart Home Automation Project",
    new DateTime(2020, 6, 1),
    new DateTime(2020, 12, 31),
    "IoT and Home Automation System Development",
    new List<string> { 
        "Developed home automation system with Python and MQTT protocol",
        "Integrated Raspberry Pi with various IoT sensors",
        "Built real-time monitoring dashboard for smart devices",
        "Implemented automated controls for lighting and appliances",
        "Learned hardware-software integration and system design"
    }
);
_store[exp4.Id] = exp4;
```

---

## How to Add New Skills

### Location: Backend Data
**File:** `DevProfile.Api/Repositories/InMemoryDataRepositories.cs`

### Find: InMemorySkillRepository Class

### Steps:
1. Open the file and find the `InMemorySkillRepository` class
2. Locate the constructor
3. Add your new skill category:

```csharp
var skill = new Skill(
    Guid.NewGuid(),
    "Category Name",  // e.g., "Mobile Development", "DevOps", etc.
    new List<string> { 
        "Technology 1",
        "Technology 2",
        "Technology 3",
        "Technology 4"
    }
);

_store[skill.Id] = skill;
```

### Example - Adding Mobile Development:
```csharp
var mobileSkill = new Skill(
    Guid.NewGuid(),
    "Mobile Development",
    new List<string> { 
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin"
    }
);
_store[mobileSkill.Id] = mobileSkill;
```

---

## How to Add New Project

### Location: Backend Data
**File:** `DevProfile.Api/Repositories/InMemoryDataRepositories.cs`

### Find: InMemoryProjectRepository Class

### Steps:
```csharp
var project = new Project(
    Guid.NewGuid(),
    "Project Name",
    "Short description of the project",
    "https://github.com/username/repo",  // GitHub URL
    new DateTime(2024, 1, 1),  // Creation date
    new List<string> { "Technology 1", "Technology 2", "Technology 3" },
    null  // imageUrl (optional, set to null or provide URL)
);

_store[project.Id] = project;
```

---

## Backend Structure

### Models (define the data structure):
- `Experience.cs` - Work experience data
- `Skill.cs` - Technology skills
- `Project.cs` - Project portfolio
- `Education.cs` - Educational background
- `Profile.cs` - User profile information

### Repositories (store the data):
- `InMemoryDataRepositories.cs` - Contains all repository classes

### Controllers (expose via API):
- `/api/experience` - GET all experiences
- `/api/education` - GET all education
- `/api/skills` - GET all skills
- `/api/projects` - GET all projects
- `/api/profile` - GET profile information

---

## Frontend Integration

The frontend automatically fetches data from the API endpoints:

**Service File:** `devprofile-frontend/src/app/services/portfolio.service.ts`

```typescript
export class PortfolioService {
  private apiUrl = '/api';  // Uses relative URL (proxied through nginx)

  getExperience(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/experience`);
  }

  getEducation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/education`);
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/skills`);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }
}
```

**No frontend changes needed!** Just update the backend, rebuild, and the UI automatically reflects your changes.

---

## Deployment

After making changes:

1. **Rebuild the backend:**
   ```bash
   docker-compose down
   docker-compose build
   docker-compose up -d
   ```

2. **Test the endpoint:**
   ```bash
   curl http://localhost/api/experience
   ```

3. **Verify in browser:**
   - Open http://localhost
   - Check the Resume page to see your new experiences
   - Check project cards and skills section

---

## Security Notes

✅ **What's Secure:**
- No hardcoded secrets or API keys
- CORS properly configured
- Data is read-only from frontend (no direct modifications)
- Nginx proxy handles routing safely

⚠️ **What to Watch:**
- Don't commit sensitive credentials
- Use environment variables for production secrets
- Keep dependencies updated for security patches

---

## Common Tasks

### Edit an existing experience:
Find the experience in the repository and modify the fields directly.

### Remove an experience:
Comment out or delete the experience code and its `_store` line.

### Change the order:
Experiences are ordered by start date (newest first) automatically via:
```csharp
Task.FromResult(_store.Values.OrderByDescending(x => x.StartDate).AsEnumerable())
```

### Add more fields to experience:
1. Modify the `Experience` model class
2. Update all existing experiences to include the new field
3. Rebuild and deploy

---

## Questions?

- Check the models in `DevProfile.Api/Models/` for field definitions
- Review existing examples in `InMemoryDataRepositories.cs`
- Test API endpoints directly: `curl http://localhost/api/skills`
