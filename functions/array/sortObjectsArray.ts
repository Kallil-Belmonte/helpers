/**
 * @description Sorts the objects inside an array by one property (in ascending or descending order).
 * @see { @link https://codepen.io/kallil-belmonte/full/PdxGbP }
 */

const sortObjectsArray = (array: any[], property: string, reverse = false) => {
  const propertiesSorted = array.map(item => item[property]).sort();
  const properetiesResult = reverse ? propertiesSorted.reverse() : propertiesSorted;

  return properetiesResult.map(propertyResult => {
    const object = array.find(item => item[property] === propertyResult);
    return object;
  });
};

export default sortObjectsArray;
