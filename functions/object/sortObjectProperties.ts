type ObjectType = { [key: string]: any };

/**
 * @function sortObjectProperties
 * @description Sorts the object properties by ascending or descending order.
 * @param { Object } object - Object to sort properties.
 * @param { boolean } [reverse=false] - If true, reverts the properties order.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/XWgzraV}
 */

const sortObjectProperties = (object: ObjectType, reverse: boolean = false): ObjectType => {
  const { keys } = Object;
  const format = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const propertiesResult = keys(object)
    .map(key => format(key))
    .sort();
  if (reverse) propertiesResult.reverse();

  return propertiesResult.reduce((accumulator, value) => {
    const index = keys(object).findIndex(key => format(key) === format(value));
    const property = keys(object)[index];
    accumulator[property] = object[property];
    return accumulator;
  }, {});
};

export default sortObjectProperties;
