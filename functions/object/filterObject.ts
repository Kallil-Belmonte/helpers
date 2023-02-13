/**
 * @function filterObject
 * @description Returns a new object with or without the properties provided in the second parameter.
 * @param { Object } object - Object to be filtered.
 * @param { Object } propertiesToFilter - Properties to filter.
 * @param { boolean } [removeProperties=true] - If true, removes the properties to filter.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/xxxpKxv  }
 */

type ObjectType = { [key: string]: any };

const filterObject = (
  object: ObjectType,
  propertiesToFilter: string[],
  removeProperties = true,
): ObjectType =>
  Object.keys(object).reduce((accumulator, value) => {
    if (propertiesToFilter.includes(value) !== removeProperties) {
      accumulator[value] = object[value];
    }

    return accumulator;
  }, {});

export default filterObject;
