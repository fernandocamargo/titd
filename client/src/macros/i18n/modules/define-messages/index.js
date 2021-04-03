const { dirname } = require('@helpers/filesystem');

module.exports = function({ parentPath }) {
  const {
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
  } = this;
  const [{ node: messages }] = parentPath.get('arguments');
  const namespace = dirname(filename);

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
};
