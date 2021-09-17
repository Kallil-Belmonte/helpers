/**
 * @name sortObjectsArray
 * @description Sorts the objects inside an array by one property (in ascending or descending order).
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/PdxGbP }
 */

const sortObjectsArray = (array: any[], property: string, reverse?: boolean) => {
  const modifiedArray = array.map((item, index) => {
    const copiedItem = { ...item };
    if (!copiedItem[property]) copiedItem[property] = `zzz ${index}`;
    return copiedItem;
  });
  const propertiesSorted = modifiedArray.map(item => item[property]).sort();
  const propertiesResult = reverse ? propertiesSorted.reverse() : propertiesSorted;

  return propertiesResult.map(propertyResult => {
    const object = modifiedArray.find(item => item[property] === propertyResult);
    if (/zzz [0-9]+/.test(object[property])) object[property] = null;
    return object;
  });
};

export default sortObjectsArray;
