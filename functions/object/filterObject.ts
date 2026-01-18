type ObjectType = { [key: string]: any };

/**
 * @function filterObject
 * @description Returns a new object with or without the properties provided in the second parameter.
 * @param object - Object to be filtered.
 * @param propertiesToFilter - Properties to filter.
 * @param removeProperties - If true, removes the properties to filter.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/xxxpKxv}
 */

const filterObject = <Type = ObjectType>(
  object: ObjectType,
  propertiesToFilter: string[],
  removeProperties: boolean = true,
) =>
  Object.keys(object).reduce((accumulator: ObjectType, currentValue) => {
    if (propertiesToFilter.includes(currentValue) !== removeProperties) {
      accumulator[currentValue] = object[currentValue];
    }

    return accumulator;
  }, {}) as Type;

export default filterObject;
