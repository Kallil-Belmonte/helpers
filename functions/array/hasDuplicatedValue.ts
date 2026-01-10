/**
 * @function hasDuplicatedValue
 * @description Checks if an array has a duplicated value.
 * @param array - Values array.
 * @param valueToCheck - Value to check.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/zYrrqMX}
 */

const hasDuplicatedValue = <Type = any>(array: Type[], valueToCheck?: Type) => {
  const { stringify } = JSON;
  const arrayFiltered = [...new Set(array.map(item => stringify(item)))];

  if (valueToCheck) {
    return array.filter(item => stringify(item) === stringify(valueToCheck)).length > 1;
  }

  return !(array.length === arrayFiltered.length);
};

export default hasDuplicatedValue;
