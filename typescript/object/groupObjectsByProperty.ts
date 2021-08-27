/**
 * @description Takes an objects array and create one array for each property value of its objects.
 * @see { @link https://codepen.io/kallil-belmonte/full/GXgEgo }
 */

const groupObjectsByProperty = (array: any[], property: string, ascending = true) => {
  const allValues = array.map(item => item[property]);
  const uniqueValues = allValues.filter((item, index, self) => self.indexOf(item) === index);
  if (ascending) uniqueValues.sort();
  return uniqueValues.map(item => array.filter(object => object[property] === item));
};

export default groupObjectsByProperty;
