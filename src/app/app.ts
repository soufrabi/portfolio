import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";
import { FooterComponent } from "./components/footer/footer";
import { HeroComponent } from "./components/hero/hero";
import { CertificationsComponent } from "./components/certifications/certifications";
import { ExperienceComponent } from "./components/experience/experience";
import { ContactComponent } from "./components/contact/contact";
import { EducationComponent } from "./components/education/education";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, CertificationsComponent, ExperienceComponent, ContactComponent, EducationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
