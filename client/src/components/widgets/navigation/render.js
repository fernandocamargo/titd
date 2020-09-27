import React, { useMemo } from 'react';

import use from './hooks';
import Items from './items';

export default ({ className, ...props }) => {
  const { items } = use(props);
  const title = useMemo(() => props.title || 'Navigate through:', [
    props.title,
  ]);

  return (
    <nav className={className}>
      <h3>{title}</h3>
      <Items items={items} />
    </nav>
  );
};
