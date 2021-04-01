const { dirname, relative, resolve } = require('path');
const { cwd } = require('process');

const {
  compilerOptions: { baseUrl },
} = require('../../../../jsconfig.json');

module.exports = filename =>
  relative(resolve(cwd(), baseUrl), dirname(filename));
