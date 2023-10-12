import { InjectionToken } from "@angular/core";
import { SanitizeOptions } from "../interfaces/sanitization-options.interface";

export const SANITIZATION_OPTIONS = new InjectionToken<SanitizeOptions>('SANITIZATION_OPTIONS');
