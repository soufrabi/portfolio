import { Component } from '@angular/core';
import { CV_URL } from '../../core/app.constants';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  public readonly cvUrl = CV_URL;
}
