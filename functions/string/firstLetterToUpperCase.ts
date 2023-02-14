/**
 * @function firstLetterToUpperCase
 * @description Converts the first letter to uppercase.
 * @param { string } text - Text capitalize the first letter.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/JjLQqbd}
 */

const firstLetterToUpperCase = (text: string) =>
  text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text;

export default firstLetterToUpperCase;
