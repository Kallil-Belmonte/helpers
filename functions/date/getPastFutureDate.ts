/**
 * @name getPastFutureDate
 * @description Gets the past and future dates.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/mdmYVNo }
 */

export const getPastDate = (daysQuantity: number, date?: string, config = {}, locale = 'pt-BR') => {
  const d = date ? new Date(date) : new Date();
  const pastDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() - daysQuantity);
  return pastDate.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    ...config,
  });
};

export const getFutureDate = (
  daysQuantity: number,
  date?: string,
  config = {},
  locale = 'pt-BR',
) => {
  const d = date ? new Date(date) : new Date();
  const pastDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + daysQuantity);
  return pastDate.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    ...config,
  });
};
