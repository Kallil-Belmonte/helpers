/**
 * @function firstLetterToUpperCase
 * @description Converts the first letter to uppercase.
 * @param text - Text capitalize the first letter.
 * @param restToLowercase - If true, the rest of the world will be converted to lowercase.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/JjLQqbd}
 */

const firstLetterToUpperCase = (text: string, restToLowercase?: boolean) => {
  if (!text) return text;
  if (restToLowercase) return text.toLowerCase().replace(/^\w/, match => match.toUpperCase());
  return text.toLowerCase().replace(/\b\w/g, match => match.toUpperCase());
};

export default firstLetterToUpperCase;
