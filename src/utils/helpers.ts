const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * format -> mount - date - year
 *
 * example: '07-16-2002' -> 'July 16, 2002'
 * @return string
 */
export const formatDate = (dateString: string): string => {
  const dateObj: Date = new Date(dateString);
  return `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};

export const classNames = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
