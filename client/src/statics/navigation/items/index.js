import { arrayOf, shape } from 'prop-types';

import { propTypes as item } from '../item';

export const propTypes = function() {
  return arrayOf(shape(item)).apply(this, arguments);
};
