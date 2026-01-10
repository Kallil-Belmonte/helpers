/**
 * @function limitWords
 * @description Limits the number of words in a text.
 * @param text - Text.
 * @param numberOfWords - Number of words to limit the text.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/ePYrQj}
 */

const limitWords = (text: string, numberOfWords: number, ellipses = true) => {
  if (!text) return text;
  const hasEllipses = ellipses && text.split(' ').length > numberOfWords;
  return `${text.split(' ').splice(0, numberOfWords).join(' ')}${hasEllipses ? '...' : ''}`;
};

export default limitWords;
