type Result = {
  [key: string]: number;
};

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = WEEKS * 4.345;

const checkAndUpdate = (result: Result, property: string, time: number) => {
  if (result.difference >= time) {
    result[property] = Math.floor(result.difference / time);
    result.difference -= result[property] * time;
  }
};

const diff = (a: Date, b: Date) => {
  let difference = (Number(a) - Number(b)) | 0;

  const result = {
    difference: difference,
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    weeks: 0,
    months: 0,
  };

  checkAndUpdate(result, 'months', MONTHS);
  checkAndUpdate(result, 'weeks', WEEKS);
  checkAndUpdate(result, 'days', DAYS);
  checkAndUpdate(result, 'hours', HOURS);
  checkAndUpdate(result, 'minutes', MINUTES);
  checkAndUpdate(result, 'seconds', SECONDS);

  if (result.difference >= 0) {
    result.milliseconds = result.difference;
  }

  return result;
};

export default diff;
