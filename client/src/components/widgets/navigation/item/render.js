import React, { useCallback } from 'react';
import { NavLink as Link } from 'react-router-dom';

import use from './hooks';
import Items from '../items';

export default ({ className, label, items, disabled, ...props }) => {
  const link = use(props);
  const Item = useCallback(
    () => (disabled ? label : <Link {...link}>{label}</Link>),
    [disabled, label, link]
  );

  return (
    <li className={className}>
      <Item />
      <Items items={items} />
    </li>
  );
};
