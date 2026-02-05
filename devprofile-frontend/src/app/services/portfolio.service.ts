import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = (typeof window !== 'undefined' && window.location.hostname.endsWith('vercel.app'))
    ? 'https://dev-profile-beige.vercel.app/api'
    : '/api';

  constructor(private http: HttpClient) {}

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
    // Try API first, fallback to static JSON file
    return this.http.get<any[]>(`${this.apiUrl}/projects`).pipe(
      catchError(() => this.http.get<any[]>('/assets/projects.json'))
    );
  }
}


