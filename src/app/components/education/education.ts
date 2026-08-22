import { Component } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  period?: string;
  year?: string;
  result?: string;
  tag?: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  readonly education: Education[] = [
    // {
    //   degree: 'M.Tech - Data Science & Engineering',
    //   institution: 'BITS Pilani (WILP)',
    //   period: '2026 - 2028 · Pursuing',
    //   tag: 'Postgraduate'
    // },
    {
      degree: 'B.E - Information Technology',
      institution: 'Jadavpur University',
      period: '2021 - 2025',
      result: 'Grade: 74.85%'
    },
    // {
    //   degree: 'Higher Secondary (12th)',
    //   institution: 'State Board',
    //   year: 'Year: 2016',
    //   result: '68.83%'
    // },
    // {
    //   degree: 'Secondary School (10th)',
    //   institution: 'State Board',
    //   year: 'Year: 2014',
    //   result: '84.85%'
    // },
  ];
}