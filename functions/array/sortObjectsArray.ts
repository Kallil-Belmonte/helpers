/**
 * @function sortObjectsArray
 * @description Sorts the objects inside an array by one property (in ascending or descending order).
 * @param { any[] } array - Values array.
 * @param { string } property - Property to sort.
 * @param { boolean } [reverse] - If true, reverts the array order.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/PdxGbP}
 */

type ObjectType = { [key: string]: any };

const sortObjectsArray = (array: any[], property: string, reverse?: boolean) => {
  const isNumber = (item: ObjectType) => typeof item[property] === 'number';
  const isString = (item: ObjectType) => typeof item[property] === 'string';
  const isNullOrUndefined = (item: ObjectType) =>
    item[property] === undefined || item[property] === null;
  const mapProperty = (item: ObjectType) => item[property];
  const findItem = (item: ObjectType, value: any) => item[property] === value;

  const numbers = array
    .filter(item => isNumber(item))
    .map(mapProperty)
    .sort((a, b) => a - b);
  const strings = array
    .filter(item => isString(item))
    .map(mapProperty)
    .sort();
  const valids = array.filter(
    item => !isNumber(item) && !isString(item) && !isNullOrUndefined(item),
  );
  const invalids = array.filter(item => isNullOrUndefined(item));

  if (reverse) {
    numbers.reverse();
    strings.reverse();
  }

  return [
    ...numbers.map(value => array.find(item => findItem(item, value))),
    ...strings.map(value => array.find(item => findItem(item, value))),
    ...valids,
    ...invalids,
  ];
};

export default sortObjectsArray;
