/**
 * @function uniqueItems
 * @description Returns just the unique items from an array.
 * @param { any[] } array - Values array.
 * @param { boolean } [sort] - If true, the response will be sorted.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/XJKdawg}
 */

const uniqueItems = <Type = any>(array: Type[], sort?: boolean) => {
  const result = array.filter((item, index, self) => self.indexOf(item) === index);
  if (sort) result.sort();
  return result;
};

export default uniqueItems;
