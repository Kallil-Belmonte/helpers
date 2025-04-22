type ObjectType = { [key: string]: any };

/**
 * @function objectToQueryString
 * @description Converts an object to query string.
 * @param { object } [params] - Params as an object.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/rNovEgM}
 */

const objectToQueryString = (params?: ObjectType) => {
  const { keys, values } = Object;
  const { isArray } = Array;

  if (!params || values(params).every(value => value === undefined)) return '';

  let result = '?';

  keys(params).forEach((param, index) => {
    const value = params[param];

    if (isArray(value)) {
      value
        .filter(item => !!item)
        .forEach((item, itemIndex) => {
          result += `${param}[]=${item}`;
          const isNotLast = value[itemIndex + 1] || keys(params)[index + 1];
          if (isNotLast) result += '&';
        });
    } else if (value !== undefined && value !== null) {
      result += `${param}=${value}`;
      const isNotLast = keys(params)[index + 1];
      if (isNotLast) result += '&';
    }
  });

  return result;
};

export default objectToQueryString;
