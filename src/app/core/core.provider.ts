import { EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders, Type } from "@angular/core";
import { MASKED_CHARACTER } from "./injection-tokens/masked-character.token";
import { SANITIZATION_OPTIONS } from "./injection-tokens/sanitization-options.token";
import { MaskSpanishWordsService } from "./services/mask-spanish-words.service";
import { MaskWordsService } from "./services/mask-words.service";
import { SanitizeService } from "./services/sanitize.service";
import { Language } from "./types/language.type";

function lookupService(language: Language): SanitizeService {
  if (language === 'English') {
    return new MaskWordsService();
  } else if (language === 'Spanish') {
    return new MaskSpanishWordsService();    
  } 
  
  throw new Error('Invalid language');
}

export const CORE_GUARD = new InjectionToken<string>('CORE_GUARD');

export function provideSanitization(language: Language): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: SANITIZATION_OPTIONS,
      useValue: {
        isBold: true,
        isItalic: true,
        isUnderline: true,
        color: 'rebeccapurple',
        character: 'X',
      }
    },
    {
      provide: SanitizeService,
      useFactory: () => {
        const coreGuard = inject(CORE_GUARD, {
          skipSelf: true,
          optional: true,
        });

        console.log('coreGuard', coreGuard);

        if (coreGuard) {
          throw new TypeError('provideSanitization cannot load more than once');
        }

        return lookupService(language);
      }
    },
    {
      provide: MASKED_CHARACTER,
      useFactory: () => 
        inject(SANITIZATION_OPTIONS).character || '*'      
    }
  ]);
}
