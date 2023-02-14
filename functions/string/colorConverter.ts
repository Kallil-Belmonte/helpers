/**
 * @function colorConverter
 * @description Converts the color format.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/wvovgGp}
 */

export const hexToRgb = (hex: string, opacity = '1') => {
  let hexToConvert = hex.replace('#', '');
  hexToConvert = hexToConvert.length === 3 ? `${hexToConvert}${hexToConvert}` : hexToConvert;

  const result = new RegExp('^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$', 'i').exec(hexToConvert);
  if (!result) return '';

  const R = parseInt(result[1], 16);
  const G = parseInt(result[2], 16);
  const B = parseInt(result[3], 16);

  return `rgba(${R}, ${G}, ${B}, ${opacity})`;
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
