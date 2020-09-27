import { bool, func, node, oneOfType, string } from 'prop-types';

import { propTypes as items } from '../items';

export const propTypes = {
  label: node.isRequired,
  url: oneOfType([func, string]),
  fragment: string,
  active: bool,
  exact: bool,
  disabled: bool,
  items: function() {
    return items.apply(this, arguments);
  },
};
