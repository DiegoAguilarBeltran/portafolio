import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: '/icons/angular-icon.webp' },
        { name: 'React', icon: '/icons/react-icon.webp' },
        { name: 'TypeScript', icon: '/icons/typescript-icon.webp' },
        { name: 'HTML5/SCSS', icon: '/icons/html-icon.webp' },
        { name: 'Tailwind CSS', icon: '/icons/tailwindcss-icon.webp' },
        { name: 'PrimeNG', icon: '/icons/primeng-icon.webp' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Laravel', icon: '/icons/laravel-icon.webp'},
        { name: '.NET', icon: '/icons/net-icon.webp'},
        { name: 'NextJS', icon: '/icons/nextjs-icon.webp' },
        { name: 'C#', icon: '/icons/csharp-icon.webp' },
        { name: 'PHP', icon: '/icons/php-icon.webp' },
      ],
    },
    {
      title: 'DevOps & Infra',
      skills: [
        { name: 'Docker', icon: '/icons/docker-icon.webp' },
        { name: 'Docker Compose', icon: '/icons/docker-compose-icon.webp' },
        { name: 'Nginx', icon: '/icons/nginx-icon.webp' },
        { name: 'Linux', icon: '/icons/linux-icon.webp' },
        { name: 'Windows', icon: '/icons/windows-icon.webp' },
      ],
    },
    {
      title: 'Databases & Streaming',
      skills: [
        { name: 'MariaDB', icon: '/icons/mariadb-icon.webp' },
        { name: 'MySQL', icon: '/icons/mysql-icon.webp' },
        { name: 'SQL Server', icon: '/icons/sqlserver-icon.webp' },
        { name: 'PostgreSQL', icon: '/icons/postgresql-icon.webp' },
        { name: 'Apache Kafka', icon: '/icons/kafka-icon.webp' },
      ],
    },
  ];
}
