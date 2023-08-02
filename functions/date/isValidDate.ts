type Config = {
  day: number;
  month: number;
  year: number;
};

/**
 * @function isValidDate
 * @description Validates a date.
 * @param { Config } config - Day, month and year.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/gOQboXz}
 */

const isValidDate = (config: Config) => {
  const { day: dayParam, month: monthParam, year: yearParam } = config;
  const date = new Date(`${yearParam}-${monthParam}-${dayParam}`);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day > 31 || month !== monthParam || year !== yearParam) return false;
  return true;
};

export default isValidDate;
