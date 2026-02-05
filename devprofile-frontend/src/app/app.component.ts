import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col transition-colors duration-300">
      <!-- Navigation -->
      <nav class="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b-2 border-blue-600 dark:border-blue-500 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <!-- Logo -->
          <a href="/" class="flex items-center gap-1 sm:gap-2 hover:scale-110 transition-transform duration-300">
            <span class="text-xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Vahid</span>
            <span class="text-lg sm:text-3xl">👨‍💻</span>
          </a>
          
          <!-- Mobile Menu Button -->
          <button (click)="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            {{ mobileMenuOpen ? '✕' : '☰' }}
          </button>
          
          <!-- Desktop Navigation -->
          <ul class="hidden md:flex gap-6 lg:gap-8 items-center">
            <li><a routerLink="/" class="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-semibold hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition">Home</a></li>
            <li><a routerLink="/resume" class="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-semibold hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition">Resume</a></li>
            <li><a routerLink="/projects" class="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-semibold hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition">Projects</a></li>
            <li><a routerLink="/contact" class="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-semibold hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition">Contact</a></li>
            <li>
              <button (click)="toggleTheme()" class="text-lg sm:text-xl lg:text-2xl hover:scale-125 transition-transform duration-300" [title]="isDark ? 'Light Mode' : 'Dark Mode'">
                {{ isDark ? '☀️' : '🌙' }}
              </button>
            </li>
            <li>
              <a href="https://github.com/vahid454" target="_blank" rel="noopener" 
                 class="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-blue-600 dark:to-indigo-600 text-white px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm lg:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-bold flex items-center gap-1 sm:gap-2">
                <span>🐙</span> <span class="hidden sm:inline">GitHub</span>
              </a>
            </li>
          </ul>
          
          <!-- Mobile Theme Toggle -->
          <button (click)="toggleTheme()" class="md:hidden text-lg hover:scale-125 transition-transform duration-300" [title]="isDark ? 'Light Mode' : 'Dark Mode'">
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div *ngIf="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 border-t border-blue-600 dark:border-blue-500">
          <div class="px-4 py-4 space-y-2">
            <a routerLink="/" class="block px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition" (click)="mobileMenuOpen = false">
              🏠 Home
            </a>
            <a routerLink="/resume" class="block px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition" (click)="mobileMenuOpen = false">
              📄 Resume
            </a>
            <a routerLink="/projects" class="block px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition" (click)="mobileMenuOpen = false">
              🚀 Projects
            </a>
            <a routerLink="/contact" class="block px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition" (click)="mobileMenuOpen = false">
              💬 Contact
            </a>
            <a href="https://github.com/vahid454" target="_blank" rel="noopener" class="block px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition">
              🐙 GitHub Profile
            </a>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <div class="cursor-gradient" aria-hidden="true"></div>
      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white mt-20 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-6 py-16">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 class="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">
                Vahid Mansuri
              </h3>
              <p class="text-gray-300 dark:text-gray-400 leading-relaxed">
                Full Stack Engineer | Backend Specialist | AI Enthusiast. 5+ years building scalable systems.
              </p>
            </div>
            <div>
              <h4 class="font-bold text-blue-300 dark:text-blue-200 mb-4">Navigation</h4>
              <ul class="space-y-2 text-gray-300 dark:text-gray-400">
                <li><a href="/" class="hover:text-blue-300 dark:hover:text-blue-200 transition">Home</a></li>
                <li><a routerLink="/resume" class="hover:text-blue-300 dark:hover:text-blue-200 transition">Resume</a></li>
                <li><a routerLink="/projects" class="hover:text-blue-300 dark:hover:text-blue-200 transition">Projects</a></li>
                <li><a routerLink="/contact" class="hover:text-blue-300 dark:hover:text-blue-200 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-blue-300 dark:text-blue-200 mb-4">Connect</h4>
              <ul class="space-y-2 text-gray-300 dark:text-gray-400">
                <li><a href="https://github.com/vahid454" target="_blank" rel="noopener" class="hover:text-blue-300 dark:hover:text-blue-200 transition flex items-center gap-2">
                  🐙 GitHub
                </a></li>
                <li><a href="https://www.linkedin.com/in/vahid454/" target="_blank" rel="noopener" class="hover:text-blue-300 dark:hover:text-blue-200 transition flex items-center gap-2">
                  💼 LinkedIn
                </a></li>
                <li><a href="mailto:vahidmansuri702@gmail.com" class="hover:text-blue-300 dark:hover:text-blue-200 transition flex items-center gap-2">
                  ✉️ Email
                </a></li>
                <li><a href="tel:+918109300454" class="hover:text-blue-300 dark:hover:text-blue-200 transition flex items-center gap-2">
                  📱 Phone
                </a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-blue-300 dark:text-blue-200 mb-4">Tech Stack</h4>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blue-600/30 dark:bg-blue-500/30 text-blue-200 dark:text-blue-100 px-2 py-1 rounded text-xs font-semibold">C#</span>
                <span class="bg-indigo-600/30 dark:bg-indigo-500/30 text-indigo-200 dark:text-indigo-100 px-2 py-1 rounded text-xs font-semibold">Angular</span>
                <span class="bg-purple-600/30 dark:bg-purple-500/30 text-purple-200 dark:text-purple-100 px-2 py-1 rounded text-xs font-semibold">Azure</span>
                <span class="bg-pink-600/30 dark:bg-pink-500/30 text-pink-200 dark:text-pink-100 px-2 py-1 rounded text-xs font-semibold">Docker</span>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-700 dark:border-gray-600 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              <p class="text-gray-400 dark:text-gray-500 text-center md:text-left">
                &copy; 2026 Vahid Kha Mansuri. Built with <span class="text-red-400">❤️</span> using C#, Angular & Tailwind CSS.
              </p>
              <div class="flex gap-4">
                <a href="https://github.com/vahid454" target="_blank" rel="noopener" class="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition transform hover:scale-110">
                  🐙
                </a>
                <a href="https://www.linkedin.com/in/vahid454/" target="_blank" rel="noopener" class="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition transform hover:scale-110">
                  💼
                </a>
                <a href="mailto:vahidmansuri702@gmail.com" class="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition transform hover:scale-110">
                  ✉️
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .cursor-gradient {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: 
        radial-gradient(circle 200px at var(--mx) var(--my),
          rgba(99,102,241,0.45) 0%,
          rgba(139,92,246,0.28) 25%,
          rgba(34,211,238,0.18) 50%,
          transparent 100%),
        radial-gradient(circle 100px at calc(var(--mx) + 50px) calc(var(--my) + 50px),
          rgba(168,85,247,0.25) 0%,
          transparent 100%);
      pointer-events: none;
      z-index: 0;
      mix-blend-mode: lighten;
      filter: blur(35px);
    }
    :host(.dark) .cursor-gradient {
      background:
        radial-gradient(circle 200px at var(--mx) var(--my),
          rgba(99,165,255,0.5) 0%,
          rgba(168,85,247,0.35) 25%,
          rgba(59,130,246,0.18) 50%,
          transparent 100%),
        radial-gradient(circle 100px at calc(var(--mx) - 40px) calc(var(--my) - 40px),
          rgba(236,72,153,0.25) 0%,
          transparent 100%);
      mix-blend-mode: screen;
      filter: blur(35px);
    }
  `]
})
export class AppComponent {
  isDark = false;
  mobileMenuOpen = false;

  constructor() {
    this.initTheme();
    this.setupMouseTracking();
  }

  initTheme() {
    const t = localStorage.getItem('theme') || 'light';
    this.isDark = t === 'dark';
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  setupMouseTracking() {
    window.addEventListener('mousemove', (e) => {
      const mx = e.clientX + 'px';
      const my = e.clientY + 'px';
      document.documentElement.style.setProperty('--mx', mx);
      document.documentElement.style.setProperty('--my', my);
    });
  }
}
