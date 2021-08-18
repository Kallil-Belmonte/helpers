/**
 * Sorts the objects inside an array by one property (in ascending or descending order).
 *
 * @see { @link https://codepen.io/kallil-belmonte/full/PdxGbP }
 */

const sortObjectsArray = (array: [], property: string, reverse = false) => {
  const sortBy = (key: string, reverseValue: boolean) => {
    const moveSmaller = reverseValue ? 1 : -1;
    const moveLarger = reverseValue ? -1 : 1;

    function move(a: any, b: any) {
      if (a[key] < b[key]) return moveSmaller;
      if (a[key] > b[key]) return moveLarger;

      return 0;
    }

    return move;
  };

  return array.sort(sortBy(property, reverse));
};

export default sortObjectsArray;
