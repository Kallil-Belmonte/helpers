/**
 * @function getTimeDifference
 * @description Gets the difference between two dates.
 * @param dateFrom - Start date.
 * @param dateTo - End date.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/rNzMzyy}
 */

const getTimeDifference = (dateFrom: string | Date, dateTo?: string | Date) => {
  const { floor } = Math;
  const dateFromResult = typeof dateFrom === 'string' ? new Date(dateFrom) : dateFrom;
  const dateToResult = typeof dateTo === 'string' ? new Date(dateTo) : dateTo || new Date();

  const milliseconds = Number(dateToResult) - Number(dateFromResult);
  const seconds = floor(milliseconds / 1000);
  const minutes = floor(seconds / 60);
  const hours = floor(minutes / 60);
  const days = floor(hours / 24);
  const weeks = floor(days / 7);
  const months = floor(days / 30);
  const years = Math.floor(days / 365);

  return {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
  };
};

export default getTimeDifference;
