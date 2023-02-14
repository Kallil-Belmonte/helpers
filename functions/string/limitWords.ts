/**
 * @function limitWords
 * @description Limits the number of words in a text.
 * @param { string } text - Text.
 * @param { number } numberOfWords - Number of words to limit the text.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/ePYrQj}
 */

const limitWords = (text: string, numberOfWords: number) =>
  text ? text.split(' ').splice(0, numberOfWords).join(' ') : text;

export default limitWords;
