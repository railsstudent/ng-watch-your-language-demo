import { EnvironmentProviders, inject, makeEnvironmentProviders, Type } from "@angular/core";
import { MASKED_CHARACTER } from "./injection-tokens/masked-character.token";
import { SANITIZATION_OPTIONS } from "./injection-tokens/sanitization-options.token";
import { MaskSpanishWordsService } from "./services/mask-spanish-words.service";
import { MaskWordsService } from "./services/mask-words.service";
import { SanitizeService } from "./services/sanitize.service";
import { Language } from "./types/language.type";

function lookupService(language: Language): Type<SanitizeService> {
  if (language === 'English') {
    return MaskWordsService;
  } else if (language === 'Spanish') {
    return MaskSpanishWordsService;    
  } 
  
  throw new Error('Invalid language');
}

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
      useClass: lookupService(language),
    },
    {
      provide: MASKED_CHARACTER,
      useFactory: () => 
        inject(SANITIZATION_OPTIONS).character || '*'      
    }
  ]);
}
