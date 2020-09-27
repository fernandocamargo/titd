import React from 'react';

import Item from '../item';

export const renderItem = (item, index) => <Item key={index} {...item} />;

export default ({ items }) =>
  !!items.length && <ul>{items.map(renderItem)}</ul>;
