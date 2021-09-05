/**
 * @description Limits the number of words in a text.
 * @see { @link https://codepen.io/kallil-belmonte/full/ePYrQj }
 */

const limitWords = (text: string | null, numberOfWords: number) =>
  text ? text.split(' ').splice(0, numberOfWords).join(' ') : text;

export default limitWords;
