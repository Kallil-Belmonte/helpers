type Config = {
  date?: Date;
  day?: number;
  month?: number;
};

/**
 * @function getZodiacSign
 * @description Gets the zodiac sign based on date or day and month.
 * @param { Object } config - Date information.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/bGMVXJQ}
 */

const getZodiacSign = (config: Config) => {
  const { date, day: dayParam, month: monthParam } = config;
  const day = date ? date.getDay() : dayParam || 1;
  const month = date ? date.getMonth() + 1 : monthParam || 1;

  const from = (fromDay: number, fromMonth: number) => day >= fromDay && month === fromMonth;
  const to = (toDay: number, toMonth: number) => day <= toDay && month === toMonth;

  if (from(20, 1) || to(18, 2)) return 'Aquarius';
  if (from(19, 2) || to(20, 3)) return 'Pisces';
  if (from(21, 3) || to(19, 4)) return 'Aries';
  if (from(20, 4) || to(20, 5)) return 'Taurus';
  if (from(21, 5) || to(20, 6)) return 'Gemini';
  if (from(21, 6) || to(22, 7)) return 'Cancer';
  if (from(23, 7) || to(22, 8)) return 'Leo';
  if (from(23, 8) || to(22, 9)) return 'Virgo';
  if (from(23, 9) || to(22, 10)) return 'Libra';
  if (from(23, 10) || to(21, 11)) return 'Scorpio';
  if (from(22, 11) || to(21, 12)) return 'Sagittarius';
  if (from(22, 12) || to(19, 1)) return 'Capricorn';

  return '';
};

export default getZodiacSign;
