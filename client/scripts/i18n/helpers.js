import { parse, traverse } from '@babel/core';
import { readFileSync as read, writeFileSync as write } from 'fs';
import glob from 'glob';

import * as ast from 'helpers/ast';
import * as json from 'helpers/json';
import { dirname } from 'helpers/filesystem';

export const load = pattern => {
  const format = path => ({ content: read(path).toString(), path });
  const promise = (resolve, reject) =>
    glob(pattern, (error, files) =>
      error ? reject(error) : resolve(Promise.all(files.map(format)))
    );

  return new Promise(promise);
};

export const extract = ([definitions, translations]) => {
  const defaults = definitions.reduce(register, []).sort(organize);
  const process = ({ content, path }) => {
    const current = json.parse(content);
    const reconcile = (stack, { key, value }) => {
      const { [key]: next = value } = current;

      return Object.assign(stack, { [key]: next });
    };
    const translation = defaults.reduce(reconcile, {});
    const file = write(path, json.stringify(translation, null, 2));

    return file;
  };

  return translations.map(process);
};

export const organize = ({ key: previous }, { key: next }) => {
  const normalized = {
    next: next.toUpperCase(),
    previous: previous.toUpperCase(),
  };
  const { [true]: ratio = 0 } = {
    [normalized.previous < normalized.next]: -1,
    [normalized.previous > normalized.next]: 1,
  };

  return ratio;
};

export const register = (dictionary, { content, path }) => {
  const root = dirname(path);
  const translate = () => {
    const code = parse(content);
    const coordinates = {
      CallExpression({
        node: {
          arguments: [settings],
        },
      }) {
        const merge = ({ value, ...message }) => {
          const key = [root].concat(message.path).join('/');

          return messages.push({ key, value });
        };

        return ast.traverse(settings).with(merge);
      },
    };
    const messages = [];

    traverse(code, coordinates);

    return messages;
  };

  return dictionary.concat(translate());
};
