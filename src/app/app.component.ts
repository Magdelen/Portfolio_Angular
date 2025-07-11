import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],           
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  skills = [
    'Angular', 'AngularJS', 'Node.js', 'Express.js', 'MongoDB', 'Docker',
    'AWS EC2', 'OAuth2', 'JWT', 'TypeScript', 'GitHub Actions'
  ];

projects = [
  {
    name: 'Authentication Hub',
    description: 'Built a centralized login system powering 7+ enterprise apps using MSAL, JWT, and Microsoft Entra ID (Azure AD). Enabled seamless SSO, improved security posture, and reduced login friction across the ecosystem.',
    tech: 'Node.js · Express · MongoDB · Docker · MS Entra ID'
  },
  {
    name: 'Smart Access (Qualcomm)',
    description: 'Developed a biometric access control solution integrating facial recognition and Microsoft Entra ID. Delivered secure physical & logical access at Qualcomm using Angular and Dockerized microservices.',
    tech: 'Angular · Node.js · Docker · Azure AD · Face API'
  },
  {
    name: 'Communication Hub',
    description: 'Engineered a unified communication platform integrating Zoom & MS Teams APIs. Implemented secure Vault-based auth, custom RBAC policies, and centralized audit logging.',
    tech: 'Node.js · Swagger · OAuth2 · Vault · Zoom/Teams API'
  },
  {
    name: 'eOps Modernization',
    description: 'Led a greenfield re-architecture of a legacy AngularJS app to Angular 16 + Node.js. Refactored modules, introduced modular lazy-loading, and enforced SSO login policies via Entra ID.',
    tech: 'AngularJS · Angular 16 · Node.js · Docker · SSO'
  }
];


  ngOnInit(): void {
    AOS.init();
    new Typed('#typed', {
      strings: ['Software Engineer', 'Full‑Stack MEAN Developer', 'Node & Angular Enthusiast'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

   
  }

 
}
