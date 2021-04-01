const { createMacro } = require('babel-plugin-macros');
const { dirname, relative, resolve } = require('path');
const { cwd } = require('process');

const {
  compilerOptions: { baseUrl },
} = require('../../../jsconfig.json');

module.exports = createMacro(
  ({
    babel: {
      types: {
        callExpression,
        identifier,
        importDeclaration,
        importDefaultSpecifier,
        objectExpression,
        objectProperty,
        stringLiteral,
      },
    },
    state: {
      file: {
        path: {
          node: { body },
        },
      },
      filename,
    },
    references: { defineMessages = [] },
  }) => {
    defineMessages.forEach(({ parentPath }) => {
      const [{ node: messages }] = parentPath.get('arguments');
      const namespace = relative(resolve(cwd(), baseUrl), dirname(filename));

      body.unshift(
        importDeclaration(
          [importDefaultSpecifier(identifier('defineMessages'))],
          stringLiteral('helpers/i18n/define-messages')
        )
      );

      return parentPath.replaceWith(
        callExpression(identifier('defineMessages'), [
          objectExpression([
            objectProperty(identifier('namespace'), stringLiteral(namespace)),
            objectProperty(identifier('messages'), messages),
          ]),
        ])
      );
    });
  }
);
