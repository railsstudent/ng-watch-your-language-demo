import { inject, Injectable } from '@angular/core';
import { getStyles } from '../helpers/get-styles';
import { getMaskedWords } from '../helpers/masked-words';
import { SANITIZATION_OPTIONS } from '../injection-tokens/sanitization-options.token';
import { SanitizeService } from './sanitize.service';

@Injectable()
export class MaskSpanishWordsService extends SanitizeService {
  private badWords = [
    'puta',
    'tu puta madre',
    'mierda',
  ];

  sanitizeOptions = inject(SANITIZATION_OPTIONS);
  styles = getStyles(this.sanitizeOptions);
  getMaskedWordsFn = getMaskedWords(this.sanitizeOptions);

  cleanse(sentence: string): string {
    let text = sentence;
    for (const word of this.badWords) {
      const regex = new RegExp(word, 'gi');
      const maskedWords = this.getMaskedWordsFn(word);
      
      text = text.replace(regex, `<span ${this.styles}>${maskedWords}</span>`);
    }

    return text;
  }

}