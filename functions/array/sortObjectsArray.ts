type ObjectType = { [key: string]: any };

/**
 * @function sortObjectsArray
 * @description Sorts the objects inside an array by one property (in ascending or descending order).
 * @param array - Values array.
 * @param property - Property to sort.
 * @param reverse - If true, reverts the array order.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/PdxGbP}
 */

const sortObjectsArray = (array: any[], property: string, reverse: boolean = false) => {
  const isNumber = (item: ObjectType) => typeof item[property] === 'number';
  const isString = (item: ObjectType) => typeof item[property] === 'string';
  const isNullOrUndefined = (item: ObjectType) =>
    item[property] === undefined || item[property] === null;

  const numbers = array.filter(item => isNumber(item)).sort((a, b) => a[property] - b[property]);
  const strings = array
    .filter(item => isString(item))
    .sort((a, b) => a[property].localeCompare(b[property]));
  const valids = array.filter(
    item => !isNumber(item) && !isString(item) && !isNullOrUndefined(item),
  );
  const invalids = array.filter(item => isNullOrUndefined(item));

  if (reverse) {
    numbers.reverse();
    strings.reverse();
  }

  return [...numbers, ...strings, ...valids, ...invalids];
};

export default sortObjectsArray;
