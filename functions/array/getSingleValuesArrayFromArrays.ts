/**
 * @function getSingleValuesArrayFromArrays
 * @description Returns just the unique items from two arrays.,
 * @param { any[] } array - Values array.
 * @param { any[] } arrayToAddOrRemove - Array to add or remove.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/bGdgLxV }
 */

const getSingleValuesArrayFromArrays = (array: any[], arrayToAddOrRemove: any[]) => {
  const { stringify } = JSON;
  const base = array.map(item => stringify(item));
  let result = [...array];

  arrayToAddOrRemove.forEach(item => {
    if (base.includes(stringify(item))) {
      result = result.filter(el => stringify(el) !== stringify(item));
    } else {
      result.push(item);
    }
  });

  return result;
};

export default getSingleValuesArrayFromArrays;
