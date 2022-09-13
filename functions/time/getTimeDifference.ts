/**
 * @name getTimeDifference
 * @description Gets the difference between two dates.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/rNzMzyy }
 */

const getTimeDifference = (dateFrom: string | Date, dateTo?: string | Date) => {
  const dateFromResult = typeof dateFrom === 'string' ? new Date(dateFrom) : dateFrom;
  const dateToResult = typeof dateTo === 'string' ? new Date(dateTo) : dateTo || new Date();

  const milliseconds = Number(dateToResult) - Number(dateFromResult);
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;

  return {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    weeks,
  };
};

export default getTimeDifference;
