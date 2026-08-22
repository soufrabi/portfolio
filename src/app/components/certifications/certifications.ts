import { Component } from '@angular/core';

interface Certification {
  title: string;
  issuer: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {
    certifications: Certification[] = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      icon: '🏅',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/AnirbanDey-7718/6AEF5E7103BDEBC8?sharingId=5DCE6DAF916F43F4'
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft',
      icon: '📘',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/AnirbanDey-7718/C8D368B33F6CAD44?sharingId=5DCE6DAF916F43F4'
    },
     {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: '☁️',
      url: 'https://www.credly.com/badges/bf4a2577-743b-4940-b879-8eafa165d22e/public_url'
    },
     {
      title: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      icon: '🏗️',
      url: 'https://www.credly.com/badges/301b6bc5-f4c1-4a3d-94eb-9bc6f4036252/public_url'
    }
  ];

  openCertification(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
