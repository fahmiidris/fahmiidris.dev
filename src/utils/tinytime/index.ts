import parser from './parser';
import compiler from './compiler';

type TinyTime = {
  render: (date: Date) => string;
};

export type TinyTimeOptions = {
  padHours?: boolean;
  padDays?: boolean;
  padMonth?: boolean;
};

const tinytime = (template: string, options: TinyTimeOptions = {}): TinyTime => {
  const templateAST = parser(template);
  return {
    render(date: Date) {
      return compiler(templateAST, date, options);
    },
  };
};

export default tinytime;
