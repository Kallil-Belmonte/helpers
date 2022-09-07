/**
 * @name getZodiacSign
 * @description Gets the zodiac sign based on date or day and month.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/bGMVXJQ }
 */

type Params = {
  date?: Date;
  day?: number;
  month?: number;
};

const getZodiacSign = ({ date, day: dayParam, month: monthParam }: Params) => {
  let day: number = 1;
  let month: number = 1;

  if (date) {
    day = date.getDay();
    month = date.getMonth() + 1;
  }

  if (dayParam && monthParam) {
    day = dayParam;
    month = monthParam;
  }

  if ((day >= 20 && month === 1) || (day <= 18 && month === 2)) return 'Aquarius';
  if ((day >= 19 && month === 2) || (day <= 20 && month === 3)) return 'Pisces';
  if ((day >= 21 && month === 3) || (day <= 19 && month === 4)) return 'Aries';
  if ((day >= 20 && month === 4) || (day <= 20 && month === 5)) return 'Taurus';
  if ((day >= 21 && month === 5) || (day <= 20 && month === 6)) return 'Gemini';
  if ((day >= 21 && month === 6) || (day <= 22 && month === 7)) return 'Cancer';
  if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) return 'Leo';
  if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) return 'Virgo';
  if ((day >= 23 && month === 9) || (day <= 22 && month === 10)) return 'Libra';
  if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) return 'Scorpio';
  if ((day >= 22 && month === 11) || (day <= 21 && month === 12)) return 'Sagittarius';
  if ((day >= 22 && month === 12) || (day <= 19 && month === 1)) return 'Capricorn';

  return '';
};

export default getZodiacSign;
