import { Component, inject } from '@angular/core';
import { LANGUAGE } from './config';
import { MASKED_CHARACTER } from './core';
import { CensoredFormComponent, CensoredSentenceComponent } from './sanitialization';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CensoredSentenceComponent, CensoredFormComponent],
  template: `
    <div class="container">
      <h2>Replace bad {{language}} words with {{character}}</h2>
      <app-censored-form (sentenceChange)="sentence = $event" />
      <app-censored-sentence [sentence]="sentence" />
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div.container {
      max-width: 600px;
      margin: 1rem;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 0.25rem;
    }
  `],
})
export class AppComponent {
  language =  LANGUAGE;
  character = inject(MASKED_CHARACTER);
  sentence = '';
}
