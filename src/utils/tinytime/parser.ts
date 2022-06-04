import SubToTypeIdentifierMap, { UserText } from './subs';

export type Token = {
    t: string;
    v?: string;
};

const parser = (template: string) => {
    const tokens = [];

    let position = 0;
    let text = '';

    while (position < template.length) {
        let char = template[position++];

        if (char === '{') {
            if (text) {
                tokens.push({
                    t: UserText,
                    v: text,
                });
            }

            text = '';
            let sub = '';
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
