/**
 * @description Returns a new object with or without the properties provided in the second parameter.
 * @see { @link https://codepen.io/kallil-belmonte/full/xxxpKxv }
 */

const filterObject = (object: Object, propertiesToFilter: string[], removeProperties = true) =>
  Object.keys(object).reduce((accumulator, currentValue) => {
    if (propertiesToFilter.includes(currentValue) !== removeProperties) {
      accumulator[currentValue] = object[currentValue];
    }

    return accumulator;
  }, {});

export default filterObject;
