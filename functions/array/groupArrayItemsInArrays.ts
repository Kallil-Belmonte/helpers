/**
 * @function groupArrayItemsInArrays
 * @description Rearranges the array items into groups of arrays, based on the quantity specified.
 * @param { any[] } array - Values array.
 * @param { number } itemsQuantity - Items quantity.
 * @param { boolean } [repeatLastItem] - If true, repeats the last item.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/JmmEdz}
 */

const groupArrayItemsInArrays = (
  array: any[],
  itemsQuantity: number,
  repeatLastItem?: boolean,
): any[][] => {
  const matrix: any[][] = [[]];

  if (repeatLastItem && itemsQuantity > 1) {
    let counter = 0;
    let startSlice = 0;
    let endSlice = itemsQuantity;

    while (counter <= array.length) {
      const lastIndex = matrix.length - 1;

      if (!matrix[lastIndex].length) {
        matrix[lastIndex].push(...array.slice(startSlice, endSlice));

        const lastItem = matrix[matrix.length - 1];
        const lastItemsLastIndex = lastItem.length - 1;

        startSlice = array.findIndex(item => item === lastItem[lastItemsLastIndex]);
        endSlice = startSlice + itemsQuantity;

        if (lastItem.length < itemsQuantity) {
          break;
        }

        matrix.push([]);
      }

      counter += 1;
    }
  } else {
    array.forEach(item => {
      const lastIndex = matrix.length - 1;

      if (matrix[lastIndex].length < itemsQuantity) {
        matrix[lastIndex].push(item);
      } else {
        matrix.push([]);
        matrix[matrix.length - 1].push(item);
      }
    });
  }

  return matrix;
};

export default groupArrayItemsInArrays;
