import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = '/api';

  // Default projects data for fallback
  private defaultProjects = [
    {
      id: '1',
      name: 'DevProfile - Interactive Portfolio',
      description: 'Full-stack portfolio application built with Angular 18, ASP.NET Core 9, and modern UI/UX practices. Features real-time data binding, dark mode, and responsive design.',
      url: 'https://github.com/vahid454/DevProfile',
      languages: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'Docker'],
      createdAt: '2025-01-28'
    },
    {
      id: '2',
      name: 'Grace AI - Agentic AI System',
      description: 'AI-powered agent system integrating MCP (Model Context Protocol) server for autonomous task execution. Built with LLaMA and LLM integration at Hansen Tech.',
      url: 'https://github.com/vahid454',
      languages: ['Python', 'MCP', 'LLM', 'AI', 'GenAI'],
      createdAt: '2025-01-20'
    },
    {
      id: '3',
      name: 'Kubernetes Helm Deployment Manager',
      description: 'Enterprise-grade Kubernetes cluster management tool with Helm for multi-environment deployments. Integrated Okta for identity management.',
      url: 'https://github.com/vahid454',
      languages: ['Kubernetes', 'Helm', 'Docker', 'DevOps', 'Azure'],
      createdAt: '2025-01-15'
    },
    {
      id: '4',
      name: '5G Network Optimization Tool',
      description: 'Enhanced 5G-SA-L3 product with XNHO Cell to Cell Handover and CAG features. Improved network performance and reliability.',
      url: 'https://github.com/vahid454',
      languages: ['C++', 'C#', 'Network', '5G', 'Google Test'],
      createdAt: '2025-01-10'
    },
    {
      id: '5',
      name: 'Smart Home Automation Platform',
      description: 'Full duplex smart home automation system with Raspberry Pi server and Android APK. Real-time device control via WebSocket communication.',
      url: 'https://github.com/vahid454',
      languages: ['Python', 'Java', 'WebSocket', 'IoT', 'Raspberry Pi'],
      createdAt: '2025-01-05'
    },
    {
      id: '6',
      name: 'IRIN P3 Tax System',
      description: 'Financial Account Management module for Singapore tax system. Microservices architecture with Kafka event streaming and NgRX state management.',
      url: 'https://github.com/vahid454',
      languages: ['.NET Core', 'Angular', 'Kafka', 'Microservices', 'Azure'],
      createdAt: '2024-12-25'
    },
    {
      id: '7',
      name: 'SQL Data Modeler Tool',
      description: 'Desktop application for SQL database modeling with drag-and-drop interface. Generates SQL scripts similar to Toad Data Modeler using AJAX.',
      url: 'https://github.com/vahid454',
      languages: ['C#', 'AJAX', 'SQL', 'WinForms', 'Database'],
      createdAt: '2024-12-15'
    },
    {
      id: '8',
      name: 'Performance Improver Automation',
      description: 'Automation tool for creating network setups and simulators. Enhances performance testing and debugging capabilities.',
      url: 'https://github.com/vahid454',
      languages: ['C#', '.NET', 'Automation', 'Performance', 'Testing'],
      createdAt: '2024-12-10'
    },
    {
      id: '9',
      name: 'Microservices REST API Framework',
      description: 'Scalable REST API framework using .NET Core with comprehensive error handling, logging, and monitoring using Grafana.',
      url: 'https://github.com/vahid454',
      languages: ['.NET Core', 'C#', 'REST API', 'Microservices', 'Grafana'],
      createdAt: '2024-12-05'
    }
  ];

  constructor(private http: HttpClient) {}

  getExperience(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/experience`).pipe(
      catchError(() => of([]))
    );
  }

  getEducation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/education`).pipe(
      catchError(() => of([]))
    );
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/skills`).pipe(
      catchError(() => of([]))
    );
  }

  getProjects(): Observable<any[]> {
    // Try to fetch from API, fallback to default projects
    return this.http.get<any[]>(`${this.apiUrl}/projects`).pipe(
      catchError(() => of(this.defaultProjects))
    );
  }
}
