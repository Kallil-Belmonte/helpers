/**
 * @name filterObjectsArrayToUniqueItems
 * @description Returns just the unique objects from an objects array.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/zQpadE }
 */

const filterObjectsArrayToUniqueItems = (array: any[], propertyToFilter: string) =>
  array.filter(
    (object, index, self) =>
      self.findIndex(item => item[propertyToFilter] === object[propertyToFilter]) === index,
  );

export default filterObjectsArrayToUniqueItems;
