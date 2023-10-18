import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SanitizePipe } from '../pipes/sanitize.pipe';

@Component({
  selector: 'app-censored-sentence',
  standalone: true,
  imports: [SanitizePipe],
  template: `
    <p>
      <label for="result">
        <span class="label">Cleansed sentence: </span>
        <span id="result" name="result" [innerHtml]="sentence | sanitize" ></span>
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
  @Input({ required: true })
  sentence!: string;
}
