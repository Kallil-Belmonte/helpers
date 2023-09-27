type ObjectType = { [key: string]: any };

/**
 * @function objectToQueryString
 * @description Converts an object to query string.
 * @param { object } params - Params as an object.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/rNovEgM}
 */

const objectToQueryString = (params: ObjectType) => {
  const { keys } = Object;
  let result = '?';

  keys(params).forEach((key, index) => {
    const isLast = keys(params).length === index + 1;
    result += `${key}=${params[key]}`;
    if (!isLast) result += '&';
  });

  return result;
};

export default objectToQueryString;
