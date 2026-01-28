import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">Get In Touch</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300">Let's collaborate on your next project</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <!-- Direct Contact Info -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Direct Contact</h2>
            
            <div class="space-y-6">
              <div>
                <label class="text-sm font-semibold text-gray-600 dark:text-gray-400">Email</label>
                <p class="text-lg text-gray-900 dark:text-white mt-1">vahidmansuri702&#64;gmail.com</p>
                <a href="mailto:vahidmansuri702@gmail.com" class="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Send Email →</a>
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-600 dark:text-gray-400">Phone</label>
                <p class="text-lg text-gray-900 dark:text-white mt-1">+91 8109300454</p>
                <a href="tel:+918109300454" class="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Call Me →</a>
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-600 dark:text-gray-400">LinkedIn</label>
                <p class="text-lg text-gray-900 dark:text-white mt-1">linkedin.com/in/vahid454</p>
                <a href="https://www.linkedin.com/in/vahid454/" target="_blank" rel="noopener" class="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Visit Profile →</a>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">More Information</h2>
            
            <div class="space-y-4">
              <a href="/" class="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-700 rounded-lg hover:shadow-md transition text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                📱 View Full Profile
              </a>
              <a href="/resume" class="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-700 rounded-lg hover:shadow-md transition text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                📄 Download Resume
              </a>
              <a href="/projects" class="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-700 rounded-lg hover:shadow-md transition text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                🚀 View Projects
              </a>
              <a href="https://github.com/vahid454" target="_blank" rel="noopener" class="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-700 rounded-lg hover:shadow-md transition text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                🐙 GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white p-12 rounded-2xl shadow-2xl text-center">
          <h2 class="text-3xl font-bold mb-3">Let's Build Something Great Together</h2>
          <p class="text-lg mb-6 opacity-95">Whether you have a project in mind or just want to discuss opportunities, I'm always excited to connect with talented individuals and teams.</p>
          <a href="mailto:vahidmansuri702@gmail.com" class="inline-block bg-white text-blue-600 dark:text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 dark:hover:bg-gray-100 transition-all transform hover:scale-105">
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  profile: any;
  loading = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfiles().subscribe({
      next: (profiles) => {
        this.profile = profiles[0];
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load profile', err);
        this.loading = false;
      }
    });
  }
}
