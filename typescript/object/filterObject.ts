/**
 * @description Returns a new object with or without the properties provided in the second parameter.
 * @see { @link https://codepen.io/kallil-belmonte/full/xxxpKxv }
 */

const filterObject = (object: Object, propertiesToFilter: string[], removeProperties = true) => {
  const propertiesFiltered = Object.keys(object).filter(
    key => propertiesToFilter.includes(key) !== removeProperties,
  );

  return propertiesFiltered.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = object[currentValue];
    return accumulator;
  }, {});
};

export default filterObject;
