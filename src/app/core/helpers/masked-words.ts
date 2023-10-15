import { SanitizeOptions } from "../interfaces/sanitization-options.interface";

function subsCharacters(word: string, character: string, splitCharacter = '') {
  return word.split(splitCharacter).fill(character).join(splitCharacter);
}

export function getMaskedWords(options: SanitizeOptions) {
  const character = options.character || '*';

  return (words: string) => {
    const cleanedWords = words.split(' ')
      .map((word) => subsCharacters(word, character) 
    );

    return cleanedWords.join(' ');
  }
}
