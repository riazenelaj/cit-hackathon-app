import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './classes/Job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://api.algert.al';
  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<any>(`${this.apiUrl}/jobs`, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  createJobs({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/jobs/`,
      { title, description },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  register({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/register/`,
      { username, email, password1: password, password2: password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
