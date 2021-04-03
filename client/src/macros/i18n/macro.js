const { createMacro } = require('babel-plugin-macros');

const modules = require('./modules');

module.exports = createMacro(context => {
  const connect = ([name, apply]) => {
    const {
      references: { [name]: references },
    } = context;

    return references.forEach(apply.bind(context));
  };

  return Object.entries(modules).forEach(connect);
});
