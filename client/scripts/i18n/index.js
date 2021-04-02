import { extract, load } from './helpers';

export default Promise.all([
  load('src/**/messages.js'),
  load('src/i18n/*.json'),
]).then(extract);
