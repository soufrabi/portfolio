import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public items: { title: string, href: string }[] = [
    { title: 'About', href: "/#about" },
    { title: 'Skills', href: "/#skills" },
    { title: 'Experience', href: "/#experience" },
    { title: 'Certification', href: "/#certification" },
    { title: 'Education', href: "/#education" },
    { title: 'Contact', href: "/#contact" },];
}