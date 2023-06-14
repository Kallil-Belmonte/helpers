/**
 * @function colorConverter
 * @description Converts the color format.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/wvovgGp}
 */

export const hexToRgba = (hex: string, opacity = '1') => {
  let hexToConvert = hex.replace('#', '');
  if (hexToConvert.length === 3) hexToConvert = `${hexToConvert}${hexToConvert}`;

  const hexRegex = /^[0-9A-Fa-f]{6}$/;
  if (!hexRegex.test(hexToConvert)) {
    throw new Error('A string fornecida não é um valor hexadecimal válido.');
  }

  const red = parseInt(hexToConvert.slice(0, 2), 16);
  const green = parseInt(hexToConvert.slice(2, 4), 16);
  const blue = parseInt(hexToConvert.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const rgbToHex = (rgb: string) => {
  const [R, G, B] = rgb.replace(/[a-z()]/gi, '').split(',');

  const getHex = (code: string) => {
    const number = Number(code);
    const hex = number.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getHex(R) + getHex(G) + getHex(B)}`;
};
