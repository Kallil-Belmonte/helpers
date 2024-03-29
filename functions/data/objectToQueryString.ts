type ObjectType = { [key: string]: any };

/**
 * @function objectToQueryString
 * @description Converts an object to query string.
 * @param { object } [params] - Params as an object.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/rNovEgM}
 */

const objectToQueryString = (params?: ObjectType) => {
  if (!params) return '';

  const { keys } = Object;
  const { isArray } = Array;
  let result = '?';

  keys(params).forEach((param, index) => {
    const value = params[param];

    if (isArray(value)) {
      value.forEach((item, itemIndex) => {
        result += `${param}[]=${item}`;
        const isNotLast = value[itemIndex + 1];
        if (isNotLast) result += '&';
      });
    } else {
      result += `${param}=${value}`;
    }

    const isNotLast = keys(params)[index + 1];
    if (isNotLast) result += '&';
  });

  return result;
};

export default objectToQueryString;
