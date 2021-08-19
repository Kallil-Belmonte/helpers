/**
 * @description Rearranges the array items into groups of arrays, based on the quantity specified.
 * @see { @link https://codepen.io/kallil-belmonte/full/JmmEdz }
 */

const groupArrayItemsInArrays = (
  array: any[],
  itemsQuantity: number,
  repeatLastItem?: boolean,
): any[][] => {
  const matrix = [[]];

  if (repeatLastItem && itemsQuantity > 1) {
    let counter = 0;
    let startSlice = 0;
    let endSlice = itemsQuantity;

    while (counter <= array.length) {
      const lastIndex = matrix.length - 1;

      if (!matrix[lastIndex].length) {
        matrix[lastIndex].push(...array.slice(startSlice, endSlice));

        const ultimoItem = matrix[matrix.length - 1];
        const ultimoItemLastIndex: number = ultimoItem.length - 1;

        startSlice = array.findIndex(item => item === ultimoItem[ultimoItemLastIndex]);
        endSlice = startSlice + itemsQuantity;

        if (ultimoItem.length < itemsQuantity) {
          break;
        }

        matrix.push([]);
      }

      counter += 1;
    }
  } else {
    array.forEach(item => {
      const lastIndex: number = matrix.length - 1;

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
