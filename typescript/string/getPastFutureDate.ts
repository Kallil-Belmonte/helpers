/**
 * @description Gets the past and future dates.
 * @see { @link https://codepen.io/kallil-belmonte/full/mdmYVNo }
 */

export const getPastDate = (daysQuantity: number, date: string, config = {}, locale = 'pt-BR') => {
  const day = date ? new Date(date) : new Date();
  const pastDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() - daysQuantity);
  return pastDate.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    ...config,
  });
};

export const getFutureDate = (
  daysQuantity: number,
  date: string,
  config = {},
  locale = 'pt-BR',
) => {
  const day = date ? new Date(date) : new Date();
  const pastDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() + daysQuantity);
  return pastDate.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    ...config,
  });
};
