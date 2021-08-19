/**
 * @description Limits the number of words in a text.
 * @see { @link https://codepen.io/kallil-belmonte/full/ePYrQj }
 */

export const limitWords = (text: string | null, numberOfWords: number): string | null =>
  text ? text.split(' ').splice(0, numberOfWords).join(' ') : text;
