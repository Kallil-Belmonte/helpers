/**
 * @function getDayShift
 * @description Gets the day shift to be used in a greeting for example.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/LYjRLNN}
 */

const getDayShift = () => {
  const SHIFTS = {
    morning: 'Morning',
    afternoon: 'Afternoon',
    night: 'Night',
  };
  const { morning, afternoon, night } = SHIFTS;

  const currentDate = new Intl.DateTimeFormat('pt-BR', { hour: 'numeric' }).format(new Date());
  const currentHour = Number(currentDate);

  if (currentHour >= 12 && currentHour < 19) return afternoon;
  if (currentHour >= 19 || currentHour < 6) return night;
  return morning;
};

export default getDayShift;
