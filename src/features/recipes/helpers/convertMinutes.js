export const convertMinutes = (minutes) => {
  if (minutes < 60) return minutes + 'min';
  else {
    const hours = Math.floor(minutes / 60);
    const mins = minutes - 60 * hours;
    const time = mins ? `${hours}h ${mins}m` : `${hours}h`;
    return time;
  }
};
