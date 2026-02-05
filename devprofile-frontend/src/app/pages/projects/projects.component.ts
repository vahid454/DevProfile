import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-12 sm:mb-16">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3">Featured Projects</h1>
          <p class="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 px-2">Showcase of 19 projects built with modern technologies and best practices</p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <a *ngFor="let project of projects" [href]="project.url" target="_blank" rel="noopener"
             class="group h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500">
            
            <!-- Card Background Gradient on Hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 dark:from-blue-600/10 dark:to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
              
              <!-- Header -->
              <div class="flex items-start justify-between mb-4 sm:mb-6">
                <div class="flex-1">
                  <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300 mb-1 sm:mb-2 line-clamp-2">
                    {{ project.name }}
                  </h3>
                  <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <span>📅</span> {{ project.createdAt | date: 'MMM yyyy' }}
                  </p>
                </div>
                <div class="text-2xl sm:text-3xl transform group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0">
                  🔗
                </div>
              </div>

              <!-- Description -->
              <p class="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 flex-1 leading-relaxed line-clamp-3">{{ project.description }}</p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mt-auto">
                <span *ngFor="let lang of project.languages" 
                      class="bg-gradient-to-r from-blue-100 dark:from-blue-900 to-indigo-100 dark:to-indigo-900 text-blue-800 dark:text-blue-200 px-2 sm:px-3 py-1 rounded-full text-xs font-bold group-hover:from-blue-200 dark:group-hover:from-blue-800 group-hover:to-indigo-200 dark:group-hover:to-indigo-800 transition-all duration-300">
                  {{ lang }}
                </span>
              </div>

              <!-- Hover Indicator -->
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </a>
        </div>

        <!-- Call to Action -->
        <div class="mt-12 sm:mt-16 text-center">
          <p class="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">See all 19 projects on GitHub</p>
          <a href="https://github.com/vahid454?tab=repositories" target="_blank" rel="noopener" 
             class="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            View GitHub Profile 🚀
          </a>
        </div>

      </div>
    </div>
  `,
  styles: [`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    :host ::ng-deep a:hover {
      animation: float 3s ease-in-out infinite;
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getProjects().subscribe((data: any[]) => {
      // Handle both PascalCase (from JSON) and camelCase (from API)
      this.projects = data.map(p => ({
        id: p.id || p.Id,
        name: p.name || p.Name,
        description: p.description || p.Description,
        url: p.url || p.Url,
        languages: p.languages || p.Languages || [],
        createdAt: p.createdAt || p.CreatedAt
      })).sort((a: any, b: any) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }
}

