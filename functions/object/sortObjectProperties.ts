type ObjectType = { [key: string]: any };

/**
 * @function sortObjectProperties
 * @description Sorts the object properties by ascending or descending order.
 * @param { Object } objects - Object to sort properties.
 * @param { boolean } [reverse] - If true, reverts the properties order.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/XWgzraV}
 */

const sortObjectProperties = (object: ObjectType, reverse?: boolean): ObjectType => {
  const { keys } = Object;
  const format = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const propertiesSorted = keys(object)
    .map(key => format(key))
    .sort();
  const propertiesResult = reverse ? propertiesSorted.reverse() : propertiesSorted;

  return propertiesResult.reduce((accumulator, value) => {
    const index = keys(object).findIndex(key => format(key) === format(value));
    const property = keys(object)[index];
    accumulator[property] = object[property];
    return accumulator;
  }, {});
};

export default sortObjectProperties;
