import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = '/api';

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
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }
}
