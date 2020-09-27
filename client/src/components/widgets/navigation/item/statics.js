import extend from 'lodash/clone';
import { string } from 'prop-types';

import { propTypes as item } from 'statics/navigation/item';

export const displayName = 'Item';

export const propTypes = extend(item, {
  className: string.isRequired,
});

export const defaultProps = {
  items: [],
  disabled: false,
};
