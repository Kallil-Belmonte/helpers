/**
 * @description Returns a new object with or without the properties provided in the second parameter.
 * @see { @link https://codepen.io/kallil-belmonte/full/xxxpKxv }
 */

const filterObject = (object: Object, propertiesToFilter: string[], removeProperties = true) => {
  const { keys } = Object;
  const objectFiltered = {};

  keys(object).forEach(key => {
    if (propertiesToFilter.includes(key) !== removeProperties) {
      objectFiltered[key] = object[key];
    }
  });

  return objectFiltered;
};

export default filterObject;
