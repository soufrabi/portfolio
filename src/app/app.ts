import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Certifications } from "./components/certifications/certifications";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Hero, Certifications],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
