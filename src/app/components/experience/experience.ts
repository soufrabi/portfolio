import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
   experiences: Experience[] = [
    {
      role: 'Consultant',
      company: 'PwC India',
      period: 'Jul 2025 – Present',
      description:
        'Built a multi-level approval platform with a centralized workflow using ASP.NET and Angular, implementing JWT authentication and role-based access control. Integrated in-app chat and event-driven email notifications using Azure Communication Services to improve collaboration, traceability, and responsiveness across distributed teams.'
    },
    // {
    //   role: 'Senior Analyst',
    //   company: 'Accenture',
    //   period: 'Oct 2024 – Dec 2025',
    //   description:
    //     'Managed end-to-end data migration for large-scale projects. Developed and optimized SQL queries, stored procedures, and ETL jobs. Delivered Power BI dashboards and SSRS paginated reports linked to stored procedures for dynamic data access.'
    // },
    // {
    //   role: 'Consultant',
    //   company: 'Deloitte Consulting India Pvt. Ltd.',
    //   period: 'Feb 2022 – Oct 2024',
    //   description:
    //     'Designed and implemented enterprise data solutions, supporting data migration, ETL development, SQL optimization, and reporting requirements across large-scale projects.'
    // }
  ];
}
