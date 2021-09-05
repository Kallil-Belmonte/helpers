/**
 * @description Returns just the unique objects from an objects array.
 * @see { @link https://codepen.io/kallil-belmonte/full/zQpadE }
 */

const filterObjectsArrayToUniqueItems = (array: any[], propertyToFilter: string) =>
  array.filter(
    (object, index, self) =>
      self.findIndex(item => item[propertyToFilter] === object[propertyToFilter]) === index,
  );

export default filterObjectsArrayToUniqueItems;
