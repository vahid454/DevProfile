import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = (typeof window !== 'undefined' && window.location.hostname.endsWith('vercel.app'))
    ? 'https://devprofile-yd3s.onrender.com/profile'
    : '/api/profile';

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProfile(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createProfile(firstName: string, lastName: string, email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { firstName, lastName, email });
  }
}
