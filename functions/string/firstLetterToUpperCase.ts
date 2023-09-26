/**
 * @function firstLetterToUpperCase
 * @description Converts the first letter to uppercase.
 * @param { string } text - Text capitalize the first letter.
 * @param { boolean } restToLowercase - If true, the rest of the world will be converted to lowercase.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/JjLQqbd}
 */

const firstLetterToUpperCase = (text: string, restToLowercase: boolean) => {
  if (!text) return text;
  const firstLetter = text.charAt(0).toUpperCase();
  const rest = restToLowercase ? text.slice(1).toLowerCase() : text.slice(1);
  return `${firstLetter}${rest}`;
};

export default firstLetterToUpperCase;
