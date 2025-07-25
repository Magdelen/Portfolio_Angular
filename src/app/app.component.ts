import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import Typed from 'typed.js';

interface Project {
  name: string;
  description: string;
  tech: string;
  icon: string;
  category: string;
}

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private typed: any;
  isDarkMode = false;

  skills = [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'TypeScript', level: 85, category: 'Language' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'Docker', level: 78, category: 'DevOps' },
    { name: 'AWS EC2', level: 75, category: 'Cloud' },
    { name: 'OAuth2/JWT', level: 88, category: 'Security' },
    { name: 'Microsoft Entra ID', level: 85, category: 'Security' },
    { name: 'GitHub Actions', level: 80, category: 'DevOps' },
    { name: 'AngularJS', level: 85, category: 'Frontend' },
    { name: 'RESTful APIs', level: 90, category: 'Backend' }
  ];

workExperience: WorkExperience[] = [
  {
    company: 'Innoart Technologies',
    role: 'Full Stack Developer',
    duration: 'Aug 2023 – May 2025',
    location: 'Chennai, India',
    achievements: [
      'Built centralized authentication system serving 7+ enterprise applications with Microsoft Entra ID integration',
      'Developed biometric access control solution for Qualcomm using facial recognition and Azure AD',
      'Led migration from AngularJS to Angular 16, improving performance by 40% and reducing bundle size',
      'Engineered unified communication platform integrating Zoom & MS Teams APIs with secure Vault-based authentication',
      'Implemented Docker containerization and CI/CD pipelines using Jenkins and GitHub Actions',
      'Created API Gateway with support for OAuth2 and JWT, handling 10k+ daily requests with 99.9% uptime',
      'Established batch token generation, MSAL-based login components, and rate limiting by user group using API keys'
    ],
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker', 'Azure AD', 'Microsoft Entra ID', 'TypeScript', 'Express.js', 'Vault', 'Redis']
  },
  {
    company: 'HCL Technologies',
    role: 'Software Engineering Intern',
    duration: 'Jan 2022 – May 2022',
    location: 'Chennai, India',
    achievements: [
      'Developed a medical equipment supply management system using Python and SQLAlchemy',
      'Implemented role-based access control for multiple user types',
      'Worked in Agile environment and collaborated on version-controlled modules'
    ],
    technologies: ['Python', 'SQLAlchemy', 'MySQL', 'Agile', 'Git']
  }
];

  education: Education[] = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Sathyabama Institute of Science and Technology',
      year: '2019-2023',
    }
  ];
keyProjects: Project[] = [
  {
    name: 'Enterprise Authentication Hub',
    description: `Built centralized authentication system serving 7+ enterprise applications with Microsoft Entra ID SSO, handling high-volume daily auth requests. 
    Developed a secure API Gateway with 5 auth methods (OAuth2, JWT, etc.) and automated token refresh. 
    Created reusable MSAL-based login components and batch token generators. 
    Implemented rate limiting by user group using API key verification.`,
    tech: 'Node.js • Express.js • MongoDB • Docker • MSAL • JWT • OAuth2 • Microsoft Entra ID',
    icon: '🔐',
    category: 'Security'
  },
  {
    name: 'Smart Access',
    description: `Enhanced Qualcomm’s enterprise biometric access platform with real-time user management, advanced filtering, and audit logging.
    Integrated Microsoft Entra ID for secure authentication and profile management. 
    Optimized MongoDB queries, added Redis caching, and deployed scalable infra on AWS EC2 with load balancing and zero-downtime updates.`,
    tech: 'Angular • Node.js • Redis • MongoDB • Microsoft Entra ID • AWS EC2 • PM2',
    icon: '👤',
    category: 'IoT'
  },
  {
    name: 'Communication Hub',
    description: `Engineered secure Node.js microservices integrating HashiCorp Vault for centralized secret management. 
    Integrated Zoom & MS Teams APIs for unified communication and automated meeting scheduling. 
    Containerized services with Docker and set up CI/CD pipelines using Jenkins and GitHub Actions.`,
    tech: 'Node.js • OAuth2 • HashiCorp Vault • Zoom API • Teams API • Docker • Jenkins • GitHub Actions',
    icon: '💬',
    category: 'Integration'
  },
  {
    name: 'eOps Enterprise Modernization',
    description: `Led migration of legacy AngularJS monolith to modern Angular 16 with decoupled Node.js microservices. 
    Designed inline SVG icon system for theme-aware color support (dark/light modes). 
    Improved performance and maintainability using modular architecture and lazy loading.`,
    tech: 'AngularJS • Angular 16 • Node.js • Docker • SSO • SVG • TypeScript',
    icon: '🚀',
    category: 'Modernization'
  }
];

 otherProjects: Project[] = [
  {
    name: 'Caching Proxy Server for Internal APIs',
    description: `Built a production-grade caching layer for internal APIs, improving response times using Redis TTL, ETag validation, and circuit breaker patterns. 
    Designed intelligent request deduplication and dynamic routing with Nginx load balancing. 
    Automated deployment via GitHub Actions.`,
    tech: 'Node.js • Redis • Nginx • Express • GitHub Actions',
    icon: '🧠',
    category: 'Backend'
  },
  {
    name: 'AI-Powered PDF Reader',
    description: `Developed a full-stack AI PDF summarization app using LLMs. 
    Implemented dynamic chunking for large files and integrated Groq API with Mixtral & LLaMA models. 
    Used Redis caching to minimize redundant LLM calls, and built a responsive Angular frontend.`,
    tech: 'Node.js • Angular • Redis • Groq API • pdf-parse',
    icon: '📄',
    category: 'AI/Frontend'
  }
];

  certifications = [
    'MEAN Stack Development',
    'MongoDB CRUD Operations',
    'Python Programming',
  ];

  ngOnInit(): void {
    this.initializeAnimations();
    this.initializeTypedJs();
    this.checkThemePreference();
  }

  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  private initializeAnimations(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }

  private initializeTypedJs(): void {
    this.typed = new Typed('#typed', {
      strings: [
        'Full-Stack MEAN Developer',
        'Software Engineer',
        'Node.js & Angular Specialist',
        'Security-Focused Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  private checkThemePreference(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

downloadResume(): void {
  const filePath = 'assets/resume.pdf';
  console.log('[Download] Starting resume download...');
  console.log('[Download] File path:', filePath);

  const link = document.createElement('a');
  link.href = filePath;
  link.download = 'Bibiana_Magdelene_Resume.pdf';
  document.body.appendChild(link);

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        console.error('[Download] File not found or unreachable:', response.statusText);
        alert('Resume file is missing or not accessible.');
        return;
      }
      console.log('[Download] File found, downloading...');
      link.click();
    })
    .catch(error => {
      console.error('[Download] Fetch error:', error);
      alert('Something went wrong.');
    })
    .finally(() => {
      document.body.removeChild(link);
    });
}



}