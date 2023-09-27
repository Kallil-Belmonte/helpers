type ObjectType = { [key: string]: any };

/**
 * @function getParams
 * @description Gets the params from a URL as a object.
 * @param { string } url - URL.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/oNJdrMe}
 */

const getParams = <Type = ObjectType>(url: string): Type => {
  const { search, searchParams } = new URL(url);

  return search.split('&').reduce((accumulator, currentValue) => {
    const param = currentValue.split('=')[0].replace(/\?/, '');
    return {
      ...accumulator,
      [param]: searchParams.get(param),
    };
  }, {} as Type);
};

export default getParams;
