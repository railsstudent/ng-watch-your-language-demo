import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SanitizePipe } from '../pipes/sanitize.pipe';
import { SentenceService } from '../services/sentence.service';

@Component({
  selector: 'app-censored-sentence',
  standalone: true,
  imports: [SanitizePipe],
  template: `
    <p>
      <label for="result">
        <span class="label">Cleansed sentence: </span>
        <span id="result" name="result" [innerHtml]="cleansedSentence() | sanitize" ></span>
      </label>
    </p>
  `,
   styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class CensoredSentenceComponent {
  sentenceService = inject(SentenceService);
  cleansedSentence = this.sentenceService.sentenceSignal;
}
