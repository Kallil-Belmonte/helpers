/**
 * @function getPercentage
 * @description Gets the percentage of a base value.
 * @param { number | string } value - Value to get the porcentage.
 * @param { number | string } total - Total value.
 * @param { string } [locale=pt-BR] - Locale.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/MWmRGLJ }
 */

const getPercentage = (
  value: number | string,
  total: number | string,
  locale: string = 'pt-BR',
) => {
  const totalDivide = (Number(total) / 100).toFixed(2);
  const percentage = Number(value) / Number(totalDivide);

  return locale
    ? new Intl.NumberFormat(locale, {
        style: 'percent',
        maximumFractionDigits: 2,
      }).format(percentage / 100)
    : percentage;
};

export default getPercentage;
