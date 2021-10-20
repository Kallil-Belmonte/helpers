/**
 * @name getDaysDifference
 * @description Gets the difference between two dates.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/rNzMzyy }
 */

const getDaysDifference = (date: string | Date, dateBase?: string | Date) => {
  const dateBaseResult = typeof dateBase === 'string' ? new Date(dateBase) : dateBase || new Date();
  const dateResult = typeof date === 'string' ? new Date(date) : date;
  return parseInt(`${(Number(dateBaseResult) - Number(dateResult)) / (1000 * 60 * 60 * 24)}`, 10);
};

export default getDaysDifference;
