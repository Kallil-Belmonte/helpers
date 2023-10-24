type ObjectType = { [key: string]: any };

/**
 * @function queryStringToObject
 * @description Converts a query string to object.
 * @param { string } url - URL.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/oNJdrMe}
 */

const queryStringToObject = <Type = ObjectType>(url: string): Type => {
  const { isArray } = Array;
  const { search } = new URL(url);

  return search
    .replace(/^\?/, '')
    .split('&')
    .reduce((accumulator, currentValue) => {
      const [parameter, value] = currentValue.split('=');
      const param = parameter.replace(/\[|\]/g, '');
      let result: string | string[] = value;

      if (parameter.endsWith('[]') || accumulator[param]) {
        if (accumulator[param]) {
          result = isArray(accumulator[param])
            ? [...accumulator[param], value]
            : [accumulator[param], value];
        } else {
          result = [value];
        }
      }

      return {
        ...accumulator,
        [param]: result,
      };
    }, {} as ObjectType) as Type;
};

export default queryStringToObject;
