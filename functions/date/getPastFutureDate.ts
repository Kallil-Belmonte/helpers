/**
 * @function getPastFutureDate
 * @description Gets the past and future dates.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/mdmYVNo }
 */

type Config = {
  date?: string | Date;
  days?: number;
  months?: number;
  years?: number;
};

export const getPastDate = (config: Config) => {
  const { date, days, months, years } = config;
  const d = date ? new Date(date) : new Date();
  if (years) d.setFullYear(d.getFullYear() - years);
  if (months) d.setMonth(d.getMonth() - months);
  if (days) d.setDate(d.getDate() - days);
  return d;
};

export const getFutureDate = (config: Config) => {
  const { date, days, months, years } = config;
  const d = date ? new Date(date) : new Date();
  if (years) d.setFullYear(d.getFullYear() + years);
  if (months) d.setMonth(d.getMonth() + months);
  if (days) d.setDate(d.getDate() + days);
  return d;
};
