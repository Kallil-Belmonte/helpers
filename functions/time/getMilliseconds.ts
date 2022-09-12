/**
 * @name getMilliseconds
 * @description Gets the milliseconds from a specified period.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/oNdzNyy }
 */

type Config = { week?: number; day?: number; hour?: number; minute?: number; second?: number };

const getMilliseconds = (config: Config) => {
  const { week, day, hour, minute, second } = config;

  const secondBase = 1000;
  const minuteBase = secondBase * 60;
  const hourBase = minuteBase * 60;
  const dayBase = hourBase * 24;
  const weekBase = dayBase * 7;

  let result = 0;

  if (second) result += second * secondBase;
  if (minute) result += minute * minuteBase;
  if (hour) result += hour * hourBase;
  if (day) result += day * dayBase;
  if (week) result += week * weekBase;

  return result;
};

export default getMilliseconds;
