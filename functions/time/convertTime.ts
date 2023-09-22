type Config = { second?: number; minute?: number; hour?: number; day?: number; week?: number };

type Output = 'millisecond' | 'second' | 'minute' | 'hour' | 'day';

/**
 * @function convertTime
 * @description Converts the time on a specific output.
 * @param { Object } config - Configuration.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/oNdzNyy}
 */

const convertTime = (config: Config, output: Output = 'millisecond') => {
  const { second, minute, hour, day, week } = config;

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

  if (output === 'millisecond') return result;
  if (output === 'second') return result / secondBase;
  if (output === 'minute') return result / minuteBase;
  if (output === 'hour') return result / hourBase;
  return result / dayBase;
};

export default convertTime;
