/**
 * @description Roman number conversion.
 * @see { @link https://codepen.io/kallil-belmonte/full/PoodqoB }
 */

export const toRoman = (number: number) => {
  let result = '';
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i <= decimal.length; i++) {
    while (number % decimal[i] < number) {
      result += roman[i];
      number -= decimal[i];
    }
  }

  return result;
};

export const fromRoman = (string: string) => {
  let result = '';
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i <= decimal.length; i++) {
    while (string.indexOf(roman[i]) === 0) {
      result += decimal[i];
      string = string.replace(roman[i], '');
    }
  }

  return result;
};
