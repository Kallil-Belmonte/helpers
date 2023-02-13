/**
 * @function capitalizeText
 * @description Capitalizes all words of a text, except the words in the array of the second parameter.
 * @param { string } text - Text to be capitalized.
 * @param { string[] } [exceptionWords=[]] - Words not to be capitalized.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/VRRxEQ }
 */

const capitalizeText = (text: string, exceptionWords: string[] = []) =>
  text
    ? text
        .split(' ')
        .map(word => {
          if (exceptionWords.includes(word)) return word;
          return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ')
    : text;

export default capitalizeText;
