import { exit } from 'process';

import { extract, load } from './helpers';

export default Promise.all([
  load('src/**/messages.js'),
  load('src/i18n/*.json'),
])
  .then(extract)
  /*
      Promise.all(
        translations.map(path =>
          read(path).then(content => ({
            content: content ? JSON.parse(content) : {},
            path,
          }))
        )
      ).then(translation =>
        translation.reduce(
          (locales, { content, path }) =>
            locales.set(
              path,
              Object.entries(content).reduce(
                (messages, [namespace, message]) =>
                  messages.set(namespace, message),
                new Map()
              )
            ),
          new Map()
        )
      ),
    ])
  )
  .then(([definitions, translations]) =>
    Promise.all(
      Array.from(translations).map(([path, content]) =>
        write(
          path,
          JSON.stringify(
            Array.from(definitions).reduce(
              (stack, [namespace, defaultMessage]) =>
                Object.assign(stack, {
                  [namespace]: content.get(namespace) || defaultMessage,
                }),
              {}
            ),
            null,
            2
          )
        )
      )
    )
  )
  */
  .then(
    what => console.log('done();', JSON.stringify(what, null, 1)) || exit(1)
  );
