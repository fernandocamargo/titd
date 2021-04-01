import { parse, traverse } from '@babel/core';
import { readFileSync, writeFile } from 'fs';
import glob from 'glob';
// import { dirname, relative, resolve } from 'path';
// import { cwd } from 'process';

// import * as ast from 'helpers/ast';

// import { compilerOptions } from '../../jsconfig.json';

export const load = pattern => {
  const format = path => ({ content: read(path), path });
  const promise = (resolve, reject) =>
    glob(pattern, (error, files) =>
      error ? reject(error) : resolve(Promise.all(files.map(format)))
    );

  return new Promise(promise);
};

export const read = path => readFileSync(path).toString();

export const extract = ([definitions, translations]) => {
  const defaults = definitions.reduce(
    (messages, { content, path }) => console.log({ path }) || messages,
    {}
  );

  return translations.forEach();
};

/*
export const load = definitions =>
  definitions
    .map(({ content, path }) => {
      const messages = new Map();

      traverse(parse(content), {
        CallExpression({
          node: {
            arguments: [settings],
          },
        }) {
          return ast
            .traverse(settings)
            .with(message =>
              messages.set(
                [
                  relative(
                    resolve(cwd(), compilerOptions.baseUrl),
                    dirname(path)
                  ),
                ]
                  .concat(message.path)
                  .join('/'),
                message.value
              )
            );
        },
      });

      return messages;
    })
    .reduce((previous, next) => new Map([...previous, ...next]));


export const write = (path, content) =>
  new Promise((resolve, reject) =>
    writeFile(path, content, error => (error ? reject(error) : resolve(true)))
  );

export const save = translations => {
  const format = ({ content, path }) => ({
    content: content ? JSON.parse(content) : {},
    path,
  });

  return translations.map(format);
};
*/
