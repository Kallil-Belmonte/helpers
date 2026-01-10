type ObjectType = { [key: string]: any };

/**
 * @function objectToQueryString
 * @description Converts an object to query string.
 * @param params - Params as an object.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/rNovEgM}
 */

const objectToQueryString = (params?: ObjectType) => {
  const { entries } = Object;
  const { isArray } = Array;

  if (!params) return '';

  const isNullOrUndefined = (value: any) => value === null || value === undefined;

  const paramsFiltered = entries(params).filter(([, value]) =>
    isArray(value) ? !!value.length : !isNullOrUndefined(value),
  );
  if (!paramsFiltered.length) return '';

  let result = '?';

  paramsFiltered.forEach(([key, value], index) => {
    if (index) result += '&';

    if (isArray(value)) {
      value
        .filter(item => !isNullOrUndefined(item))
        .forEach((item, itemIndex) => {
          if (itemIndex) result += '&';
          result += `${key}[]=${item}`;
        });
    } else {
      result += `${key}=${value}`;
    }
  });

  return result;
};

export default objectToQueryString;
