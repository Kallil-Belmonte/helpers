/**
 * @function getPastFutureDate
 * @description Gets the past and future dates.
 * @param config - Date information.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/mdmYVNo}
 */

type Params = {
  date?: string | Date;
  days?: number;
  months?: number;
  years?: number;
};

export const getPastDate = (params: Params) => {
  const { date, days, months, years } = params;
  const d = date ? new Date(date) : new Date();
  if (years) d.setFullYear(d.getFullYear() - years);
  if (months) d.setMonth(d.getMonth() - months);
  if (days) d.setDate(d.getDate() - days);
  return d;
};

export const getFutureDate = (params: Params) => {
  const { date, days, months, years } = params;
  const d = date ? new Date(date) : new Date();
  if (years) d.setFullYear(d.getFullYear() + years);
  if (months) d.setMonth(d.getMonth() + months);
  if (days) d.setDate(d.getDate() + days);
  return d;
};
