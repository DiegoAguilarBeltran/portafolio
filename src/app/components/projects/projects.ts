import { Component } from '@angular/core';

type TechColor = 'emerald' | 'blue' | 'red' | 'amber' | 'purple' | 'slate';

interface TechTag {
  label: string;
  color?: TechColor;
}

interface Project {
  /** Etiqueta de categoría mostrada sobre la imagen (Web, API, Data, ...) */
  category: string;
  title: string;
  description: string;
  /** Ruta a la imagen de vista previa (opcional; si no hay, muestra placeholder) */
  image?: string;
  techs: TechTag[];
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      category: 'Web',
      title: 'CoreOps Dashboard',
      description:
        'Centralización de métricas de rendimiento y estado del clúster. Mejoró la visibilidad operativa en un 40% y redujo incidentes.',
      image: '',
      techs: [
        { label: 'Angular', color: 'red' },
        { label: 'Docker', color: 'blue' },
        { label: 'MariaDB', color: 'amber' },
        { label: 'Kafka', color: 'slate' },
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      category: 'API',
      title: 'Microservice API Gateway',
      description:
        'Orquestación y autenticación para 15+ microservicios. Implementó seguridad y control de tráfico centralizado.',
      image: '',
      techs: [
        { label: 'Spring Boot', color: 'emerald' },
        { label: 'PostgreSQL', color: 'blue' },
        { label: 'Docker', color: 'blue' },
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      category: 'Data',
      title: 'DataStream Pipeline',
      description:
        'Pipeline de procesamiento de datos en tiempo real con ingesta por eventos y tableros analíticos de baja latencia.',
      image: '',
      techs: [
        { label: 'Angular', color: 'red' },
        { label: 'PostgreSQL', color: 'blue' },
        { label: 'Kafka', color: 'slate' },
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];
}
