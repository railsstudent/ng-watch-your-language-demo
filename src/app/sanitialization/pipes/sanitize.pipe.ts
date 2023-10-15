import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SanitizeService } from '../../core';

@Pipe({
  name: 'sanitize',
  standalone: true,
})
export class SanitizePipe implements PipeTransform {
  sanitizeService = inject(SanitizeService);
  domSanitizer = inject(DomSanitizer);

  transform(value: string): SafeHtml {

    const html = this.sanitizeService.cleanse(value);
    return this.domSanitizer.bypassSecurityTrustHtml(html)
  }
}
