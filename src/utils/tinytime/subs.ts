export const UserText: string = 'a';
export const FullMonth: string = 'b';
export const PartialMonth: string = 'c';
export const FullYear: string = 'd';
export const PartialYear: string = 'e';
export const DayOfTheWeek: string = 'f';
export const Hour: string = 'g';
export const Minutes: string = 'h';
export const Seconds: string = 'i';
export const PostOrAnteMeridiem: string = 'j';
export const Day: string = 'k';
export const DayOfTheMonth: string = 'l';
export const NumberMonth: string = 'n';
export const Hour24: string = 'm';

const SubToTypeIdentifierMap: {
  [abbreviation: string]: string;
} = {
  MMMM: FullMonth,
  MM: PartialMonth,
  Mo: NumberMonth,
  YYYY: FullYear,
  YY: PartialYear,
  dddd: DayOfTheWeek,
  DD: DayOfTheMonth,
  Do: Day,
  h: Hour,
  H: Hour24,
  mm: Minutes,
  ss: Seconds,
  a: PostOrAnteMeridiem,
};

export default SubToTypeIdentifierMap;
