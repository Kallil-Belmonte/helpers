/**
 * @function uniqueObjects
 * @description Returns just the unique objects from an objects array.
 * @param array - Objects array.
 * @param propertyToFilter - Property to filter.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/zQpadE}
 */

const uniqueObjects = (array: any[], propertyToFilter: string) =>
  array.filter(
    (object, index, self) =>
      self.findIndex(item => item[propertyToFilter] === object[propertyToFilter]) === index,
  );

export default uniqueObjects;
