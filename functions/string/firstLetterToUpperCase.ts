/**
 * @name firstLetterToUpperCase
 * @description Converts the first letter to uppercase.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/JjLQqbd }
 */

const firstLetterToUpperCase = (text: string | null) =>
  text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text;

export default firstLetterToUpperCase;
