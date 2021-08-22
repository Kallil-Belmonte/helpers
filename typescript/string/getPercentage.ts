/**
 * @description Gets the percentage of a base value.
 * @see { @link https://codepen.io/kallil-belmonte/full/MWmRGLJ }
 */

const getPercentage = (value: number, total: number, locale: string | null = 'pt-BR') => {
  const percentage = Number((value / (total / 100)).toFixed(2));

  return locale
    ? new Intl.NumberFormat(locale, {
        style: 'percent',
        maximumFractionDigits: 2,
      }).format(percentage / 100)
    : percentage;
};

export default getPercentage;
