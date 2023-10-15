import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SentenceService } from '../services/sentence.service';

@Component({
  selector: 'app-censored-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form #myForm="ngForm">
      <div>
        <label for="sentence">
          <span class="label">Sentence: </span>
          <textarea id="sentence" name="sentence" rows="8" cols="45"
            [ngModel]="sentence()"
            (ngModelChange)="sentence.set($event)">
          </textarea>
        </label>
      </div>
    </form>
  `,
   styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CensoredFormComponent {
  sentence = inject(SentenceService).sentenceSignal;
}
