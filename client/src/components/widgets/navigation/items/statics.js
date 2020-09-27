import { string } from 'prop-types';

import { propTypes as items } from 'statics/navigation/items';

export const displayName = 'Items';

export const propTypes = {
  className: string.isRequired,
  items,
};

export const defaultProps = {
  items: [],
};
