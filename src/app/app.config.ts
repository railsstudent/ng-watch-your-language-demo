import { ApplicationConfig } from '@angular/core';
import { LANGUAGE } from './config';
import { CORE_GUARD, provideSanitization } from './core';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: CORE_GUARD,
      useValue: 'CORE_GUARD',
    },
    provideSanitization(LANGUAGE)
  ]
};
