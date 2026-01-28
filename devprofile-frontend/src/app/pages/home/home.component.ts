// Clean single HomeComponent with dark mode support
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div class="max-w-5xl mx-auto px-4 py-16">

        <!-- Hero Section -->
        <div class="text-center mb-16 animate-fade-in">

          <!-- Profile Image -->
          <div class="mb-12 flex justify-center">
            <div class="relative">
              <div class="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 p-1 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <img src="assets/IMG_Vahid.jpg" alt="Vahid Kha Mansuri" class="w-full h-full rounded-full object-cover">
              </div>
              <div class="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border-4 border-blue-500 dark:border-blue-400">
                <span class="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          <!-- Name and Title -->
          <h1 class="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Vahid Kha Mansuri
          </h1>
          <p class="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Full Stack Engineer | Backend Specialist | AI Enthusiast
          </p>

          <!-- Contact Info -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-gray-700 dark:text-gray-300">
            <a href="mailto:vahidmansuri702@gmail.com" class="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <span>✉️</span> vahidmansuri702&#64;gmail.com
            </a>
            <span class="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
            <a href="tel:+918109300454" class="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <span>📱</span> +91 8109300454
            </a>
            <span class="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
            <a href="https://www.linkedin.com/in/vahid454/" target="_blank" rel="noopener" class="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <span>💼</span> LinkedIn
            </a>
          </div>

          <!-- Bio -->
          <p class="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            5+ years crafting scalable, innovative solutions with C#, Angular, and Cloud technologies.
            Specialized in enterprise architecture, AI integration, and high-performance distributed systems.
            Passionate about solving complex problems and mentoring teams.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="/assets/Vahid Kha Mansuri.pdf" download class="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <span>📥</span> Download Resume
          </a>
          <a href="/projects" class="bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <span>🚀</span> View Projects
          </a>
          <a href="https://github.com/vahid454" target="_blank" rel="noopener" class="bg-gray-900 dark:bg-gray-700 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <span>🔗</span> GitHub Profile
          </a>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 dark:border-blue-400">
            <div class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-2">5+</div>
            <p class="text-gray-700 dark:text-gray-300 font-semibold">Years Experience</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Full Stack Development</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600 dark:border-indigo-400">
            <div class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">19</div>
            <p class="text-gray-700 dark:text-gray-300 font-semibold">GitHub Projects</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Open Source & Portfolio</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600 dark:border-purple-400">
            <div class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-2">40+</div>
            <p class="text-gray-700 dark:text-gray-300 font-semibold">Tech Skills</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Across 7 Categories</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-pink-600 dark:border-pink-400">
            <div class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400 mb-2">2</div>
            <p class="text-gray-700 dark:text-gray-300 font-semibold">Azure Certifications</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">AZ-204 & AZ-900</p>
          </div>
        </div>

        <!-- Current Role Highlight -->
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white p-8 md:p-12 rounded-2xl shadow-2xl mb-16 relative overflow-hidden">
          <div class="absolute top-0 right-0 opacity-10">
            <svg class="w-40 h-40" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"></path>
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-3 relative z-10">🌟 Currently &#64; Hansen Tech</h2>
          <p class="text-base md:text-lg leading-relaxed relative z-10">
            Leading backend architecture and cloud infrastructure.
            Designing microservices, implementing CI/CD pipelines, and integrating AI agents.
            Azure certified professional with expertise in distributed systems.
          </p>
        </div>

        <!-- Tech Stack Preview -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-12 mb-16">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Core Tech Stack</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="font-bold text-lg text-blue-600 dark:text-blue-400 mb-4">Backend</h3>
              <div class="flex flex-wrap gap-3">
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold">C#</span>
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold">.NET Core</span>
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold">ASP.NET</span>
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold">SQL Server</span>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-4">Frontend</h3>
              <div class="flex flex-wrap gap-3">
                <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-lg font-semibold">Angular</span>
                <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-lg font-semibold">TypeScript</span>
                <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-lg font-semibold">Tailwind CSS</span>
                <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-lg font-semibold">React</span>
              </div>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t dark:border-gray-700">
            <h3 class="font-bold text-lg text-purple-600 dark:text-purple-400 mb-4">Cloud & DevOps</h3>
            <div class="flex flex-wrap gap-3">
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg font-semibold">Azure</span>
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg font-semibold">Docker</span>
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg font-semibold">Kubernetes</span>
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg font-semibold">GitHub Actions</span>
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg font-semibold">CI/CD</span>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center">
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">Ready to collaborate on your next project?</p>
          <a href="/contact" class="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-600 text-white px-10 py-3 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Contact Me 💬
          </a>
        </div>

      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
