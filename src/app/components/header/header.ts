import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  public menuOpen = signal(false);

  public items: { title: string; href: string }[] = [
    // { title: 'About', href: '/#about' },
    // { title: 'Skills', href: '/#skills' },
    { title: 'Experience', href: '/#experience' },
    { title: 'Certification', href: '/#certifications' },
    { title: 'Education', href: '/#education' },
    { title: 'Contact', href: '/#contact' },
  ];
}