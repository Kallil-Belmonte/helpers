/**
 * @function filterObjectsArrayToUniqueItems
 * @description Returns just the unique objects from an objects array.
 * @param { any[] } array - Objects array.
 * @param { string } propertyToFilter - Property to filter.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/zQpadE}
 */

const filterObjectsArrayToUniqueItems = (array: any[], propertyToFilter: string) =>
  array.filter(
    (object, index, self) =>
      self.findIndex(item => item[propertyToFilter] === object[propertyToFilter]) === index,
  );

export default filterObjectsArrayToUniqueItems;
