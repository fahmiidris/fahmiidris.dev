import SubToTypeIdentifierMap, { UserText } from './subs';

export type Token = {
  t: string;
  v?: string;
};

const parser = (template: string): Token[] => {
  const tokens: Token[] = [];

  let position: number = 0;
  let text: string = '';

  while (position < template.length) {
    let char: string = template[position++];

    if (char === '{') {
      if (text) {
        tokens.push({
          t: UserText,
          v: text,
        });
      }

      text = '';
      let sub: string = '';
      char = template[position++];

      while (char !== '}') {
        sub += char;
        char = template[position++];
      }

      tokens.push({
        t: SubToTypeIdentifierMap[sub],
      });
    } else {
      text += char;
    }
  }

  if (text) {
    tokens.push({
      t: UserText,
      v: text,
    });
  }

  return tokens;
};

export default parser;
