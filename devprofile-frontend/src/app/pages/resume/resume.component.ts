import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-16 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-10 sm:mb-16">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2 sm:mb-3">Resume & Experience</h1>
          <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 px-2">5+ years of professional experience in Full Stack development and Cloud architecture</p>
          <a href="/assets/Vahid Kha Mansuri.pdf" download class="inline-block mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            📥 Download PDF Resume
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            
            <!-- Experience Section -->
            <section class="mb-8 sm:mb-12">
              <div class="flex items-center gap-3 mb-6 sm:mb-8">
                <div class="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>
              
              <div class="space-y-4 sm:space-y-6">
                <div *ngFor="let exp of experience; let last = last" 
                     class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-gradient-to-b from-blue-600 to-indigo-600">
                  
                  <!-- Timeline dot -->
                  <div class="flex gap-3 sm:gap-6 p-4 sm:p-6 lg:p-8">
                    <div class="flex flex-col items-center flex-shrink-0">
                      <div class="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 mt-1 sm:mt-2"></div>
                      <div class="w-1 h-12 sm:h-16 bg-gray-300 dark:bg-gray-600 my-1 sm:my-2"></div>
                    </div>
                    
                    <div class="flex-1 min-w-0">
                      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                        <div>
                          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{{ exp.title }}</h3>
                          <p class="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">{{ exp.company }}</p>
                        </div>
                        <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap">
                          {{ exp.startDate | date: 'MMM yyyy' }} - {{ exp.endDate ? (exp.endDate | date: 'MMM yyyy') : 'Present' }}
                        </span>
                      </div>
                      
                      <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">{{ exp.description }}</p>
                      
                      <div class="space-y-1 sm:space-y-2">
                        <div *ngFor="let resp of exp.responsibilities" class="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                          <span class="text-blue-600 dark:text-blue-400 font-bold mt-0.5">✓</span>
                          <span>{{ resp }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Education Section -->
            <section class="mb-8 sm:mb-12">
              <div class="flex items-center gap-3 mb-6 sm:mb-8">
                <div class="w-1 h-8 sm:h-10 bg-gradient-to-b from-purple-600 to-pink-600"></div>
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>
              
              <div *ngFor="let edu of education" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border-l-4 border-purple-600">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{{ edu.degree }}</h3>
                <p class="text-base sm:text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2 sm:mb-3">{{ edu.school }}</p>
                <div class="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-base text-gray-700 dark:text-gray-300">
                  <span class="flex items-center gap-2">
                    <span>📚</span> {{ edu.field }}
                  </span>
                  <span class="flex items-center gap-2">
                    <span>📅</span> {{ edu.year }}
                  </span>
                  <span *ngIf="edu.gpa" class="flex items-center gap-2">
                    <span>⭐</span> CGPA: {{ edu.gpa }}
                  </span>
                </div>
              </div>
            </section>

          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            
            <!-- Profile Card -->
            <div class="lg:sticky lg:top-24 space-y-6">
              <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 border-t-4 border-blue-600">
                <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                  <span>👨‍💼</span> My Profile
                </h2>
                <div class="space-y-3 sm:space-y-4">
                  <div class="flex items-start gap-2 sm:gap-3">
                    <span class="text-lg sm:text-xl text-blue-600 dark:text-blue-400">👤</span>
                    <div class="min-w-0">
                      <p class="text-xs font-semibold text-gray-600 dark:text-gray-400">Name</p>
                      <p class="font-bold text-gray-900 dark:text-white text-sm break-words">Vahid Kha Mansuri</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2 sm:gap-3">
                    <span class="text-lg sm:text-xl text-blue-600 dark:text-blue-400">📧</span>
                    <div class="min-w-0">
                      <p class="text-xs font-semibold text-gray-600 dark:text-gray-400">Email</p>
                      <a href="mailto:vahidmansuri702@gmail.com" class="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 break-all text-sm">vahidmansuri702&#64;gmail.com</a>
                    </div>
                  </div>
                  <div class="flex items-start gap-2 sm:gap-3">
                    <span class="text-lg sm:text-xl text-blue-600 dark:text-blue-400">📱</span>
                    <div class="min-w-0">
                      <p class="text-xs font-semibold text-gray-600 dark:text-gray-400">Phone</p>
                      <a href="tel:+918109300454" class="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm">+91 8109300454</a>
                    </div>
                  </div>
                  <div class="flex items-start gap-2 sm:gap-3">
                    <span class="text-lg sm:text-xl text-blue-600 dark:text-blue-400">📍</span>
                    <div class="min-w-0">
                      <p class="text-xs font-semibold text-gray-600 dark:text-gray-400">Location</p>
                      <p class="font-bold text-gray-900 dark:text-white text-sm">India</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2 sm:gap-3">
                    <span class="text-lg sm:text-xl text-blue-600 dark:text-blue-400">🔗</span>
                    <div class="min-w-0">
                      <p class="text-xs font-semibold text-gray-600 dark:text-gray-400">Social</p>
                      <a href="https://www.linkedin.com/in/vahid454/" target="_blank" rel="noopener" class="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm">LinkedIn Profile</a>
                    </div>
                  </div>
                </div>
              </section>
            
              <!-- Skills Summary -->
              <section>
                <div class="flex items-center gap-3 mb-4 sm:mb-6">
                  <div class="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-600 to-teal-600"></div>
                  <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
                </div>
                
                <div class="space-y-3 sm:space-y-4">
                  <div *ngFor="let skill of skills" 
                       class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 border-t-2 border-gradient-to-r from-green-600 to-teal-600">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-r from-green-600 to-teal-600"></span>
                      {{ skill.category }}
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      <span *ngFor="let tech of skill.technologies" 
                            class="bg-gradient-to-r from-green-100 dark:from-green-900 to-teal-100 dark:to-teal-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-semibold hover:from-green-200 dark:hover:from-green-800 hover:to-teal-200 dark:hover:to-teal-800 transition">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Certifications -->
              <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <span>🏆</span> Certifications
                </h3>
                <div class="space-y-2 sm:space-y-3">
                  <div class="p-3 sm:p-4 bg-gradient-to-r from-blue-50 dark:from-blue-900 to-indigo-50 dark:to-indigo-900 rounded-lg border-l-4 border-blue-600">
                    <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Azure Developer Associate</p>
                    <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">AZ-204</p>
                  </div>
                  <div class="p-3 sm:p-4 bg-gradient-to-r from-indigo-50 dark:from-indigo-900 to-purple-50 dark:to-purple-900 rounded-lg border-l-4 border-indigo-600">
                    <p class="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Azure Fundamentals</p>
                    <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">AZ-900</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .border-gradient-to-r {
      border-image: linear-gradient(90deg, #2563eb, #4f46e5) 1;
    }

    .border-gradient-to-b {
      border-image: linear-gradient(180deg, #2563eb, #4f46e5) 1;
    }

    @keyframes slide-in {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    :host ::ng-deep section {
      animation: slide-in 0.6s ease-out;
    }
  `]
})
export class ResumeComponent implements OnInit {
  experience: any[] = [];
  education: any[] = [];
  skills: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getExperience().subscribe(data => this.experience = data);
    this.portfolioService.getEducation().subscribe(data => this.education = data);
    this.portfolioService.getSkills().subscribe(data => this.skills = data);
  }
}

