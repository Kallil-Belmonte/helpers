/**
 * @function seperateNumbersArrayInArrays
 * @description Creates multiples arrays where the numbers are separated by sequence.
 * @param array - Numbers array.
 * @param isArrayCrescent - True if the array is crescent.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/KKpQQMg}
 */

const seperateNumbersArrayInArrays = (array: number[], isArrayCrescent: boolean = true) => {
  const result: number[][] = [[]];

  array.forEach(item => {
    const lastIndex = result.length - 1;
    const lastArray = result[lastIndex];
    const lastItem = lastArray[lastArray.length - 1];
    const isSequence = isArrayCrescent ? lastItem + 1 === item : lastItem - 1 === item;

    if (!lastArray.length || isSequence) result[lastIndex].push(item);
    else result.push([item]);
  });

  return result;
};

export default seperateNumbersArrayInArrays;
