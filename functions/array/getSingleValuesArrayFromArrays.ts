/**
 * @name getSingleValuesArrayFromArrays
 * @description Returns just the unique items from two arrays.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/bGdgLxV }
 */

const getSingleValuesArrayFromArrays = (array: any[], arrayToAddOrRemove: any[]) => {
  let result = [...array];

  arrayToAddOrRemove.forEach(item => {
    if (array.includes(item)) {
      result = result.filter(el => el !== item);
    } else {
      result.push(item);
    }
  });

  return result;
};

export default getSingleValuesArrayFromArrays;
