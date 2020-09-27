import { useMemo } from 'react';

import { format } from './helpers';

export default props => {
  const items = useMemo(() => format({ items: props.items }), [props.items]);

  return { items };
};
