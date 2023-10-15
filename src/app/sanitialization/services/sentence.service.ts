import { computed, inject, Injectable, signal } from '@angular/core';
import { SanitizeService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {
  sentenceSignal = signal('');
  sanitizeService = inject(SanitizeService);
  cleansedSentenceSignal = computed(() => 
    this.sanitizeService.cleanse(this.sentenceSignal())
  );
}
