/**
 * Gets the first and last day of the current year.
 *
 * @see { @link https://codepen.io/kallil-belmonte/full/PdMREw }
 */

export const getFirstDayOfYear = () =>
  new Date(new Date().getFullYear(), 0, 1).toISOString().slice(0, 10);

export const getLastDayOfYear = () =>
  new Date(new Date().getFullYear(), 11, 31).toISOString().slice(0, 10);
