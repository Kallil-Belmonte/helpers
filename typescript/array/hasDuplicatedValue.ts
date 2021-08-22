/**
 * @description Checks if an array has a duplicated value.
 * @see { @link https://codepen.io/kallil-belmonte/full/zYrrqMX }
 */

const hasDuplicatedValue = (array: any[], valueToCheck: any) => {
  const { stringify } = JSON;
  const arrayFiltered = [...new Set(array.map(item => stringify(item)))];

  if (valueToCheck) {
    return array.filter(item => stringify(item) === stringify(valueToCheck)).length > 1;
  }

  return !(array.length === arrayFiltered.length);
};

export default hasDuplicatedValue;
