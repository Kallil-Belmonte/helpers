/**
 * @description Removes items from an array, using the index of the items or the items itself.
 * @see { @link https://codepen.io/kallil-belmonte/full/gEoqXP }
 */

const removeItemsFromArray = (array: any[], itemsToRemove: any[], useIndex?: boolean) =>
  array.filter(item => {
    if (useIndex) return !itemsToRemove.includes(array.indexOf(item));
    return !itemsToRemove.includes(item);
  });

export default removeItemsFromArray;
