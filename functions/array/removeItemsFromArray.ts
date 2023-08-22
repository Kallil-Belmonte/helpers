/**
 * @function removeItemsFromArray
 * @description Removes items from an array, using the index of the items or the items itself.
 * @param { any[] } array - Values array.
 * @param { any[] } itemsToRemove - Items to remove.
 * @param { boolean } [useIndex] - If true, uses the index to remove items.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/gEoqXP}
 */

const removeItemsFromArray = <Type = any>(
  array: Type[],
  itemsToRemove: any[],
  useIndex?: boolean,
) =>
  array.filter((item, index) => {
    if (useIndex) return !itemsToRemove.includes(index);
    return !itemsToRemove.includes(item);
  });

export default removeItemsFromArray;
