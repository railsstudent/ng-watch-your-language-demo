import { ApplicationConfig } from '@angular/core';
import { LANGUAGE } from './config';
import { provideSanitization } from './core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideSanitization(LANGUAGE)
  ]
};
