type ObjectType = { [key: string]: any };

/**
 * @function groupObjectsByProperty
 * @description Takes an objects array and create one array for each property value of its objects.
 * @param { ObjectType[] } array - Objects array.
 * @param { string } property - Property to group.
 * @param { boolean } [sort=true] - If true, it will be sorted.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/GXgEgo}
 */

const groupObjectsByProperty = (array: ObjectType[], property: string, sort = true) => {
  const allValues = array.map(item => item[property]);
  const uniqueValues = allValues.filter((item, index, self) => self.indexOf(item) === index);
  if (sort) uniqueValues.sort();
  return uniqueValues.map(item => array.filter(object => object[property] === item)).flat();
};

export default groupObjectsByProperty;
