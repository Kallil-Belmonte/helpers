/**
 * @function checkValueDifference
 * @description Checks the difference between two values.
 * @param { number } firstValue - First value.
 * @param { number } secondValue - Second value.
 * @param { Object } [options={}] - Check options.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/vYNQdMr}
 */

type Options = {
  difference?: number;
  strict?: boolean;
  checkEqual?: boolean;
};

const checkValueDifference = (firstValue: number, secondValue: number, options: Options = {}) => {
  const { difference = 0, strict = true, checkEqual = false } = options;

  const differenceBetwenValues =
    firstValue > secondValue ? firstValue - secondValue : secondValue - firstValue;

  const differenceCheck = strict
    ? differenceBetwenValues === difference
    : differenceBetwenValues >= difference;

  return checkEqual ? firstValue === secondValue || differenceCheck : differenceCheck;
};

export default checkValueDifference;
