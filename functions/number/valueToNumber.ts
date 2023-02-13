/**
 * @function valueToNumber
 * @description Converts a string of monetary/percentage value to a number.
 * @param { string } value - String number to be converted.
 * @param { string } [decimalSymbol=,] - Decimal symbol.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/RwwYdYw }
 */

const valueToNumber = (value: string, decimalSymbol = ',') => {
  const comma = ',';
  const dot = '.';

  if (value && (decimalSymbol === comma || decimalSymbol === dot)) {
    let result = value.replace(/[a-z$%]/gi, '').trim();
    if (decimalSymbol === comma) result = result.replace(/\./g, '').replace(/,/g, '.');
    if (decimalSymbol === dot) result = result.replace(/,/g, '');
    return Number(result);
  }

  return value;
};

export default valueToNumber;
