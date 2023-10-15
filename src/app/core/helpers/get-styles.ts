import { SanitizeOptions } from "../interfaces/sanitization-options.interface";

export function getStyles(options: SanitizeOptions) {
  const { isBold, isItalic, isUnderline, color = 'black' } = options;
  
  const fontWeight = `${ isBold ? 'font-weight: bold;' : '' }`;
  const fontStyle = `${ isItalic ? 'font-style: italic;' : '' }`;
  const textDecoration = `${ isUnderline ? 'text-decoration: underline;' : '' }`;

  return `style="${fontWeight}${fontStyle}${textDecoration}color: ${color}"`;
}
