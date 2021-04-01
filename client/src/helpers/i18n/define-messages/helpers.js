/* eslint no-eval: off */
import { parse } from '@babel/core';
import generate from '@babel/generator';

export const extract = value => {
  const {
    program: {
      body: [
        {
          expression: { body },
        },
      ],
    },
  } = parse(value.toString());
  const { code } = generate(body);

  return eval(code);
};
