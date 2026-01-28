using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public class Startup
{
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddOpenApi();
        services.AddControllers();
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        // Configure CORS for frontend
        services.AddCors(options =>
        {
            options.AddPolicy("AllowFrontend", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            });
        });

        // Register Profile services and repository
        services.AddSingleton<IProfileRepository, InMemoryProfileRepository>();
        services.AddScoped<IProfileService, ProfileService>();

        // Register data repositories
        services.AddSingleton<IExperienceRepository, InMemoryExperienceRepository>();
        services.AddSingleton<IEducationRepository, InMemoryEducationRepository>();
        services.AddSingleton<ISkillRepository, InMemorySkillRepository>();
        services.AddSingleton<IProjectRepository, InMemoryProjectRepository>();
    }

    public void Configure(WebApplication app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseHttpsRedirection();

        // Use CORS policy
        app.UseCors("AllowFrontend");

        // Enable Swagger middleware and UI at /swagger
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "DevProfile API V1");
            c.RoutePrefix = "swagger";
        });

        app.MapControllers();
    }
}
