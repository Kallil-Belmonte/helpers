/**
 * @function setPagination
 * @description Sets a pagination object based on an array.
 * @param { any[] } array - Data array.
 * @param { number } quantity - Number of pages per page.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/YzMvVKz}
 */

const setPagination = (array: any[], quantity: number) =>
  array.reduce((accumulator, currentValue, index) => {
    if (!index) accumulator[1] = [];

    const keys = Object.keys(accumulator);
    const lastPage = Number(keys[keys.length - 1]);

    if (accumulator[lastPage].length < quantity) accumulator[lastPage].push(currentValue);
    else accumulator[lastPage + 1] = [currentValue];

    return accumulator;
  }, {});

export default setPagination;
