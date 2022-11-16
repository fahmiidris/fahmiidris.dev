import {
  FullMonth,
  PartialMonth,
  NumberMonth,
  FullYear,
  PartialYear,
  DayOfTheWeek,
  Hour,
  Hour24,
  Minutes,
  Seconds,
  PostOrAnteMeridiem,
  UserText,
  Day,
  DayOfTheMonth,
} from './subs';

import type { Token } from './parser';
import type { TinyTimeOptions } from './index';

type Days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

const days: Days[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months: Month[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const paddWithZeros = (int: number) => {
  return int < 10 ? '0' + int : '' + int;
};

const suffix = (int: number) => {
  return int % 10 == 1 && int != 11 ? int + 'st' : int % 10 == 2 && int != 12 ? int + 'nd' : int % 10 == 3 && int != 13 ? int + 'rd' : int + 'th';
};

export const compiler = (tokens: Token[], date: Date, options: TinyTimeOptions) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const day = date.getDate();

  let compiled = '';
  let index = 0;

  while (index < tokens.length) {
    const token = tokens[index];
    switch (token.t) {
      case UserText:
        compiled += token.v;
        break;
      case Day:
        compiled += suffix(day);
        break;
      case PartialMonth:
        compiled += months[month].slice(0, 3);
        break;
      case FullMonth:
        compiled += months[month];
        break;
      case NumberMonth:
        let mnth = month + 1;

        if (options.padMonth) {
          mnth = Number(paddWithZeros(mnth));
        }

        compiled += mnth;
        break;
      case FullYear:
        compiled += year;
        break;
      case PartialYear:
        compiled += (year + '').slice(2);
        break;
      case DayOfTheWeek:
        compiled += days[date.getDay()];
        break;
      case DayOfTheMonth:
        compiled += options.padDays ? paddWithZeros(day) : day;
        break;
      case Hour:
        let hour = hours === 0 || hours === 12 ? 12 : hours % 12;

        if (options.padHours) {
          hour = Number(paddWithZeros(hour));
        }

        compiled += hour;
        break;
      case Hour24:
        let hour24 = hours;
        if (options.padHours) {
          hour24 = Number(paddWithZeros(hour24));
        }
        compiled += hour24;
        break;
      case Minutes:
        compiled += paddWithZeros(minutes);
        break;
      case Seconds:
        compiled += paddWithZeros(seconds);
        break;
      case PostOrAnteMeridiem:
        compiled += hours >= 12 ? 'PM' : 'AM';
        break;
    }

    index++;
  }

  return compiled;
};

export default compiler;
